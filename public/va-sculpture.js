// <va-sculpture> — escultura 3D editorial (Three.js). Lazy-load, pausa fora da tela, fallback estático.
// Controle externo: el.progress = 0..1 (Forma → Proporção → Equilíbrio → Precisão)
(() => {
if (customElements.get('va-sculpture')) return;
class VASculpture extends HTMLElement {
  connectedCallback() {
    Object.assign(this.style, { display: 'block', position: 'relative', width: '100%', height: '100%' });
    this.progress = 0; this._p = 0; this.mx = 0; this.my = 0; this._mx = 0; this._my = 0;
    this._io = new IntersectionObserver((es) => {
      this.visible = es[0].isIntersecting;
      if (this.visible && !this.started) this.init();
    }, { rootMargin: '400px' });
    this._io.observe(this);
    this._onMove = (e) => { this.mx = e.clientX / innerWidth - 0.5; this.my = e.clientY / innerHeight - 0.5; };
    addEventListener('pointermove', this._onMove, { passive: true });
  }
  disconnectedCallback() { this._io && this._io.disconnect(); removeEventListener('pointermove', this._onMove); cancelAnimationFrame(this._raf); this.renderer && this.renderer.dispose(); }
  fallback() {
    this.innerHTML = '';
    const d = document.createElement('div');
    Object.assign(d.style, { position: 'absolute', left: '50%', top: '50%', width: '52%', aspectRatio: '1', transform: 'translate(-50%,-50%)', borderRadius: '50%',
      background: 'radial-gradient(circle at 34% 30%, #F5F2EE 0%, #E6D6CB 38%, #D9C3B5 62%, #B79C8C 100%)', boxShadow: '0 60px 120px -40px rgba(59,42,36,.35)' });
    this.appendChild(d);
  }
  async init() {
    this.started = true;
    const weak = (navigator.hardwareConcurrency || 4) <= 2 || matchMedia('(prefers-reduced-motion: reduce)').matches;
    let THREE;
    try { THREE = await import('https://unpkg.com/three@0.160.0/build/three.module.js'); } catch (e) { return this.fallback(); }
    let renderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' }); } catch (e) { return this.fallback(); }
    this.renderer = renderer;
    const mobile = innerWidth < 760;
    renderer.setPixelRatio(Math.min(devicePixelRatio, mobile ? 1.5 : 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.domElement.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block';
    this.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
    camera.position.set(0, 0, 8.6);

    scene.add(new THREE.HemisphereLight(0xfff7f0, 0x5C3A40, 0.9));
    const key = new THREE.DirectionalLight(0xfff0e4, 2.6); key.position.set(3.5, 4, 5); scene.add(key);
    const rim = new THREE.DirectionalLight(0xD9C3B5, 1.6); rim.position.set(-5, 1.5, -3); scene.add(rim);
    const fill = new THREE.DirectionalLight(0xF5F2EE, 0.5); fill.position.set(-2, -3, 4); scene.add(fill);

    const seg = mobile || weak ? 80 : 150;
    const geo = new THREE.SphereGeometry(1.2, seg, seg);
    const base = geo.attributes.position.array.slice();
    const mat = new THREE.MeshPhysicalMaterial({ color: 0xDCC7B9, roughness: 0.58, metalness: 0, clearcoat: 0.35, clearcoatRoughness: 0.55, sheen: 0.7, sheenColor: new THREE.Color(0xF5F2EE), sheenRoughness: 0.6 });
    const body = new THREE.Mesh(geo, mat);
    const group = new THREE.Group(); group.add(body); scene.add(group);

    const lineMat = new THREE.MeshBasicMaterial({ color: 0x3B2A24, transparent: true, opacity: 0.55 });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.95, 0.0045, 6, 320), lineMat);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.25, 0.003, 6, 320), lineMat.clone()); ring2.material.opacity = 0.28;
    scene.add(ring); scene.add(ring2);
    const bead = new THREE.Mesh(new THREE.SphereGeometry(0.075, 32, 32), new THREE.MeshPhysicalMaterial({ color: 0x5C3A40, roughness: 0.35, clearcoat: 0.6 }));
    scene.add(bead);

    const resize = () => { const w = this.clientWidth || (this.parentElement && this.parentElement.clientWidth), h = this.clientHeight || (this.parentElement && this.parentElement.clientHeight); if (!w || !h) return; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); };
    resize(); this._ro = new ResizeObserver(resize); this._ro.observe(this);

    const pos = geo.attributes.position; const arr = pos.array;
    const lerp = (a, b, t) => a + (b - a) * t;
    let t = 0, last = performance.now(), frame = 0;
    const tick = (now) => {
      this._raf = requestAnimationFrame(tick);
      if (!this.visible) { last = now; return; }
      const dt = Math.min(0.05, (now - last) / 1000); last = now; t += dt * (weak ? 0.35 : 1);
      this._p += (this.progress - this._p) * 0.06;
      this._mx += (this.mx - this._mx) * 0.04; this._my += (this.my - this._my) * 0.04;
      const p = this._p;
      // Forma: orgânico → Precisão: quase perfeito
      const amp = lerp(0.30, 0.018, Math.min(1, p * 1.15));
      const freq = lerp(1.35, 2.2, p);
      const sy = 1 + 0.18 * Math.sin(Math.min(1, p * 2) * Math.PI); // proporção (alongamento áureo no meio)
      if (frame++ % (weak ? 2 : 1) === 0) {
        for (let i = 0; i < arr.length; i += 3) {
          const x = base[i], y = base[i + 1], z = base[i + 2];
          const n = Math.sin(x * freq + t * 0.35) * Math.sin(y * freq * 1.25 + t * 0.28) * Math.sin(z * freq * 0.9 + t * 0.22)
                  + 0.45 * Math.sin((x + y) * freq * 1.7 - t * 0.4) * Math.cos(z * freq * 1.3 + t * 0.18);
          const k = 1 + amp * n;
          arr[i] = x * k; arr[i + 1] = y * k * sy; arr[i + 2] = z * k;
        }
        pos.needsUpdate = true; geo.computeVertexNormals();
      }
      group.rotation.y = t * 0.08 + this._mx * 0.6;
      group.rotation.x = this._my * 0.35;
      const tilt = lerp(0.9, 0.0, Math.min(1, Math.max(0, (p - 0.4) / 0.45))); // equilíbrio: anel nivela
      ring.rotation.set(Math.PI / 2 + tilt * 0.55 + this._my * 0.2, tilt * 0.35, t * 0.05);
      ring2.rotation.set(Math.PI / 2 - tilt * 0.3 + this._my * 0.12, -tilt * 0.4 + this._mx * 0.2, 0);
      const a = t * 0.25;
      bead.position.set(Math.cos(a) * 1.95, Math.sin(a) * 1.95, 0).applyEuler(ring.rotation);
      renderer.render(scene, camera);
    };
    this._raf = requestAnimationFrame(tick);
  }
}
customElements.define('va-sculpture', VASculpture);
})();
