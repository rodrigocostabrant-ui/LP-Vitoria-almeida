"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

// Comportamento portado do Claude Design: revelações, parallax com profundidade, ken burns,
// pilhas de procedimentos e antes/depois, comparador arrastável, escultura 3D guiada pelo
// scroll, linha da jornada, cursor personalizado e CTA fixo no mobile.
export function useLanding() {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef(false);
  menuRef.current = menu;

  useEffect(() => {
    const S: any = { mx: 0, my: 0, smx: 0, smy: 0, cx: -100, cy: -100, tx: -100, ty: -100 };
    const reduce = site.movimento === "Reduzido" || matchMedia("(prefers-reduced-motion: reduce)").matches;
    const q = (s: string) => [...document.querySelectorAll<HTMLElement>(s)] as any[];
    const one = (s: string) => document.querySelector<HTMLElement>(s) as any;

    const onMove = (e: PointerEvent) => {
      S.mx = (e.clientX / innerWidth - 0.5) * 2; S.my = (e.clientY / innerHeight - 0.5) * 2;
      S.tx = e.clientX; S.ty = e.clientY;
    };
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element).closest?.('a[href^="#"]'); if (!a) return;
      const id = a.getAttribute("href")!; if (id.length < 2) return;
      const el = document.querySelector(id); if (!el) return;
      e.preventDefault();
      scrollTo({ top: el.getBoundingClientRect().top + scrollY, behavior: reduce ? "auto" : "smooth" });
    };
    addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("click", onClick);

    const initBA = (box: any) => {
      if (!box || box._init) return; box._init = true;
      box._c = reduce ? 50 : 100; box._t = 50;
      const h = box.querySelector("[data-ba-handle]"); if (!h) return;
      const set = (e: PointerEvent) => { const r = box.getBoundingClientRect(); box._t = Math.min(97, Math.max(3, ((e.clientX - r.left) / r.width) * 100)); };
      h.addEventListener("pointerdown", (e: PointerEvent) => { box._drag = true; h._down = true; try { h.setPointerCapture(e.pointerId); } catch {} set(e); });
      h.addEventListener("pointermove", (e: PointerEvent) => { if (h._down) set(e); });
      const up = () => { h._down = false; };
      h.addEventListener("pointerup", up); h.addEventListener("pointercancel", up);
      h.addEventListener("keydown", (e: KeyboardEvent) => {
        if (e.key === "ArrowLeft" || e.key === "ArrowRight") { e.preventDefault(); box._drag = true; box._t = Math.min(97, Math.max(3, box._t + (e.key === "ArrowLeft" ? -5 : 5))); }
      });
    };

    // scan
    S.speedEls = q("[data-speed],[data-depth]").map((el) => ({ el, s: parseFloat(el.dataset.speed || "1"), d: parseFloat(el.dataset.depth || "0") }));
    S.kb = q("[data-kenburns]");
    S.nav = one("[data-nav]");
    S.panels = q("[data-stack-panel]").map((el) => ({ el, inner: el.querySelector("[data-stack-inner]"), shade: el.querySelector("[data-stack-shade]"), clip: el.querySelector("[data-stack-clip]"), img: el.querySelector("[data-stack-img]"), num: el.querySelector("[data-stack-num]"), title: el.querySelector("[data-stack-title]") }));
    S.cards = q("[data-ba-card]").map((el) => ({ el, inner: el.querySelector("[data-ba-inner]"), shade: el.querySelector("[data-ba-shade]"), box: el.querySelector("[data-ba]"), st: parseFloat(getComputedStyle(el).top) || 0 }));
    S.cards.forEach((c: any) => initBA(c.box));
    S.words = q("[data-word]"); S.wordsBox = one("[data-words]");
    S.sculptSec = one("[data-sculpt]"); S.sculpt = one("[data-sculpture]");
    S.phases = q("[data-phase]"); S.ticks = q("[data-tick]");
    S.lineTrack = one("[data-line-track]"); S.lineFill = one("[data-line]");
    S.steps = q("[data-step]").map((el) => ({ el, dot: el.querySelector("[data-step-dot]") }));
    S.track = one("[data-track]");
    S.mbar = one("[data-mbar]"); S.final = one("#agendar");
    S.phase = -1;
    const cue = one("[data-scrollcue]");
    if (cue && !reduce) cue.animate([{ transform: "translateY(-100%)" }, { transform: "translateY(100%)" }], { duration: 2400, iterations: Infinity, easing: "cubic-bezier(.65,0,.35,1)" });

    // reveal
    const fromKF = (t: string): Record<string, string> => {
      if (t === "clip") return { clipPath: "inset(100% 0% 0% 0%)" };
      if (t === "clipx") return { clipPath: "inset(0% 100% 0% 0%)" };
      if (t === "line") return { transform: "translateY(108%)" };
      if (t === "fade") return { opacity: "0" };
      return { opacity: "0", transform: "translateY(44px)" };
    };
    const play = (el: any) => {
      if (el._rvDone) return; el._rvDone = true;
      clearTimeout(el._rvSafe);
      el._rvSafe = setTimeout(() => { el.style.opacity = ""; el.style.transform = ""; el.style.clipPath = ""; }, 2600 + +(el.dataset.delay || 0) + +(el.dataset.dur || 1300));
      const from = fromKF(el.dataset.reveal); const to: Record<string, string> = {};
      for (const k in from) to[k] = k === "opacity" ? "1" : k === "clipPath" ? "inset(0% 0% 0% 0%)" : "translateY(0)";
      const a = el.animate([from, to], { duration: +(el.dataset.dur || 1300), delay: +(el.dataset.delay || 0), easing: "cubic-bezier(.16,1,.3,1)", fill: "forwards" });
      a.onfinish = () => { for (const k in from) el.style[k] = ""; a.cancel(); };
    };
    const io = new IntersectionObserver((es) => es.forEach((en) => {
      if (!en.isIntersecting) return;
      io.unobserve(en.target);
      ((en.target as any)._rvKids || [en.target]).forEach(play);
    }), { rootMargin: "0px 0px -6% 0px", threshold: 0 });
    q("[data-reveal]").forEach((el) => {
      if (el._rvDone || el._rvPending) return;
      if (reduce) { el._rvDone = true; return; }
      const target = el.parentElement || el;
      const r = target.getBoundingClientRect();
      const near = r.top < innerHeight * 1.2 && r.bottom > 0;
      el._rvPending = true;
      Object.assign(el.style, fromKF(el.dataset.reveal));
      if (near) { requestAnimationFrame(() => play(el)); return; }
      if (target !== el) (target._rvKids = target._rvKids || []).push(el);
      io.observe(target);
    });

    // cursor
    let cur: HTMLDivElement | null = null;
    let onOver: ((e: PointerEvent) => void) | null = null;
    if (site.cursorPersonalizado && matchMedia("(hover: hover) and (pointer: fine)").matches) {
      document.documentElement.classList.add("va-nocursor");
      const c = document.createElement("div");
      c.style.cssText = "position:fixed;left:0;top:0;width:10px;height:10px;border-radius:50%;background:#F5F2EE;pointer-events:none;z-index:9999;mix-blend-mode:difference;transition:width .6s cubic-bezier(.16,1,.3,1),height .6s cubic-bezier(.16,1,.3,1),opacity .4s;display:flex;align-items:center;justify-content:center;font:500 8px/1 var(--font-jost),sans-serif;letter-spacing:.22em;text-transform:uppercase;color:#111;will-change:transform";
      document.body.appendChild(c); cur = c;
      onOver = (e) => {
        const t = e.target as Element;
        const hit = t.closest?.("a,button,[data-cursor],[data-ba-handle]");
        const lab = hit && hit.getAttribute("data-cursor");
        c.style.width = c.style.height = hit ? (lab ? "78px" : "44px") : "10px";
        c.textContent = lab || "";
      };
      document.addEventListener("pointerover", onOver);
    }

    // loop
    let raf = 0;
    const cl = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
    const eo = (t: number) => 1 - Math.pow(1 - t, 3);
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      const vh = innerHeight, sy = scrollY, R = reduce;
      S.smx += (S.mx - S.smx) * 0.05; S.smy += (S.my - S.smy) * 0.05;

      if (S.nav) {
        const s = sy > 40;
        if (s !== S.navS) {
          S.navS = s;
          Object.assign(S.nav.style, s
            ? { background: "rgba(245,242,238,.88)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", paddingTop: "14px", paddingBottom: "14px", borderBottomColor: "rgba(59,42,36,.08)" }
            : { background: "transparent", backdropFilter: "none", WebkitBackdropFilter: "none", paddingTop: "22px", paddingBottom: "22px", borderBottomColor: "transparent" });
        }
      }
      if (cur) {
        S.cx += (S.tx - S.cx) * 0.2; S.cy += (S.ty - S.cy) * 0.2;
        cur.style.transform = `translate3d(${S.cx}px,${S.cy}px,0) translate(-50%,-50%)`;
      }

      if (!R) {
        for (const o of S.speedEls) {
          const p = o.el.parentElement; if (!p) continue;
          const r = p.getBoundingClientRect(); if (r.bottom < -300 || r.top > vh + 300) continue;
          const c = r.top + r.height / 2 - vh / 2;
          const y = o.s !== 1 ? -c * (1 - o.s) : 0;
          o.el.style.transform = `translate3d(${(S.smx * o.d).toFixed(2)}px,${(y + S.smy * o.d).toFixed(2)}px,0)`;
        }
        const k = 1.045 + 0.02 * Math.sin(now / 6500);
        for (const el of S.kb) el.style.transform = `scale(${k.toFixed(4)})`;
      }

      // pilha 1 — procedimentos
      for (let i = 0; i < S.panels.length; i++) {
        const P = S.panels[i]; if (!P.inner) continue;
        const nx = S.panels[i + 1];
        const p = nx ? cl(1 - nx.el.getBoundingClientRect().top / vh) : 0;
        P.inner.style.transform = `translateY(${(-2.5 * p).toFixed(3)}vh) scale(${(1 - 0.07 * p).toFixed(4)})`;
        if (P.shade) P.shade.style.opacity = (p * 0.5).toFixed(3);
        if (R) continue;
        const e = eo(cl(1 - P.el.getBoundingClientRect().top / vh));
        if (P.clip) P.clip.style.clipPath = `inset(${((1 - e) * 16).toFixed(2)}% 0% 0% 0%)`;
        if (P.img) P.img.style.transform = `scale(${(1.16 - 0.16 * e + 0.03 * p).toFixed(4)})`;
        if (P.num) P.num.style.transform = `translateY(${((1 - e) * 80).toFixed(1)}px)`;
        if (P.title) { P.title.style.letterSpacing = `${(-0.015 + 0.05 * (1 - e)).toFixed(4)}em`; P.title.style.opacity = (0.3 + 0.7 * e).toFixed(3); }
      }

      // pilha 2 — antes/depois
      for (let i = 0; i < S.cards.length; i++) {
        const C = S.cards[i]; const box = C.box; if (!box) continue;
        const r = C.el.getBoundingClientRect();
        if (!box._drag && !R) box._t = 100 - 50 * eo(cl((vh - r.top) / (vh * 0.85)));
        box._c += (box._t - box._c) * 0.14;
        box.style.setProperty("--pos", box._c.toFixed(2) + "%");
        const nx = S.cards[i + 1];
        if (nx && C.inner) {
          const p = cl((vh - nx.el.getBoundingClientRect().top) / Math.max(1, vh - nx.st));
          C.inner.style.transform = `scale(${(1 - 0.045 * p).toFixed(4)})`;
          if (C.shade) C.shade.style.opacity = (p * 0.35).toFixed(3);
        }
      }

      // frase palavra a palavra
      if (S.wordsBox && S.words.length) {
        const r = S.wordsBox.getBoundingClientRect();
        const pr = R ? 1 : cl((vh * 0.9 - r.top) / (r.height + vh * 0.4));
        const n = S.words.length;
        S.words.forEach((w: any, i: number) => { w.style.opacity = (0.13 + 0.87 * cl(pr * n * 1.25 - i)).toFixed(3); });
      }

      // escultura 3D
      if (S.sculptSec) {
        const r = S.sculptSec.getBoundingClientRect();
        const p = cl(-r.top / Math.max(1, r.height - vh));
        if (S.sculpt) S.sculpt.progress = p;
        const idx = Math.min(3, Math.floor(p * 4));
        if (idx !== S.phase) {
          S.phase = idx;
          S.phases.forEach((ph: any, i: number) => { ph.style.opacity = i === idx ? "1" : "0"; ph.style.transform = i === idx ? "translateY(0)" : `translateY(${i < idx ? -30 : 30}px)`; });
          S.ticks.forEach((t: any, i: number) => { t.style.opacity = i === idx ? "1" : ".35"; const l = t.querySelector("[data-tick-line]"); if (l) l.style.transform = i === idx ? "scaleX(1.6)" : "scaleX(.4)"; });
        }
      }

      // linha "como funciona"
      if (S.lineTrack && S.lineFill) {
        const r = S.lineTrack.getBoundingClientRect();
        S.lineFill.style.transform = `scaleY(${cl((vh * 0.62 - r.top) / r.height).toFixed(4)})`;
        for (const s of S.steps) if (s.dot) s.dot.style.background = s.el.getBoundingClientRect().top < vh * 0.62 ? "#5C3A40" : "#F5F2EE";
      }

      // filosofia — tracking sutil
      if (S.track && !R) {
        const r = S.track.getBoundingClientRect();
        const p = cl(1 - (r.top + r.height / 2) / vh, -1, 1);
        S.track.style.letterSpacing = `${(-0.02 + 0.012 * (1 - Math.abs(p))).toFixed(4)}em`;
        S.track.style.transform = `translateX(${(p * -2).toFixed(2)}vw)`;
      }

      if (S.mbar) {
        const ft = S.final ? S.final.getBoundingClientRect().top : 1e9;
        const show = sy > vh * 0.85 && ft > vh * 0.75 && !menuRef.current;
        if (show !== S.mb) { S.mb = show; S.mbar.style.transform = show ? "translateY(0)" : "translateY(160%)"; }
      }
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("pointermove", onMove);
      document.removeEventListener("click", onClick);
      if (onOver) document.removeEventListener("pointerover", onOver);
      io.disconnect();
      cur?.remove();
      document.documentElement.classList.remove("va-nocursor");
    };
  }, []);

  const n = site.whatsapp.replace(/\D/g, "");
  const wa = n ? `https://wa.me/${n}?text=${encodeURIComponent(site.whatsappMensagem)}` : "#agendar";

  return {
    menuOpen: menu,
    openMenu: () => setMenu(true),
    closeMenu: () => setMenu(false),
    wa,
    waTarget: n ? "_blank" : "_self",
    ig: site.instagram,
    procs: site.procedimentos,
    bas: site.antesDepois,
    depos: site.depoimentos,
    show3d: site.escultura3d,
    no3d: !site.escultura3d,
    showMbar: site.ctaFixoMobile,
  };
}
