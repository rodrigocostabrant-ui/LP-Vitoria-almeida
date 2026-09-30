// Conteúdo e configurações da landing. Edite aqui sem mexer no layout.

export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const site = {
  nome: "Dra. Vitória Almeida",
  titulo: "Harmonização Orofacial em BH e Barbacena | Dra. Vitória Almeida",
  descricao:
    "Harmonização orofacial com resultados naturais e planejamento individual. Dra. Vitória Almeida, cirurgiã-dentista, CRO 65679 — Belo Horizonte e Barbacena.",

  // [PENDENTE] Número no formato 5531XXXXXXXXX. Vazio: os botões levam à seção final (#agendar).
  whatsapp: "",
  whatsappMensagem: "Olá, Dra. Vitória! Gostaria de agendar uma avaliação.",
  // [PENDENTE] Perfil do Instagram da Dra.
  instagram: "https://instagram.com/",

  // "Completo" ou "Reduzido" (reduzido também é aplicado para quem pede menos movimento no sistema).
  movimento: "Completo" as "Completo" | "Reduzido",
  cursorPersonalizado: true,
  escultura3d: true,
  ctaFixoMobile: true,

  procedimentos: [
    { n: "01", name: "Preenchimento Labial", desc: "Mais do que volume, proporção, definição e harmonia.", tags: "PROPORÇÃO · DEFINIÇÃO · HARMONIA", bg: "#F5F2EE", fg: "#3B2A24", sub: "#6E5A52", numc: "#5C3A40", slotBg: "#EDE5DE", radius: "0px", slot: "proc-labial", ph: "Editorial — lábios, luz natural" },
    { n: "02", name: "Toxina Botulínica", desc: "Prevenção e suavização de marcas mantendo a naturalidade das expressões.", tags: "PREVENÇÃO · SUAVIZAÇÃO · EXPRESSÃO", bg: "#EDE5DE", fg: "#3B2A24", sub: "#6E5A52", numc: "#5C3A40", slotBg: "#E6D8CE", radius: "999px 999px 0 0", slot: "proc-toxina", ph: "Editorial — terço superior, expressão" },
    { n: "03", name: "Perfiloplastia", desc: "Equilíbrio entre testa, nariz, lábios e queixo.", tags: "TESTA · NARIZ · LÁBIOS · QUEIXO", bg: "#E6D8CE", fg: "#3B2A24", sub: "#5E4B44", numc: "#5C3A40", slotBg: "#D9C3B5", radius: "0px", slot: "proc-perfilo", ph: "Editorial — perfil lateral" },
    { n: "04", name: "Full Face", desc: "Um plano global para sustentação, proporção, volume e qualidade da pele.", tags: "SUSTENTAÇÃO · PROPORÇÃO · VOLUME · PELE", bg: "#5C3A40", fg: "#F5F2EE", sub: "#E6D6CB", numc: "#D9C3B5", slotBg: "#6B474D", radius: "999px 999px 0 0", slot: "proc-fullface", ph: "Editorial — rosto completo, frontal" },
    { n: "05", name: "Skinbooster", desc: "Qualidade da pele, hidratação e aparência mais viçosa.", tags: "HIDRATAÇÃO · VIÇO · QUALIDADE", bg: "#F5F2EE", fg: "#3B2A24", sub: "#6E5A52", numc: "#5C3A40", slotBg: "#EDE5DE", radius: "0px", slot: "proc-skin", ph: "Editorial — textura da pele, close" },
  ],

  antesDepois: [
    { n: "01", cat: "Preenchimento Labial", k: "labial", top: "84px" },
    { n: "02", cat: "Toxina Botulínica", k: "toxina", top: "108px" },
    { n: "03", cat: "Perfiloplastia", k: "perfilo", top: "132px" },
    { n: "04", cat: "Full Face", k: "fullface", top: "156px" },
  ],

  depoimentos: [{ i: 1, delay: 0 }, { i: 2, delay: 120 }, { i: 3, delay: 240 }],
};
