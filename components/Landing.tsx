"use client";

// Markup convertido do Claude Design (Landing Dra Vitoria.dc.html).
// Textos de listas e contatos ficam em content/site.ts; comportamento em useLanding.ts.
import { Fragment } from "react";
import ImageSlot from "./ImageSlot";
import { useLanding } from "./useLanding";

export default function Landing() {
  const { bas, closeMenu, depos, ig, menuOpen, no3d, openMenu, procs, show3d, showMbar, wa, waTarget } = useLanding();
  return (
    <>
      <div data-va-root="" style={{ fontFamily: "var(--font-jost),sans-serif", fontWeight: "300", background: "#F5F2EE", color: "#3B2A24", overflowX: "clip", position: "relative" }}>
        <header data-nav="" style={{ position: "fixed", top: "0", left: "0", right: "0", zIndex: "50", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", padding: "22px clamp(20px,4vw,56px)", borderBottom: "1px solid transparent", transition: "background .7s cubic-bezier(.16,1,.3,1),padding .7s cubic-bezier(.16,1,.3,1),border-color .7s" }}>
          <a href="#topo" aria-label="Dra. Vitória Almeida — início" style={{ display: "flex", alignItems: "center", gap: "14px", color: "#3B2A24" }}>
            <span style={{ fontFamily: "var(--font-bodoni),serif", fontSize: "30px", lineHeight: "1", letterSpacing: "-.02em", fontWeight: "400" }}>
              {"VA."}
            </span>
            <span style={{ display: "flex", flexDirection: "column", gap: "4px", whiteSpace: "nowrap", borderLeft: "1px solid rgba(59,42,36,.25)", paddingLeft: "14px" }}>
              <span style={{ fontSize: "10px", letterSpacing: ".26em", fontWeight: "500" }}>
                {"DRA. VITÓRIA ALMEIDA"}
              </span>
              <span style={{ fontSize: "9px", letterSpacing: ".26em", color: "#6E5A52", fontWeight: "400" }}>
                {"HARMONIZAÇÃO OROFACIAL"}
              </span>
            </span>
          </a>
          <nav className="only-desk" style={{ display: "flex", whiteSpace: "nowrap", gap: "clamp(20px,2.6vw,40px)", fontSize: "11px", letterSpacing: ".24em", textTransform: "uppercase", fontWeight: "400" }}>
            <a className="hv1" href="#sobre" style={{ paddingBottom: "4px", backgroundImage: "linear-gradient(#3B2A24,#3B2A24)", backgroundRepeat: "no-repeat", backgroundPosition: "0 100%", backgroundSize: "0% 1px", transition: "background-size .6s cubic-bezier(.16,1,.3,1)" }}>
              {"A Dra."}
            </a>
            <a className="hv2" href="#procedimentos" style={{ paddingBottom: "4px", backgroundImage: "linear-gradient(#3B2A24,#3B2A24)", backgroundRepeat: "no-repeat", backgroundPosition: "0 100%", backgroundSize: "0% 1px", transition: "background-size .6s cubic-bezier(.16,1,.3,1)" }}>
              {"Procedimentos"}
            </a>
            <a className="hv3" href="#resultados" style={{ paddingBottom: "4px", backgroundImage: "linear-gradient(#3B2A24,#3B2A24)", backgroundRepeat: "no-repeat", backgroundPosition: "0 100%", backgroundSize: "0% 1px", transition: "background-size .6s cubic-bezier(.16,1,.3,1)" }}>
              {"Resultados"}
            </a>
            <a className="hv4" href="#jornada" style={{ paddingBottom: "4px", backgroundImage: "linear-gradient(#3B2A24,#3B2A24)", backgroundRepeat: "no-repeat", backgroundPosition: "0 100%", backgroundSize: "0% 1px", transition: "background-size .6s cubic-bezier(.16,1,.3,1)" }}>
              {"Jornada"}
            </a>
          </nav>
          <a className="only-desk hv5" href={wa} target={waTarget} rel="noopener" data-cursor="WhatsApp" style={{ display: "inline-flex", whiteSpace: "nowrap", alignItems: "center", gap: "14px", padding: "14px 20px", border: "1px solid #3B2A24", color: "#3B2A24", fontSize: "10px", letterSpacing: ".26em", fontWeight: "500", textTransform: "uppercase", transition: "background .6s cubic-bezier(.16,1,.3,1),color .6s,letter-spacing .6s cubic-bezier(.16,1,.3,1)" }}>
            {"Agendar avaliação"}
          </a>
          <button className="only-mob" onClick={openMenu} aria-label="Abrir menu" style={{ appearance: "none", background: "none", border: "0", padding: "0", width: "48px", height: "48px", display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", gap: "7px", cursor: "pointer" }}>
            <span style={{ display: "block", width: "28px", height: "1px", background: "#3B2A24" }} />
            <span style={{ display: "block", width: "18px", height: "1px", background: "#3B2A24" }} />
          </button>
        </header>
        {(menuOpen) && (<>
          <div style={{ position: "fixed", inset: "0", zIndex: "60", background: "#F5F2EE", display: "flex", flexDirection: "column", padding: "24px 20px 32px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "var(--font-bodoni),serif", fontSize: "30px", lineHeight: "1" }}>
                {"VA."}
              </span>
              <button onClick={closeMenu} aria-label="Fechar menu" style={{ appearance: "none", background: "none", border: "0", width: "48px", height: "48px", fontFamily: "var(--font-jost),sans-serif", fontSize: "10px", letterSpacing: ".26em", color: "#3B2A24", cursor: "pointer" }}>
                {"FECHAR"}
              </button>
            </div>
            <nav style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "6px", fontFamily: "var(--font-cormorant),serif", fontWeight: "300", fontSize: "46px", lineHeight: "1.15" }}>
              <a href="#sobre" onClick={closeMenu} style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
                <span style={{ fontFamily: "var(--font-jost),sans-serif", fontSize: "10px", letterSpacing: ".2em", color: "#6E5A52" }}>
                  {"01"}
                </span>
                {"A Dra. Vitória"}
              </a>
              <a href="#procedimentos" onClick={closeMenu} style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
                <span style={{ fontFamily: "var(--font-jost),sans-serif", fontSize: "10px", letterSpacing: ".2em", color: "#6E5A52" }}>
                  {"02"}
                </span>
                {"Procedimentos"}
              </a>
              <a href="#resultados" onClick={closeMenu} style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
                <span style={{ fontFamily: "var(--font-jost),sans-serif", fontSize: "10px", letterSpacing: ".2em", color: "#6E5A52" }}>
                  {"03"}
                </span>
                {"Resultados"}
              </a>
              <a href="#jornada" onClick={closeMenu} style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
                <span style={{ fontFamily: "var(--font-jost),sans-serif", fontSize: "10px", letterSpacing: ".2em", color: "#6E5A52" }}>
                  {"04"}
                </span>
                <em>
                  {"Jornada"}
                </em>
              </a>
            </nav>
            <a href={wa} target={waTarget} rel="noopener" onClick={closeMenu} style={{ marginTop: "48px", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 24px", background: "#3B2A24", color: "#F5F2EE", fontSize: "11px", letterSpacing: ".28em", fontWeight: "500", textTransform: "uppercase" }}>
              {"Agendar avaliação "}
              <span style={{ display: "block", width: "28px", height: "1px", background: "#F5F2EE" }} />
            </a>
            <div style={{ marginTop: "20px", fontSize: "10px", letterSpacing: ".24em", color: "#6E5A52" }}>
              {"CRO 65679 · BELO HORIZONTE · BARBACENA"}
            </div>
          </div>
        </>)}
        <section className="only-desk" id="topo" data-screen-label="01 Hero" style={{ position: "relative", height: "100vh", minHeight: "720px", overflow: "hidden", background: "#F5F2EE" }}>
          <div style={{ position: "absolute", inset: "0", pointerEvents: "none" }}>
            <div data-speed="0.3" data-depth="-10" style={{ position: "absolute", right: "-6vw", top: "4vh", fontFamily: "var(--font-bodoni),serif", fontSize: "50vw", lineHeight: ".8", letterSpacing: "-.05em", color: "#EDE5DE", whiteSpace: "nowrap" }}>
              {"VA."}
            </div>
          </div>
          <div style={{ position: "absolute", right: "9vw", top: "13vh", bottom: "0", width: "min(36vw,600px)" }}>
            <div style={{ position: "absolute", inset: "0", pointerEvents: "none" }}>
              <div data-speed="0.55" data-depth="-16" style={{ position: "absolute", left: "-8vw", top: "16%", width: "46%", height: "60%", background: "#D9C3B5" }} />
            </div>
            <div style={{ position: "absolute", inset: "0" }}>
              <div data-speed="0.85" data-depth="8" style={{ position: "absolute", inset: "0" }}>
                <div data-reveal="clip" data-dur="2000" data-delay="150" style={{ position: "absolute", inset: "0", overflow: "hidden", background: "#E6D8CE" }}>
                  <div data-kenburns="" style={{ position: "absolute", inset: "-3%" }}>
                    <ImageSlot id="hero-retrato" shape="rect" placeholder="Retrato vertical da Dra. Vitória — luz suave, fundo neutro" />
                  </div>
                </div>
              </div>
            </div>
            <span style={{ position: "absolute", left: "-22px", top: "-22px", width: "13px", height: "13px", pointerEvents: "none" }}>
              <span style={{ position: "absolute", left: "6px", top: "0", width: "1px", height: "13px", background: "#3B2A24" }} />
              <span style={{ position: "absolute", top: "6px", left: "0", height: "1px", width: "13px", background: "#3B2A24" }} />
            </span>
            <span style={{ position: "absolute", right: "-22px", top: "-22px", width: "13px", height: "13px", pointerEvents: "none" }}>
              <span style={{ position: "absolute", left: "6px", top: "0", width: "1px", height: "13px", background: "#3B2A24" }} />
              <span style={{ position: "absolute", top: "6px", left: "0", height: "1px", width: "13px", background: "#3B2A24" }} />
            </span>
            <div data-reveal="fade" data-delay="1500" style={{ position: "absolute", right: "calc(100% + 24px)", bottom: "11vh", display: "flex", alignItems: "center", gap: "18px", whiteSpace: "nowrap", pointerEvents: "none" }}>
              <div style={{ textAlign: "right", display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "10px", letterSpacing: ".3em", fontWeight: "500" }}>
                  {"DRA. VITÓRIA ALMEIDA"}
                </span>
                <span style={{ fontFamily: "var(--font-cormorant),serif", fontStyle: "italic", fontSize: "17px", color: "#6E5A52", fontWeight: "400" }}>
                  {"Cirurgiã-Dentista · Harmonização Orofacial"}
                </span>
              </div>
              <span style={{ display: "block", width: "56px", height: "1px", background: "#3B2A24" }} />
            </div>
          </div>
          <div style={{ position: "absolute", left: "clamp(20px,4.4vw,80px)", top: "20vh", zIndex: "3", pointerEvents: "none" }}>
            <div data-reveal="fade" data-delay="300" style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "10px", letterSpacing: ".32em", fontWeight: "500", marginBottom: "3.4vh" }}>
              <span style={{ display: "block", width: "32px", height: "1px", background: "#3B2A24" }} />
              {"HARMONIZAÇÃO OROFACIAL · ODONTOLOGIA ESTÉTICA"}
            </div>
            <h1 data-depth="4" style={{ margin: "0", fontFamily: "var(--font-cormorant),serif", fontWeight: "300", fontSize: "clamp(64px,7.6vw,146px)", lineHeight: ".9", letterSpacing: "-.018em", color: "#3B2A24" }}>
              <span style={{ display: "block", overflow: "hidden", padding: "0 .1em .06em 0" }}>
                <span data-reveal="line" data-delay="350" data-dur="1600" style={{ display: "block" }}>
                  {"Harmonização"}
                </span>
              </span>
              <span style={{ display: "block", overflow: "hidden", padding: "0 .1em .06em 0" }}>
                <span data-reveal="line" data-delay="480" data-dur="1600" style={{ display: "block" }}>
                  {"que valoriza"}
                </span>
              </span>
              <span style={{ display: "block", overflow: "hidden", padding: "0 .12em .1em 0", marginLeft: "11vw" }}>
                <span data-reveal="line" data-delay="610" data-dur="1600" style={{ display: "block", fontStyle: "italic", color: "#5C3A40" }}>
                  {"a sua essência."}
                </span>
              </span>
            </h1>
          </div>
          <div style={{ position: "absolute", left: "clamp(20px,4.4vw,80px)", bottom: "8vh", zIndex: "3", display: "flex", flexDirection: "column", gap: "30px", maxWidth: "360px" }}>
            <p data-reveal="up" data-delay="1000" style={{ margin: "0", fontSize: "17px", lineHeight: "1.65", color: "#3B2A24", textWrap: "pretty" }}>
              {"Resultados naturais, planejamento individual e técnica para realçar o que já existe em você."}
            </p>
            <div data-reveal="up" data-delay="1150" style={{ display: "flex", alignItems: "center", gap: "28px", flexWrap: "wrap" }}>
              <a className="hv6" href={wa} target={waTarget} rel="noopener" data-cursor="Agendar" style={{ display: "inline-flex", alignItems: "center", gap: "18px", padding: "21px 30px 21px 34px", background: "#3B2A24", color: "#F5F2EE", fontSize: "11px", letterSpacing: ".28em", fontWeight: "500", textTransform: "uppercase", transition: "background .7s cubic-bezier(.16,1,.3,1),letter-spacing .7s cubic-bezier(.16,1,.3,1),gap .7s cubic-bezier(.16,1,.3,1)" }}>
                {"Agendar avaliação "}
                <span style={{ display: "block", width: "28px", height: "1px", background: "currentColor" }} />
              </a>
              <a className="hv7" href="#sobre" style={{ fontSize: "11px", letterSpacing: ".24em", textTransform: "uppercase", fontWeight: "400", paddingBottom: "5px", backgroundImage: "linear-gradient(#3B2A24,#3B2A24)", backgroundRepeat: "no-repeat", backgroundPosition: "100% 100%", backgroundSize: "100% 1px", transition: "background-size .6s cubic-bezier(.16,1,.3,1)" }}>
                {"Conheça a Dra."}
              </a>
            </div>
          </div>
          <div data-reveal="fade" data-delay="1600" style={{ position: "absolute", right: "clamp(16px,3vw,48px)", top: "50%", transform: "translateY(-50%)", writingMode: "vertical-rl", fontSize: "10px", letterSpacing: ".42em", fontWeight: "500", color: "#3B2A24" }}>
            {"BELEZA · PRECISÃO · NATURALIDADE"}
          </div>
          <div data-reveal="fade" data-delay="1800" style={{ position: "absolute", right: "clamp(16px,3vw,48px)", bottom: "4vh", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", fontSize: "9px", letterSpacing: ".3em" }}>
            <span style={{ writingMode: "vertical-rl" }}>
              {"ROLE"}
            </span>
            <span style={{ position: "relative", display: "block", width: "1px", height: "56px", background: "rgba(59,42,36,.2)", overflow: "hidden" }}>
              <span data-scrollcue="" style={{ position: "absolute", left: "0", top: "0", width: "1px", height: "100%", background: "#3B2A24" }} />
            </span>
          </div>
        </section>
        <section className="only-mob" id="topo" data-screen-label="01 Hero" style={{ position: "relative", minHeight: "100svh", padding: "96px 0 44px", overflow: "hidden", background: "#F5F2EE" }}>
          <div style={{ position: "absolute", inset: "0", pointerEvents: "none" }}>
            <div data-speed="0.3" style={{ position: "absolute", left: "-8vw", top: "64px", fontFamily: "var(--font-bodoni),serif", fontSize: "82vw", lineHeight: ".8", letterSpacing: "-.05em", color: "#EDE5DE", whiteSpace: "nowrap" }}>
              {"VA."}
            </div>
          </div>
          <div style={{ position: "relative", marginLeft: "16vw", height: "60svh" }}>
            <div style={{ position: "absolute", inset: "0", pointerEvents: "none" }}>
              <div data-speed="0.55" style={{ position: "absolute", left: "-10vw", top: "10%", width: "42%", height: "74%", background: "#D9C3B5" }} />
            </div>
            <div style={{ position: "absolute", inset: "0" }}>
              <div data-speed="0.85" style={{ position: "absolute", inset: "0" }}>
                <div data-reveal="clip" data-dur="1800" style={{ position: "absolute", inset: "0", overflow: "hidden", background: "#E6D8CE" }}>
                  <div data-kenburns="" style={{ position: "absolute", inset: "-3%" }}>
                    <ImageSlot id="hero-retrato" shape="rect" placeholder="Retrato vertical da Dra. Vitória" />
                  </div>
                </div>
              </div>
            </div>
            <div data-reveal="fade" data-delay="1200" style={{ position: "absolute", left: "-12vw", bottom: "14%", writingMode: "vertical-rl", transform: "rotate(180deg)", fontSize: "9px", letterSpacing: ".36em", fontWeight: "500" }}>
              {"CRO 65679"}
            </div>
          </div>
          <div style={{ position: "relative", zIndex: "2", padding: "0 20px", marginTop: "-58px", display: "flex", flexDirection: "column", gap: "22px" }}>
            <h1 style={{ margin: "0", fontFamily: "var(--font-cormorant),serif", fontWeight: "300", fontSize: "13.4vw", lineHeight: ".92", letterSpacing: "-.015em" }}>
              <span style={{ display: "block", overflow: "hidden", padding: "0 .1em .06em 0" }}>
                <span data-reveal="line" data-delay="300" style={{ display: "block" }}>
                  {"Harmonização"}
                </span>
              </span>
              <span style={{ display: "block", overflow: "hidden", padding: "0 .1em .06em 0" }}>
                <span data-reveal="line" data-delay="420" style={{ display: "block" }}>
                  {"que valoriza"}
                </span>
              </span>
              <span style={{ display: "block", overflow: "hidden", padding: "0 .12em .1em 0" }}>
                <span data-reveal="line" data-delay="540" style={{ display: "block", fontStyle: "italic", color: "#5C3A40" }}>
                  {"a sua essência."}
                </span>
              </span>
            </h1>
            <p data-reveal="up" data-delay="800" style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", maxWidth: "340px" }}>
              {"Resultados naturais, planejamento individual e técnica para realçar o que já existe em você."}
            </p>
            <a data-reveal="up" data-delay="950" href={wa} target={waTarget} rel="noopener" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 24px", background: "#3B2A24", color: "#F5F2EE", fontSize: "11px", letterSpacing: ".28em", fontWeight: "500", textTransform: "uppercase" }}>
              {"Agendar avaliação "}
              <span style={{ display: "block", width: "28px", height: "1px", background: "#F5F2EE" }} />
            </a>
            <div data-reveal="fade" data-delay="1100" style={{ display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "9px", letterSpacing: ".28em", fontWeight: "500", color: "#6E5A52" }}>
              <span>
                {"DRA. VITÓRIA ALMEIDA"}
              </span>
              <span>
                {"BELEZA · PRECISÃO"}
              </span>
            </div>
          </div>
        </section>
        <section id="essencia" data-screen-label="02 Posicionamento" style={{ position: "relative", padding: "clamp(120px,20vh,240px) clamp(20px,6vw,96px) clamp(100px,16vh,200px)", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: "0", pointerEvents: "none" }}>
            <div data-speed="0.45" style={{ position: "absolute", right: "8vw", top: "12vh", width: "clamp(180px,24vw,380px)", aspectRatio: "1", border: "1px solid rgba(59,42,36,.14)", borderRadius: "50%" }} />
            <div data-speed="0.6" style={{ position: "absolute", right: "calc(8vw + clamp(90px,12vw,190px))", top: "6vh", width: "1px", height: "clamp(240px,40vh,420px)", background: "rgba(59,42,36,.14)" }} />
          </div>
          <div data-reveal="fade" style={{ position: "relative", display: "flex", alignItems: "center", gap: "18px", fontSize: "10px", letterSpacing: ".32em", fontWeight: "500", marginBottom: "clamp(40px,7vh,80px)" }}>
            <span>
              {"01"}
            </span>
            <span style={{ display: "block", width: "48px", height: "1px", background: "#3B2A24" }} />
            <span>
              {"POSICIONAMENTO"}
            </span>
          </div>
          <h2 style={{ position: "relative", margin: "0", fontFamily: "var(--font-cormorant),serif", fontWeight: "300", fontSize: "clamp(54px,9vw,176px)", lineHeight: ".9", letterSpacing: "-.02em" }}>
            <span style={{ display: "block", overflow: "hidden", paddingBottom: ".06em" }}>
              <span data-reveal="line" style={{ display: "block" }}>
                {"Menos exageros."}
              </span>
            </span>
            <span style={{ display: "block", overflow: "hidden", padding: "0 .12em .1em 0", marginLeft: "clamp(0px,14vw,280px)" }}>
              <span data-reveal="line" data-delay="140" style={{ display: "block", fontStyle: "italic", color: "#5C3A40" }}>
                {"Mais naturalidade."}
              </span>
            </span>
          </h2>
          <div style={{ position: "relative", display: "flex", flexWrap: "wrap", justifyContent: "flex-end", marginTop: "clamp(48px,9vh,110px)" }}>
            <div data-reveal="up" style={{ maxWidth: "440px", display: "flex", flexDirection: "column", gap: "22px" }}>
              <p style={{ margin: "0", fontSize: "clamp(17px,1.3vw,20px)", lineHeight: "1.7", textWrap: "pretty" }}>
                {"A harmonização não precisa transformar quem você é. Ela deve respeitar sua anatomia, suas proporções e sua essência."}
              </p>
              <span style={{ fontSize: "10px", letterSpacing: ".3em", fontWeight: "500", color: "#6E5A52" }}>
                {"— DRA. VITÓRIA ALMEIDA"}
              </span>
            </div>
          </div>
          <p data-words="" style={{ position: "relative", margin: "clamp(90px,18vh,220px) 0 0", maxWidth: "1100px", display: "flex", flexWrap: "wrap", columnGap: ".26em", fontFamily: "var(--font-cormorant),serif", fontWeight: "300", fontSize: "clamp(30px,3.8vw,64px)", lineHeight: "1.15", letterSpacing: "-.01em" }}>
            <span data-word="">
              {"Cada"}
            </span>
            <span data-word="">
              {"rosto"}
            </span>
            <span data-word="">
              {"possui"}
            </span>
            <span data-word="">
              {"uma"}
            </span>
            <span data-word="">
              {"anatomia"}
            </span>
            <span data-word="">
              {"única."}
            </span>
            <span style={{ flexBasis: "100%", height: "0" }} />
            <span data-word="" style={{ fontStyle: "italic", color: "#5C3A40" }}>
              {"Cada"}
            </span>
            <span data-word="" style={{ fontStyle: "italic", color: "#5C3A40" }}>
              {"plano"}
            </span>
            <span data-word="" style={{ fontStyle: "italic", color: "#5C3A40" }}>
              {"de"}
            </span>
            <span data-word="" style={{ fontStyle: "italic", color: "#5C3A40" }}>
              {"tratamento"}
            </span>
            <span data-word="" style={{ fontStyle: "italic", color: "#5C3A40" }}>
              {"também"}
            </span>
            <span data-word="" style={{ fontStyle: "italic", color: "#5C3A40" }}>
              {"deve"}
            </span>
            <span data-word="" style={{ fontStyle: "italic", color: "#5C3A40" }}>
              {"ser."}
            </span>
          </p>
        </section>
        <section id="sobre" data-screen-label="03 Autoridade" style={{ position: "relative", padding: "clamp(90px,14vh,180px) clamp(20px,6vw,96px) clamp(120px,18vh,220px)", background: "#EDE5DE", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: "0", pointerEvents: "none" }}>
            <div data-speed="0.25" style={{ position: "absolute", left: "-2vw", top: "2vh", fontFamily: "var(--font-cormorant),serif", fontStyle: "italic", fontWeight: "300", fontSize: "26vw", lineHeight: ".8", color: "#E6D8CE", whiteSpace: "nowrap", letterSpacing: "-.03em" }}>
              {"Vitória"}
            </div>
          </div>
          <div style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: "clamp(56px,7vw,120px)", alignItems: "flex-start" }}>
            <div style={{ position: "relative", flex: "1 1 420px", minWidth: "0", height: "clamp(520px,86vh,960px)" }}>
              <div data-speed="0.85" style={{ position: "absolute", inset: "0" }}>
                <div data-reveal="clip" data-dur="1800" style={{ position: "absolute", inset: "0", overflow: "hidden", background: "#E6D8CE", transition: "transform 1.2s cubic-bezier(.16,1,.3,1)" }}>
                  <ImageSlot id="sobre-retrato" shape="rect" placeholder="Retrato editorial — meio corpo, olhar para a câmera" />
                </div>
              </div>
              <div style={{ position: "absolute", right: "-3vw", bottom: "-7vh", width: "40%", aspectRatio: "4/5" }}>
                <div data-speed="0.6" style={{ position: "absolute", inset: "0" }}>
                  <div data-reveal="clip" data-delay="300" style={{ position: "absolute", inset: "0", border: "10px solid #EDE5DE", background: "#D9C3B5", overflow: "hidden" }}>
                    <ImageSlot id="sobre-detalhe" shape="rect" placeholder="Detalhe — mãos, atendimento" />
                  </div>
                </div>
              </div>
              <div style={{ position: "absolute", left: "0", top: "calc(100% + 20px)", fontSize: "9px", letterSpacing: ".3em", fontWeight: "500", color: "#6E5A52" }}>
                {"FIG. 01 — DRA. VITÓRIA ALMEIDA"}
              </div>
            </div>
            <div style={{ flex: "1 1 420px", minWidth: "0", paddingTop: "clamp(0px,8vh,120px)", display: "flex", flexDirection: "column", gap: "clamp(36px,5vh,56px)" }}>
              <div data-reveal="fade" style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: "10px", letterSpacing: ".32em", fontWeight: "500" }}>
                <span>
                  {"02"}
                </span>
                <span style={{ display: "block", width: "48px", height: "1px", background: "#3B2A24" }} />
                <span>
                  {"A ESPECIALISTA"}
                </span>
              </div>
              <h2 style={{ margin: "0", fontFamily: "var(--font-cormorant),serif", fontWeight: "300", fontSize: "clamp(46px,6vw,108px)", lineHeight: ".92", letterSpacing: "-.018em" }}>
                <span style={{ display: "block", overflow: "hidden", paddingBottom: ".06em" }}>
                  <span data-reveal="line" style={{ display: "block" }}>
                    {"Precisão técnica."}
                  </span>
                </span>
                <span style={{ display: "block", overflow: "hidden", padding: "0 .12em .1em 0" }}>
                  <span data-reveal="line" data-delay="140" style={{ display: "block", fontStyle: "italic", color: "#5C3A40" }}>
                    {"Olhar estético."}
                  </span>
                </span>
              </h2>
              <div data-reveal="up" style={{ display: "flex", flexWrap: "wrap", gap: "28px", alignItems: "flex-end", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ fontFamily: "var(--font-cormorant),serif", fontSize: "clamp(28px,2.4vw,38px)", fontWeight: "400", lineHeight: "1" }}>
                    {"Dra. Vitória Almeida"}
                  </span>
                  <span style={{ fontSize: "10px", letterSpacing: ".3em", fontWeight: "500", color: "#6E5A52" }}>
                    {"CIRURGIÃ-DENTISTA · CRO 65679"}
                  </span>
                </div>
                <span style={{ fontFamily: "var(--font-bodoni),serif", fontSize: "44px", lineHeight: "1", color: "#5C3A40" }}>
                  {"VA."}
                </span>
              </div>
              <p data-reveal="up" style={{ margin: "0", maxWidth: "480px", fontSize: "17px", lineHeight: "1.7", textWrap: "pretty" }}>
                {"Conhecimento técnico, análise facial criteriosa e sensibilidade estética — reunidos em planos que respeitam a individualidade de cada rosto."}
              </p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div data-reveal="up" style={{ display: "grid", gridTemplateColumns: "minmax(110px,150px) 1fr", gap: "20px", alignItems: "baseline", padding: "18px 0", borderTop: "1px solid rgba(59,42,36,.2)" }}>
                  <span style={{ fontSize: "10px", letterSpacing: ".28em", fontWeight: "500", color: "#6E5A52" }}>
                    {"FORMAÇÃO"}
                  </span>
                  <span style={{ fontFamily: "var(--font-cormorant),serif", fontSize: "22px", fontWeight: "400" }}>
                    {"Cirurgiã-Dentista"}
                  </span>
                </div>
                <div data-reveal="up" data-delay="80" style={{ display: "grid", gridTemplateColumns: "minmax(110px,150px) 1fr", gap: "20px", alignItems: "baseline", padding: "18px 0", borderTop: "1px solid rgba(59,42,36,.2)" }}>
                  <span style={{ fontSize: "10px", letterSpacing: ".28em", fontWeight: "500", color: "#6E5A52" }}>
                    {"PÓS-GRADUAÇÃO"}
                  </span>
                  <span style={{ fontFamily: "var(--font-cormorant),serif", fontSize: "22px", fontWeight: "400" }}>
                    {"Harmonização Orofacial"}
                  </span>
                </div>
                <div data-reveal="up" data-delay="160" style={{ display: "grid", gridTemplateColumns: "minmax(110px,150px) 1fr", gap: "20px", alignItems: "baseline", padding: "18px 0", borderTop: "1px solid rgba(59,42,36,.2)" }}>
                  <span style={{ fontSize: "10px", letterSpacing: ".28em", fontWeight: "500", color: "#6E5A52" }}>
                    {"PÓS-GRADUAÇÃO"}
                  </span>
                  <span style={{ fontFamily: "var(--font-cormorant),serif", fontSize: "22px", fontWeight: "400" }}>
                    {"Odontologia Estética"}
                  </span>
                </div>
                <div data-reveal="up" data-delay="240" style={{ display: "grid", gridTemplateColumns: "minmax(110px,150px) 1fr", gap: "20px", alignItems: "baseline", padding: "18px 0", borderTop: "1px solid rgba(59,42,36,.2)" }}>
                  <span style={{ fontSize: "10px", letterSpacing: ".28em", fontWeight: "500", color: "#6E5A52" }}>
                    {"ATUALIZAÇÃO"}
                  </span>
                  <span style={{ display: "flex", flexWrap: "wrap", gap: "4px 12px", alignItems: "baseline" }}>
                    <span style={{ fontFamily: "var(--font-cormorant),serif", fontSize: "22px", fontWeight: "400" }}>
                      {"Cursos e atualização contínua"}
                    </span>
                    <span style={{ fontSize: "11px", color: "#6E5A52", letterSpacing: ".04em" }}>
                      {"[ lista a inserir ]"}
                    </span>
                  </span>
                </div>
                <div data-reveal="up" data-delay="320" style={{ display: "grid", gridTemplateColumns: "minmax(110px,150px) 1fr", gap: "20px", alignItems: "baseline", padding: "18px 0", borderTop: "1px solid rgba(59,42,36,.2)", borderBottom: "1px solid rgba(59,42,36,.2)" }}>
                  <span style={{ fontSize: "10px", letterSpacing: ".28em", fontWeight: "500", color: "#6E5A52" }}>
                    {"ATUAÇÃO"}
                  </span>
                  <span style={{ fontFamily: "var(--font-cormorant),serif", fontSize: "22px", fontWeight: "400" }}>
                    {"Belo Horizonte · Barbacena"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="forma" data-sculpt="" data-screen-label="04 Estudo de forma 3D" style={{ position: "relative", height: "380vh", background: "#F5F2EE" }}>
          <div style={{ position: "sticky", top: "0", height: "100vh", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: "0", pointerEvents: "none" }}>
              <div data-depth="-12" style={{ position: "absolute", left: "50%", top: "50%", width: "78vmin", height: "78vmin", margin: "-39vmin 0 0 -39vmin", border: "1px solid rgba(59,42,36,.08)", borderRadius: "50%" }} />
              <div data-depth="-6" style={{ position: "absolute", left: "50%", top: "50%", width: "112vmin", height: "112vmin", margin: "-56vmin 0 0 -56vmin", border: "1px solid rgba(59,42,36,.06)", borderRadius: "50%" }} />
              <div style={{ position: "absolute", left: "50%", top: "0", bottom: "0", width: "1px", background: "rgba(59,42,36,.06)" }} />
            </div>
            <div style={{ position: "absolute", inset: "0" }}>
              {(show3d) && (<>
                <va-sculpture data-sculpture="" style={{ display: "block", position: "absolute", inset: "0", width: "100%", height: "100%" }} />
              </>)}
              {(no3d) && (<>
                <div style={{ position: "absolute", left: "50%", top: "50%", width: "min(52vmin,520px)", aspectRatio: "1", transform: "translate(-50%,-50%)", borderRadius: "50%", background: "radial-gradient(circle at 34% 30%,#F5F2EE 0%,#E6D6CB 38%,#D9C3B5 64%,#B79C8C 100%)" }} />
              </>)}
            </div>
            <div style={{ position: "absolute", left: "clamp(20px,6vw,96px)", top: "clamp(96px,15vh,150px)", display: "flex", flexDirection: "column", gap: "14px", maxWidth: "300px", pointerEvents: "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: "10px", letterSpacing: ".32em", fontWeight: "500" }}>
                <span>
                  {"03"}
                </span>
                <span style={{ display: "block", width: "48px", height: "1px", background: "#3B2A24" }} />
                <span>
                  {"ESTUDO DE FORMA"}
                </span>
              </div>
              <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.6", color: "#6E5A52" }}>
                {"Os quatro princípios por trás de cada plano de tratamento."}
              </p>
            </div>
            <div style={{ position: "absolute", left: "clamp(20px,6vw,96px)", bottom: "clamp(48px,11vh,120px)", width: "min(560px,calc(100% - 40px))", height: "clamp(170px,24vh,240px)", pointerEvents: "none" }}>
              <div data-phase="0" style={{ position: "absolute", left: "0", bottom: "0", display: "flex", flexDirection: "column", gap: "12px", opacity: "1", transition: "opacity 1s cubic-bezier(.16,1,.3,1),transform 1.2s cubic-bezier(.16,1,.3,1)" }}>
                <span style={{ fontSize: "10px", letterSpacing: ".3em", fontWeight: "500", color: "#5C3A40" }}>
                  {"01 / 04"}
                </span>
                <span style={{ fontFamily: "var(--font-cormorant),serif", fontWeight: "300", fontSize: "clamp(64px,9vw,160px)", lineHeight: ".85", letterSpacing: "-.02em" }}>
                  {"Forma"}
                </span>
                <span style={{ fontFamily: "var(--font-cormorant),serif", fontStyle: "italic", fontSize: "clamp(19px,1.5vw,24px)", color: "#6E5A52" }}>
                  {"Tudo começa pela estrutura de cada rosto."}
                </span>
              </div>
              <div data-phase="1" style={{ position: "absolute", left: "0", bottom: "0", display: "flex", flexDirection: "column", gap: "12px", opacity: "0", transform: "translateY(30px)", transition: "opacity 1s cubic-bezier(.16,1,.3,1),transform 1.2s cubic-bezier(.16,1,.3,1)" }}>
                <span style={{ fontSize: "10px", letterSpacing: ".3em", fontWeight: "500", color: "#5C3A40" }}>
                  {"02 / 04"}
                </span>
                <span style={{ fontFamily: "var(--font-cormorant),serif", fontWeight: "300", fontSize: "clamp(64px,9vw,160px)", lineHeight: ".85", letterSpacing: "-.02em" }}>
                  {"Proporção"}
                </span>
                <span style={{ fontFamily: "var(--font-cormorant),serif", fontStyle: "italic", fontSize: "clamp(19px,1.5vw,24px)", color: "#6E5A52" }}>
                  {"Medidas que conversam entre si."}
                </span>
              </div>
              <div data-phase="2" style={{ position: "absolute", left: "0", bottom: "0", display: "flex", flexDirection: "column", gap: "12px", opacity: "0", transform: "translateY(30px)", transition: "opacity 1s cubic-bezier(.16,1,.3,1),transform 1.2s cubic-bezier(.16,1,.3,1)" }}>
                <span style={{ fontSize: "10px", letterSpacing: ".3em", fontWeight: "500", color: "#5C3A40" }}>
                  {"03 / 04"}
                </span>
                <span style={{ fontFamily: "var(--font-cormorant),serif", fontWeight: "300", fontSize: "clamp(64px,9vw,160px)", lineHeight: ".85", letterSpacing: "-.02em" }}>
                  {"Equilíbrio"}
                </span>
                <span style={{ fontFamily: "var(--font-cormorant),serif", fontStyle: "italic", fontSize: "clamp(19px,1.5vw,24px)", color: "#6E5A52" }}>
                  {"Nenhum ponto se sobrepõe ao todo."}
                </span>
              </div>
              <div data-phase="3" style={{ position: "absolute", left: "0", bottom: "0", display: "flex", flexDirection: "column", gap: "12px", opacity: "0", transform: "translateY(30px)", transition: "opacity 1s cubic-bezier(.16,1,.3,1),transform 1.2s cubic-bezier(.16,1,.3,1)" }}>
                <span style={{ fontSize: "10px", letterSpacing: ".3em", fontWeight: "500", color: "#5C3A40" }}>
                  {"04 / 04"}
                </span>
                <span style={{ fontFamily: "var(--font-cormorant),serif", fontWeight: "300", fontStyle: "italic", fontSize: "clamp(64px,9vw,160px)", lineHeight: ".85", letterSpacing: "-.02em", color: "#5C3A40" }}>
                  {"Precisão"}
                </span>
                <span style={{ fontFamily: "var(--font-cormorant),serif", fontStyle: "italic", fontSize: "clamp(19px,1.5vw,24px)", color: "#6E5A52" }}>
                  {"Técnica a serviço da naturalidade."}
                </span>
              </div>
            </div>
            <div style={{ position: "absolute", right: "clamp(20px,4vw,64px)", top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: "18px", fontSize: "9px", letterSpacing: ".3em", fontWeight: "500" }}>
              <div data-tick="0" style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "flex-end", transition: "opacity .8s" }}>
                <span>
                  {"FORMA"}
                </span>
                <span data-tick-line="" style={{ display: "block", width: "28px", height: "1px", background: "#3B2A24", transformOrigin: "right", transition: "transform .8s cubic-bezier(.16,1,.3,1)" }} />
              </div>
              <div data-tick="1" style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "flex-end", opacity: ".35", transition: "opacity .8s" }}>
                <span>
                  {"PROPORÇÃO"}
                </span>
                <span data-tick-line="" style={{ display: "block", width: "28px", height: "1px", background: "#3B2A24", transformOrigin: "right", transform: "scaleX(.4)", transition: "transform .8s cubic-bezier(.16,1,.3,1)" }} />
              </div>
              <div data-tick="2" style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "flex-end", opacity: ".35", transition: "opacity .8s" }}>
                <span>
                  {"EQUILÍBRIO"}
                </span>
                <span data-tick-line="" style={{ display: "block", width: "28px", height: "1px", background: "#3B2A24", transformOrigin: "right", transform: "scaleX(.4)", transition: "transform .8s cubic-bezier(.16,1,.3,1)" }} />
              </div>
              <div data-tick="3" style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "flex-end", opacity: ".35", transition: "opacity .8s" }}>
                <span>
                  {"PRECISÃO"}
                </span>
                <span data-tick-line="" style={{ display: "block", width: "28px", height: "1px", background: "#3B2A24", transformOrigin: "right", transform: "scaleX(.4)", transition: "transform .8s cubic-bezier(.16,1,.3,1)" }} />
              </div>
            </div>
          </div>
        </section>
        <section id="procedimentos" data-screen-label="05 Procedimentos" style={{ position: "relative", background: "#F5F2EE" }}>
          <div style={{ padding: "clamp(100px,16vh,180px) clamp(20px,6vw,96px) clamp(60px,10vh,120px)", display: "flex", flexWrap: "wrap", gap: "48px", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(32px,5vh,56px)", flex: "1 1 520px" }}>
              <div data-reveal="fade" style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: "10px", letterSpacing: ".32em", fontWeight: "500" }}>
                <span>
                  {"04"}
                </span>
                <span style={{ display: "block", width: "48px", height: "1px", background: "#3B2A24" }} />
                <span>
                  {"PROCEDIMENTOS"}
                </span>
              </div>
              <h2 style={{ margin: "0", fontFamily: "var(--font-cormorant),serif", fontWeight: "300", fontSize: "clamp(46px,6.4vw,118px)", lineHeight: ".92", letterSpacing: "-.018em" }}>
                <span style={{ display: "block", overflow: "hidden", paddingBottom: ".06em" }}>
                  <span data-reveal="line" style={{ display: "block" }}>
                    {"Tratamentos pensados"}
                  </span>
                </span>
                <span style={{ display: "block", overflow: "hidden", padding: "0 .12em .1em 0" }}>
                  <span data-reveal="line" data-delay="140" style={{ display: "block", fontStyle: "italic", color: "#5C3A40" }}>
                    {"para o seu rosto."}
                  </span>
                </span>
              </h2>
            </div>
            <nav data-reveal="up" style={{ flex: "0 1 340px", display: "flex", flexDirection: "column" }}>
              {(procs).map((p: any, $index: number) => (<Fragment key={$index}>
                <a className="hv8" href={`#proc-${p.n}`} style={{ display: "flex", gap: "18px", alignItems: "baseline", padding: "13px 0", borderTop: "1px solid rgba(59,42,36,.18)", transition: "padding .6s cubic-bezier(.16,1,.3,1),color .4s" }}>
                  <span style={{ fontSize: "10px", letterSpacing: ".2em", fontWeight: "500", color: "#6E5A52" }}>
                    {p.n}
                  </span>
                  <span style={{ fontFamily: "var(--font-cormorant),serif", fontSize: "21px", fontWeight: "400" }}>
                    {p.name}
                  </span>
                </a>
              </Fragment>))}
            </nav>
          </div>
          <div data-stack="proc" style={{ position: "relative" }}>
            {(procs).map((p: any, $index: number) => (<Fragment key={$index}>
              <article id={`proc-${p.n}`} data-stack-panel="" style={{ position: "sticky", top: "0", height: "100vh", minHeight: "620px" }}>
                <div data-stack-inner="" style={{ position: "absolute", inset: "0", overflow: "hidden", background: `${p.bg}`, color: `${p.fg}`, transformOrigin: "50% 0%", willChange: "transform" }}>
                  <div style={{ position: "absolute", inset: "0", display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", alignContent: "center", alignItems: "center", gap: "clamp(24px,5vw,96px)", padding: "clamp(80px,11vh,110px) clamp(20px,6vw,96px) clamp(56px,8vh,80px)" }}>
                    <div style={{ position: "relative", flex: "1 1 360px", minWidth: "0", height: "max(38vh,min(74vh,calc(40vw + 18vh)))" }}>
                      <div data-stack-clip="" style={{ position: "absolute", inset: "0", overflow: "hidden", borderRadius: `${p.radius}`, background: `${p.slotBg}` }}>
                        <div data-stack-img="" style={{ position: "absolute", inset: "0", transformOrigin: "50% 60%" }}>
                          <ImageSlot id={p.slot} shape="rect" placeholder={p.ph} />
                        </div>
                      </div>
                      <div style={{ position: "absolute", left: "0", top: "calc(100% + 14px)", display: "flex", gap: "14px", fontSize: "9px", letterSpacing: ".3em", fontWeight: "500", color: `${p.sub}` }}>
                        <span>
                          {p.n}{" / 05"}
                        </span>
                        <span>
                          {p.tags}
                        </span>
                      </div>
                    </div>
                    <div style={{ flex: "1 1 360px", minWidth: "0", display: "flex", flexDirection: "column", gap: "clamp(14px,2.4vh,28px)" }}>
                      <div data-stack-num="" style={{ fontFamily: "var(--font-cormorant),serif", fontWeight: "300", fontStyle: "italic", fontSize: "clamp(72px,12vw,230px)", lineHeight: ".78", letterSpacing: "-.04em", color: `${p.numc}` }}>
                        {p.n}
                      </div>
                      <h3 data-stack-title="" style={{ margin: "0", fontFamily: "var(--font-cormorant),serif", fontWeight: "300", fontSize: "clamp(40px,5.2vw,96px)", lineHeight: ".95", letterSpacing: "-.015em" }}>
                        {p.name}
                      </h3>
                      <p style={{ margin: "0", maxWidth: "460px", fontFamily: "var(--font-cormorant),serif", fontStyle: "italic", fontSize: "clamp(20px,1.8vw,28px)", lineHeight: "1.35", color: `${p.sub}`, textWrap: "pretty" }}>
                        {p.desc}
                      </p>
                    </div>
                  </div>
                  <div data-stack-shade="" style={{ position: "absolute", inset: "0", background: "#111111", opacity: "0", pointerEvents: "none" }} />
                </div>
              </article>
            </Fragment>))}
          </div>
        </section>
        <section id="resultados" data-screen-label="06 Antes e depois" style={{ position: "relative", background: "#F5F2EE", padding: "clamp(110px,18vh,200px) clamp(20px,6vw,96px) clamp(80px,12vh,140px)" }}>
          <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "clamp(56px,9vh,110px)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(32px,5vh,56px)", flex: "1 1 520px" }}>
                <div data-reveal="fade" style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: "10px", letterSpacing: ".32em", fontWeight: "500" }}>
                  <span>
                    {"05"}
                  </span>
                  <span style={{ display: "block", width: "48px", height: "1px", background: "#3B2A24" }} />
                  <span>
                    {"RESULTADOS"}
                  </span>
                </div>
                <h2 style={{ margin: "0", fontFamily: "var(--font-cormorant),serif", fontWeight: "300", fontSize: "clamp(46px,6.4vw,118px)", lineHeight: ".92", letterSpacing: "-.018em" }}>
                  <span style={{ display: "block", overflow: "hidden", paddingBottom: ".06em" }}>
                    <span data-reveal="line" style={{ display: "block" }}>
                      {"Antes e depois,"}
                    </span>
                  </span>
                  <span style={{ display: "block", overflow: "hidden", padding: "0 .12em .1em 0" }}>
                    <span data-reveal="line" data-delay="140" style={{ display: "block", fontStyle: "italic", color: "#5C3A40" }}>
                      {"sem filtros."}
                    </span>
                  </span>
                </h2>
              </div>
              <div data-reveal="up" style={{ flex: "0 1 340px", display: "flex", flexDirection: "column", gap: "16px", fontSize: "14px", lineHeight: "1.6", color: "#6E5A52" }}>
                <p style={{ margin: "0" }}>
                  {"Fotografias reais, sem edição ou filtros. Arraste o divisor para comparar."}
                </p>
                <p style={{ margin: "0", fontFamily: "var(--font-cormorant),serif", fontStyle: "italic", fontSize: "19px", color: "#3B2A24" }}>
                  {"Resultados individuais variam de acordo com anatomia e planejamento."}
                </p>
              </div>
            </div>
            <div data-stack="ba" style={{ position: "relative" }}>
              {(bas).map((b: any, $index: number) => (<Fragment key={$index}>
                <article data-ba-card="" style={{ position: "sticky", top: `${b.top}`, paddingBottom: "clamp(60px,10vh,120px)" }}>
                  <div data-ba-inner="" style={{ position: "relative", background: "#F5F2EE", borderTop: "1px solid rgba(59,42,36,.25)", paddingTop: "16px", transformOrigin: "50% 0%", willChange: "transform" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 24px", justifyContent: "space-between", alignItems: "baseline", paddingBottom: "16px" }}>
                      <div style={{ display: "flex", gap: "18px", alignItems: "baseline" }}>
                        <span style={{ fontSize: "10px", letterSpacing: ".24em", fontWeight: "500", color: "#5C3A40" }}>
                          {b.n}
                        </span>
                        <span style={{ fontFamily: "var(--font-cormorant),serif", fontSize: "clamp(22px,2vw,30px)", fontWeight: "400" }}>
                          {b.cat}
                        </span>
                      </div>
                      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                        <span style={{ whiteSpace: "nowrap", fontSize: "9px", letterSpacing: ".24em", fontWeight: "500", padding: "7px 10px", border: "1px solid rgba(59,42,36,.3)" }}>
                          {"CASO REAL · SEM FILTROS"}
                        </span>
                        <span style={{ whiteSpace: "nowrap", fontSize: "9px", letterSpacing: ".24em", fontWeight: "500", padding: "7px 10px", border: "1px dashed rgba(59,42,36,.4)", color: "#6E5A52" }}>
                          {"USO DE IMAGEM: [ AUTORIZAÇÃO ]"}
                        </span>
                      </div>
                    </div>
                    <div data-ba="" style={{ position: "relative", height: "max(360px,calc(100vh - 290px))", overflow: "hidden", background: "#EDE5DE", userSelect: "none" }}>
                      <div style={{ position: "absolute", inset: "0" }}>
                        <ImageSlot id={`ba-${b.k}-antes`} shape="rect" placeholder={`ANTES — ${b.cat}`} />
                      </div>
                      <div style={{ position: "absolute", inset: "0", clipPath: "inset(0 0 0 var(--pos,50%))", background: "#E6D8CE" }}>
                        <ImageSlot id={`ba-${b.k}-depois`} shape="rect" placeholder={`DEPOIS — ${b.cat}`} />
                      </div>
                      <span style={{ position: "absolute", left: "18px", top: "18px", padding: "8px 12px", background: "#F5F2EE", color: "#3B2A24", fontSize: "9px", letterSpacing: ".3em", fontWeight: "500", pointerEvents: "none" }}>
                        {"ANTES"}
                      </span>
                      <span style={{ position: "absolute", right: "18px", top: "18px", padding: "8px 12px", background: "#3B2A24", color: "#F5F2EE", fontSize: "9px", letterSpacing: ".3em", fontWeight: "500", pointerEvents: "none" }}>
                        {"DEPOIS"}
                      </span>
                      <div style={{ position: "absolute", top: "0", bottom: "0", left: "var(--pos,50%)", width: "1px", background: "#F5F2EE", pointerEvents: "none" }} />
                      <div data-ba-handle="" role="slider" tabIndex={0} aria-label="Comparar antes e depois" data-cursor="Arraste" style={{ position: "absolute", top: "0", bottom: "0", left: "var(--pos,50%)", width: "72px", marginLeft: "-36px", cursor: "ew-resize", touchAction: "pan-y", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span className="hv9" style={{ width: "60px", height: "60px", borderRadius: "50%", border: "1px solid #F5F2EE", background: "rgba(59,42,36,.28)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", color: "#F5F2EE", fontSize: "14px", transition: "transform .5s cubic-bezier(.16,1,.3,1)" }}>
                          <span>
                            {"‹"}
                          </span>
                          <span>
                            {"›"}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div data-ba-shade="" style={{ position: "absolute", inset: "0", background: "#F5F2EE", opacity: "0", pointerEvents: "none" }} />
                </article>
              </Fragment>))}
            </div>
            <div data-reveal="up" style={{ display: "flex", flexWrap: "wrap", gap: "28px", justifyContent: "space-between", alignItems: "center", paddingTop: "40px", borderTop: "1px solid rgba(59,42,36,.2)" }}>
              <p style={{ margin: "0", fontFamily: "var(--font-cormorant),serif", fontSize: "clamp(24px,2.2vw,34px)", fontWeight: "300", maxWidth: "620px" }}>
                {"Cada resultado começa com uma avaliação individual."}
              </p>
              <a className="hv10" href={wa} target={waTarget} rel="noopener" data-cursor="Agendar" style={{ display: "inline-flex", alignItems: "center", gap: "18px", padding: "21px 30px 21px 34px", background: "#3B2A24", color: "#F5F2EE", fontSize: "11px", letterSpacing: ".28em", fontWeight: "500", textTransform: "uppercase", transition: "background .7s cubic-bezier(.16,1,.3,1),letter-spacing .7s cubic-bezier(.16,1,.3,1),gap .7s cubic-bezier(.16,1,.3,1)" }}>
                {"Agendar avaliação "}
                <span style={{ display: "block", width: "28px", height: "1px", background: "currentColor" }} />
              </a>
            </div>
          </div>
        </section>
        <section data-screen-label="07 Filosofia" style={{ position: "relative", minHeight: "115vh", display: "flex", alignItems: "center", padding: "clamp(120px,18vh,200px) clamp(20px,6vw,96px)", background: "#5C3A40", color: "#F5F2EE", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: "0", pointerEvents: "none" }}>
            <div data-speed="0.3" style={{ position: "absolute", left: "50%", top: "50%", width: "min(110vw,1400px)", aspectRatio: "1", marginLeft: "calc(min(110vw,1400px) / -2)", marginTop: "calc(min(110vw,1400px) / -2)", border: "1px solid rgba(245,242,238,.1)", borderRadius: "50%" }} />
            <div data-speed="0.5" style={{ position: "absolute", left: "50%", top: "50%", width: "min(64vw,820px)", aspectRatio: "1", marginLeft: "calc(min(64vw,820px) / -2)", marginTop: "calc(min(64vw,820px) / -2)", border: "1px solid rgba(245,242,238,.12)", borderRadius: "50%" }} />
          </div>
          <div style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", gap: "clamp(40px,7vh,80px)" }}>
            <div data-reveal="fade" style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: "10px", letterSpacing: ".32em", fontWeight: "500", color: "#E6D6CB" }}>
              <span style={{ display: "block", width: "48px", height: "1px", background: "#E6D6CB" }} />
              <span>
                {"FILOSOFIA"}
              </span>
            </div>
            <h2 data-track="" style={{ margin: "0", fontFamily: "var(--font-cormorant),serif", fontWeight: "300", fontSize: "clamp(58px,10.4vw,210px)", lineHeight: ".88", letterSpacing: "-.02em" }}>
              <span style={{ display: "block", overflow: "hidden", paddingBottom: ".06em" }}>
                <span data-reveal="line" data-dur="1800" style={{ display: "block" }}>
                  {"A sua melhor versão"}
                </span>
              </span>
              <span style={{ display: "block", overflow: "hidden", padding: "0 .12em .1em 0", textAlign: "right" }}>
                <span data-reveal="line" data-delay="200" data-dur="1800" style={{ display: "block", fontStyle: "italic", color: "#D9C3B5" }}>
                  {"ainda é você."}
                </span>
              </span>
            </h2>
            <div data-reveal="fade" data-delay="400" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "24px", fontSize: "10px", letterSpacing: ".3em", fontWeight: "500", color: "#E6D6CB" }}>
              <span style={{ fontFamily: "var(--font-bodoni),serif", fontSize: "28px", letterSpacing: "0", color: "#F5F2EE" }}>
                {"VA."}
              </span>
              <span>
                {"BELEZA · PRECISÃO · NATURALIDADE"}
              </span>
            </div>
          </div>
        </section>
        <section id="jornada" data-screen-label="08 Como funciona" style={{ position: "relative", padding: "clamp(110px,18vh,200px) clamp(20px,6vw,96px) clamp(80px,12vh,140px)", background: "#F5F2EE" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(56px,8vw,140px)", alignItems: "flex-start", maxWidth: "1320px", margin: "0 auto" }}>
            <div style={{ flex: "1 1 360px", minWidth: "0", position: "sticky", top: "clamp(110px,16vh,160px)", display: "flex", flexDirection: "column", gap: "clamp(32px,5vh,52px)" }}>
              <div data-reveal="fade" style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: "10px", letterSpacing: ".32em", fontWeight: "500" }}>
                <span>
                  {"06"}
                </span>
                <span style={{ display: "block", width: "48px", height: "1px", background: "#3B2A24" }} />
                <span>
                  {"COMO FUNCIONA"}
                </span>
              </div>
              <h2 style={{ margin: "0", fontFamily: "var(--font-cormorant),serif", fontWeight: "300", fontSize: "clamp(42px,5vw,88px)", lineHeight: ".95", letterSpacing: "-.015em" }}>
                <span style={{ display: "block", overflow: "hidden", paddingBottom: ".06em" }}>
                  <span data-reveal="line" style={{ display: "block" }}>
                    {"Seu tratamento começa"}
                  </span>
                </span>
                <span style={{ display: "block", overflow: "hidden", padding: "0 .12em .1em 0" }}>
                  <span data-reveal="line" data-delay="140" style={{ display: "block", fontStyle: "italic", color: "#5C3A40" }}>
                    {"antes do procedimento."}
                  </span>
                </span>
              </h2>
              <div data-reveal="up" data-delay="200">
                <a className="hv11" href={wa} target={waTarget} rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "14px", fontSize: "11px", letterSpacing: ".26em", textTransform: "uppercase", fontWeight: "500", paddingBottom: "6px", backgroundImage: "linear-gradient(#3B2A24,#3B2A24)", backgroundRepeat: "no-repeat", backgroundPosition: "0 100%", backgroundSize: "100% 1px", transition: "background-size .6s cubic-bezier(.16,1,.3,1),gap .6s" }}>
                  {"Iniciar pela avaliação "}
                  <span style={{ display: "block", width: "22px", height: "1px", background: "currentColor" }} />
                </a>
              </div>
            </div>
            <div data-line-track="" style={{ flex: "1.2 1 420px", minWidth: "0", position: "relative", paddingLeft: "clamp(36px,4vw,64px)" }}>
              <div style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: "1px", background: "rgba(59,42,36,.14)" }} />
              <div data-line="" style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: "1px", background: "#5C3A40", transformOrigin: "top", transform: "scaleY(0)" }} />
              <div data-step="" style={{ position: "relative", padding: "4px 0 clamp(90px,16vh,180px)" }}>
                <span data-step-dot="" style={{ position: "absolute", left: "calc(-1 * clamp(36px,4vw,64px) - 5px)", top: "18px", width: "11px", height: "11px", borderRadius: "50%", border: "1px solid #5C3A40", background: "#F5F2EE", transition: "background .6s" }} />
                <div data-reveal="up" style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "480px" }}>
                  <span style={{ fontFamily: "var(--font-cormorant),serif", fontStyle: "italic", fontWeight: "300", fontSize: "clamp(64px,6vw,104px)", lineHeight: ".8", color: "#5C3A40" }}>
                    {"01"}
                  </span>
                  <span style={{ fontSize: "13px", letterSpacing: ".34em", fontWeight: "500" }}>
                    {"AVALIAÇÃO"}
                  </span>
                  <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#3B2A24" }}>
                    {"Escuta atenta, análise facial e entendimento das suas expectativas — para saber o que faz sentido, e o que não faz."}
                  </p>
                </div>
              </div>
              <div data-step="" style={{ position: "relative", padding: "4px 0 clamp(90px,16vh,180px)" }}>
                <span data-step-dot="" style={{ position: "absolute", left: "calc(-1 * clamp(36px,4vw,64px) - 5px)", top: "18px", width: "11px", height: "11px", borderRadius: "50%", border: "1px solid #5C3A40", background: "#F5F2EE", transition: "background .6s" }} />
                <div data-reveal="up" style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "480px" }}>
                  <span style={{ fontFamily: "var(--font-cormorant),serif", fontStyle: "italic", fontWeight: "300", fontSize: "clamp(64px,6vw,104px)", lineHeight: ".8", color: "#5C3A40" }}>
                    {"02"}
                  </span>
                  <span style={{ fontSize: "13px", letterSpacing: ".34em", fontWeight: "500" }}>
                    {"PLANEJAMENTO"}
                  </span>
                  <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#3B2A24" }}>
                    {"Um plano individual, que respeita anatomia, proporções e o tempo de cada etapa."}
                  </p>
                </div>
              </div>
              <div data-step="" style={{ position: "relative", padding: "4px 0 8px" }}>
                <span data-step-dot="" style={{ position: "absolute", left: "calc(-1 * clamp(36px,4vw,64px) - 5px)", top: "18px", width: "11px", height: "11px", borderRadius: "50%", border: "1px solid #5C3A40", background: "#F5F2EE", transition: "background .6s" }} />
                <div data-reveal="up" style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "480px" }}>
                  <span style={{ fontFamily: "var(--font-cormorant),serif", fontStyle: "italic", fontWeight: "300", fontSize: "clamp(64px,6vw,104px)", lineHeight: ".8", color: "#5C3A40" }}>
                    {"03"}
                  </span>
                  <span style={{ fontSize: "13px", letterSpacing: ".34em", fontWeight: "500" }}>
                    {"PROCEDIMENTO"}
                  </span>
                  <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#3B2A24" }}>
                    {"Execução técnica com cuidado, orientações claras e acompanhamento após o procedimento."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="09 Depoimentos" style={{ position: "relative", padding: "clamp(100px,16vh,180px) clamp(20px,6vw,96px)", background: "#EDE5DE" }}>
          <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(56px,9vh,100px)" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(32px,5vh,52px)", flex: "1 1 520px" }}>
                <div data-reveal="fade" style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: "10px", letterSpacing: ".32em", fontWeight: "500" }}>
                  <span>
                    {"07"}
                  </span>
                  <span style={{ display: "block", width: "48px", height: "1px", background: "#3B2A24" }} />
                  <span>
                    {"RELATOS"}
                  </span>
                </div>
                <h2 style={{ margin: "0", fontFamily: "var(--font-cormorant),serif", fontWeight: "300", fontSize: "clamp(42px,5vw,88px)", lineHeight: ".95", letterSpacing: "-.015em" }}>
                  <span style={{ display: "block", overflow: "hidden", paddingBottom: ".06em" }}>
                    <span data-reveal="line" style={{ display: "block" }}>
                      {"Na voz de quem"}
                    </span>
                  </span>
                  <span style={{ display: "block", overflow: "hidden", padding: "0 .12em .1em 0" }}>
                    <span data-reveal="line" data-delay="140" style={{ display: "block", fontStyle: "italic", color: "#5C3A40" }}>
                      {"confiou o próprio rosto."}
                    </span>
                  </span>
                </h2>
              </div>
              <p data-reveal="up" style={{ flex: "0 1 320px", margin: "0", fontSize: "13px", lineHeight: "1.6", color: "#6E5A52" }}>
                {"Espaço reservado para depoimentos reais, publicados com autorização das pacientes."}
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "clamp(32px,4vw,64px)" }}>
              {(depos).map((d: any, $index: number) => (<Fragment key={$index}>
                <figure data-reveal="up" data-delay={d.delay} style={{ margin: "0", display: "flex", flexDirection: "column", gap: "22px", paddingTop: "28px", borderTop: "1px solid rgba(59,42,36,.3)" }}>
                  <span style={{ fontFamily: "var(--font-cormorant),serif", fontSize: "84px", lineHeight: ".5", color: "#5C3A40", height: "36px" }}>
                    {"“"}
                  </span>
                  <blockquote style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <span style={{ display: "block", height: "9px", width: "100%", background: "rgba(59,42,36,.08)" }} />
                    <span style={{ display: "block", height: "9px", width: "94%", background: "rgba(59,42,36,.08)" }} />
                    <span style={{ display: "block", height: "9px", width: "62%", background: "rgba(59,42,36,.08)" }} />
                    <span style={{ fontFamily: "var(--font-cormorant),serif", fontStyle: "italic", fontSize: "19px", color: "#6E5A52", marginTop: "6px" }}>
                      {"[ Depoimento da paciente ]"}
                    </span>
                  </blockquote>
                  <figcaption style={{ display: "flex", alignItems: "center", gap: "14px", marginTop: "8px" }}>
                    <ImageSlot id={`depo-foto-${d.i}`} shape="circle" placeholder="Foto" style={{ width: "52px", height: "52px", flex: "none" }} />
                    <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "11px", letterSpacing: ".24em", fontWeight: "500" }}>
                        {"[ NOME ]"}
                      </span>
                      <span style={{ fontSize: "12px", color: "#6E5A52" }}>
                        {"[ Procedimento ] · foto se autorizada"}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </Fragment>))}
            </div>
            <div data-reveal="up" style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px", alignItems: "center", justifyContent: "space-between", padding: "26px 0", borderTop: "1px solid rgba(59,42,36,.2)", borderBottom: "1px solid rgba(59,42,36,.2)" }}>
              <span style={{ fontSize: "10px", letterSpacing: ".3em", fontWeight: "500" }}>
                {"AVALIAÇÕES GOOGLE"}
              </span>
              <span style={{ fontFamily: "var(--font-cormorant),serif", fontSize: "24px", fontWeight: "300", color: "#6E5A52" }}>
                {"[ nota ] · [ nº de avaliações ]"}
              </span>
              <span style={{ fontSize: "12px", color: "#6E5A52" }}>
                {"Integração a ser conectada quando disponível"}
              </span>
            </div>
          </div>
        </section>
        <section data-screen-label="10 Instagram" style={{ position: "relative", padding: "clamp(110px,18vh,200px) clamp(20px,6vw,96px) clamp(120px,18vh,220px)", background: "#F5F2EE", overflow: "hidden" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(56px,7vw,120px)", alignItems: "center", maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{ flex: "1 1 320px", minWidth: "0", display: "flex", flexDirection: "column", gap: "clamp(28px,4vh,44px)" }}>
              <div data-reveal="fade" style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: "10px", letterSpacing: ".32em", fontWeight: "500" }}>
                <span>
                  {"08"}
                </span>
                <span style={{ display: "block", width: "48px", height: "1px", background: "#3B2A24" }} />
                <span>
                  {"PRESENÇA DIGITAL"}
                </span>
              </div>
              <h2 style={{ margin: "0", fontFamily: "var(--font-cormorant),serif", fontWeight: "300", fontSize: "clamp(40px,4.4vw,78px)", lineHeight: ".95", letterSpacing: "-.015em" }}>
                <span style={{ display: "block", overflow: "hidden", paddingBottom: ".06em" }}>
                  <span data-reveal="line" style={{ display: "block" }}>
                    {"Por trás da técnica,"}
                  </span>
                </span>
                <span style={{ display: "block", overflow: "hidden", padding: "0 .12em .1em 0" }}>
                  <span data-reveal="line" data-delay="140" style={{ display: "block", fontStyle: "italic", color: "#5C3A40" }}>
                    {"uma profissional real."}
                  </span>
                </span>
              </h2>
              <p data-reveal="up" style={{ margin: "0", maxWidth: "380px", fontSize: "16px", lineHeight: "1.7" }}>
                {"Rotina, bastidores e conteúdos sobre harmonização com naturalidade."}
              </p>
              <div data-reveal="up">
                <a className="hv12" href={ig} target="_blank" rel="noopener" data-cursor="Instagram" style={{ display: "inline-flex", alignItems: "center", gap: "18px", padding: "20px 30px", border: "1px solid #3B2A24", color: "#3B2A24", fontSize: "11px", letterSpacing: ".28em", fontWeight: "500", textTransform: "uppercase", transition: "background .6s cubic-bezier(.16,1,.3,1),color .6s,letter-spacing .6s cubic-bezier(.16,1,.3,1)" }}>
                  {"Ver Instagram "}
                  <span style={{ display: "block", width: "24px", height: "1px", background: "currentColor" }} />
                </a>
              </div>
            </div>
            <div style={{ flex: "1.5 1 460px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "clamp(10px,1.4vw,20px)", alignItems: "start" }}>
              <div style={{ position: "relative", aspectRatio: "4/5", marginTop: "12%" }}>
                <div data-speed="0.8" style={{ position: "absolute", inset: "0" }}>
                  <div className="hv13" data-reveal="clip" style={{ position: "absolute", inset: "0", overflow: "hidden", background: "#EDE5DE", transition: "transform 1s cubic-bezier(.16,1,.3,1)" }}>
                    <ImageSlot id="insta-1" shape="rect" placeholder="Post 1" />
                  </div>
                </div>
              </div>
              <div style={{ position: "relative", aspectRatio: "4/5" }}>
                <div data-speed="0.95" style={{ position: "absolute", inset: "0" }}>
                  <div className="hv14" data-reveal="clip" data-delay="120" style={{ position: "absolute", inset: "0", overflow: "hidden", background: "#E6D8CE", transition: "transform 1s cubic-bezier(.16,1,.3,1)" }}>
                    <ImageSlot id="insta-2" shape="rect" placeholder="Post 2" />
                  </div>
                </div>
              </div>
              <div style={{ position: "relative", aspectRatio: "4/5", marginTop: "30%" }}>
                <div data-speed="0.7" style={{ position: "absolute", inset: "0" }}>
                  <div className="hv15" data-reveal="clip" data-delay="240" style={{ position: "absolute", inset: "0", overflow: "hidden", background: "#EDE5DE", transition: "transform 1s cubic-bezier(.16,1,.3,1)" }}>
                    <ImageSlot id="insta-3" shape="rect" placeholder="Post 3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="agendar" data-screen-label="11 CTA final" style={{ position: "relative", background: "#3B2A24", color: "#F5F2EE", padding: "clamp(120px,20vh,230px) clamp(20px,6vw,96px) clamp(80px,12vh,130px)", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: "0", pointerEvents: "none" }}>
            <div data-speed="0.3" data-depth="-10" style={{ position: "absolute", right: "-8vw", bottom: "-14vw", fontFamily: "var(--font-bodoni),serif", fontSize: "56vw", lineHeight: ".8", letterSpacing: "-.05em", color: "#45322B", whiteSpace: "nowrap" }}>
              {"VA."}
            </div>
          </div>
          <div style={{ position: "relative", maxWidth: "1400px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(48px,8vh,90px)" }}>
            <div data-reveal="fade" style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: "10px", letterSpacing: ".32em", fontWeight: "500", color: "#D9C3B5" }}>
              <span>
                {"09"}
              </span>
              <span style={{ display: "block", width: "48px", height: "1px", background: "#D9C3B5" }} />
              <span>
                {"AVALIAÇÃO"}
              </span>
            </div>
            <h2 style={{ margin: "0", fontFamily: "var(--font-cormorant),serif", fontWeight: "300", fontSize: "clamp(50px,8vw,156px)", lineHeight: ".9", letterSpacing: "-.02em" }}>
              <span style={{ display: "block", overflow: "hidden", paddingBottom: ".06em" }}>
                <span data-reveal="line" style={{ display: "block" }}>
                  {"Naturalidade não"}
                </span>
              </span>
              <span style={{ display: "block", overflow: "hidden", paddingBottom: ".06em" }}>
                <span data-reveal="line" data-delay="110" style={{ display: "block" }}>
                  {"acontece por acaso."}
                </span>
              </span>
              <span style={{ display: "block", overflow: "hidden", padding: "0 .12em .1em 0", marginLeft: "clamp(0px,10vw,200px)" }}>
                <span data-reveal="line" data-delay="220" style={{ display: "block", fontStyle: "italic", color: "#D9C3B5" }}>
                  {"Ela é planejada."}
                </span>
              </span>
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "space-between", alignItems: "flex-end" }}>
              <p data-reveal="up" style={{ margin: "0", maxWidth: "440px", fontSize: "clamp(17px,1.3vw,20px)", lineHeight: "1.7", color: "#F5F2EE", textWrap: "pretty" }}>
                {"Agende sua avaliação e descubra quais possibilidades fazem sentido para o seu rosto."}
              </p>
              <a className="hv16" data-reveal="up" data-delay="120" href={wa} target={waTarget} rel="noopener" data-cursor="WhatsApp" style={{ display: "inline-flex", alignItems: "center", gap: "22px", padding: "26px 36px 26px 40px", background: "#D9C3B5", color: "#3B2A24", fontSize: "12px", letterSpacing: ".3em", fontWeight: "500", textTransform: "uppercase", transition: "background .7s cubic-bezier(.16,1,.3,1),letter-spacing .7s cubic-bezier(.16,1,.3,1),gap .7s cubic-bezier(.16,1,.3,1)" }}>
                {"Agendar avaliação "}
                <span style={{ display: "block", width: "32px", height: "1px", background: "currentColor" }} />
              </a>
            </div>
            <div data-reveal="up" style={{ display: "flex", alignItems: "center", gap: "26px", paddingTop: "clamp(40px,7vh,80px)" }}>
              <span style={{ fontFamily: "var(--font-bodoni),serif", fontSize: "clamp(56px,5vw,84px)", lineHeight: "1", letterSpacing: "-.02em" }}>
                {"VA."}
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: "6px", borderLeft: "1px solid rgba(245,242,238,.3)", paddingLeft: "22px" }}>
                <span style={{ fontSize: "11px", letterSpacing: ".3em", fontWeight: "500" }}>
                  {"DRA. VITÓRIA ALMEIDA"}
                </span>
                <span style={{ fontSize: "10px", letterSpacing: ".3em", color: "#D9C3B5" }}>
                  {"HARMONIZAÇÃO OROFACIAL"}
                </span>
                <span style={{ fontSize: "10px", letterSpacing: ".3em", color: "#D9C3B5" }}>
                  {"CRO 65679"}
                </span>
              </span>
            </div>
          </div>
        </section>
        <footer data-screen-label="12 Rodapé" style={{ background: "#3B2A24", color: "#F5F2EE", padding: "0 clamp(20px,6vw,96px) 40px" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto", borderTop: "1px solid rgba(245,242,238,.16)", paddingTop: "44px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "36px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px", lineHeight: "1.5" }}>
              <span style={{ fontSize: "10px", letterSpacing: ".3em", fontWeight: "500", color: "#D9C3B5", marginBottom: "6px" }}>
                {"PROFISSIONAL"}
              </span>
              <span>
                {"Dra. Vitória Almeida"}
              </span>
              <span>
                {"Cirurgiã-Dentista"}
              </span>
              <span>
                {"CRO 65679"}
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px", lineHeight: "1.5" }}>
              <span style={{ fontSize: "10px", letterSpacing: ".3em", fontWeight: "500", color: "#D9C3B5", marginBottom: "6px" }}>
                {"ATUAÇÃO"}
              </span>
              <span>
                {"Belo Horizonte · Barbacena"}
              </span>
              <span style={{ color: "#D9C3B5" }}>
                {"[ endereço a confirmar ]"}
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px", lineHeight: "1.5", alignItems: "flex-start" }}>
              <span style={{ fontSize: "10px", letterSpacing: ".3em", fontWeight: "500", color: "#D9C3B5", marginBottom: "6px" }}>
                {"CONTATO"}
              </span>
              <a className="hv17" href={ig} target="_blank" rel="noopener" style={{ paddingBottom: "3px", backgroundImage: "linear-gradient(#F5F2EE,#F5F2EE)", backgroundRepeat: "no-repeat", backgroundPosition: "0 100%", backgroundSize: "0% 1px", transition: "background-size .6s cubic-bezier(.16,1,.3,1)" }}>
                {"Instagram"}
              </a>
              <a className="hv18" href={wa} target={waTarget} rel="noopener" style={{ paddingBottom: "3px", backgroundImage: "linear-gradient(#F5F2EE,#F5F2EE)", backgroundRepeat: "no-repeat", backgroundPosition: "0 100%", backgroundSize: "0% 1px", transition: "background-size .6s cubic-bezier(.16,1,.3,1)" }}>
                {"WhatsApp"}
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "12px", lineHeight: "1.6", color: "#D9C3B5" }}>
              <span style={{ fontSize: "10px", letterSpacing: ".3em", fontWeight: "500", marginBottom: "6px" }}>
                {"NOTA"}
              </span>
              <span>
                {"Resultados individuais variam de acordo com anatomia e planejamento. A indicação de qualquer procedimento depende de avaliação profissional."}
              </span>
            </div>
          </div>
          <div style={{ maxWidth: "1400px", margin: "44px auto 0", display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "space-between", fontSize: "10px", letterSpacing: ".24em", color: "#D9C3B5" }}>
            <span>
              {"© 2026 DRA. VITÓRIA ALMEIDA"}
            </span>
            <a href="#topo" style={{ color: "#F5F2EE" }}>
              {"VOLTAR AO TOPO ↑"}
            </a>
          </div>
        </footer>
        {(showMbar) && (<>
          <a data-mbar="" href={wa} target={waTarget} rel="noopener" style={{ position: "fixed", left: "12px", right: "12px", bottom: "12px", zIndex: "40", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "19px 22px", background: "#3B2A24", color: "#F5F2EE", fontSize: "11px", letterSpacing: ".26em", fontWeight: "500", textTransform: "uppercase", transform: "translateY(160%)", transition: "transform .9s cubic-bezier(.16,1,.3,1)" }}>
            {"Agendar avaliação "}
            <span style={{ fontSize: "9px", letterSpacing: ".24em", color: "#D9C3B5" }}>
              {"WHATSAPP"}
            </span>
          </a>
        </>)}
      </div>
    </>
  );
}
