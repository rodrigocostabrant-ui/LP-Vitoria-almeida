export type Imagem = { src: string; alt: string; position?: string };

export const imagens: Record<string, Imagem> = {
  "hero-retrato": { src: "/images/hero-retrato.webp", alt: "Dra. Vitória Almeida" },
  "sobre-detalhe": {
    src: "/images/atendimento.webp",
    alt: "Dra. Vitória Almeida durante um atendimento",
    position: "50% 30%",
  },
};
