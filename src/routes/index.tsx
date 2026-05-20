import { createFileRoute, Link } from "@tanstack/react-router";
import adillaPhoto from "@/assets/adilla.png";
import { Mail, Linkedin, MapPin, ArrowUpRight, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Resume,
  head: () => ({
    meta: [
      { title: "Adilla Teixeira — Product Manager & Growth" },
      {
        name: "description",
        content:
          "Currículo online de Adilla Teixeira — Product Manager especialista em Growth, Go-to-Market e otimização de funil com impacto direto em receita.",
      },
      { property: "og:title", content: "Adilla Teixeira — Product Manager & Growth" },
      {
        property: "og:description",
        content:
          "PM e PMM focada em GTM, posicionamento e crescimento orientado a produto.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const experiences = [
  {
    role: "Analista Sr. de Produto Digital",
    company: "Grupo Boticário",
    period: "07/2022 — 11/2025",
    bullets: [
      "Liderei o go-to-market de uma iniciativa digital dentro do ecossistema Fortnite, estruturando posicionamento, narrativa e aquisição — resultado 3x superior ao benchmark interno.",
      "Estruturei a comunicação e proposta de valor do produto, garantindo consistência entre experiência, campanha e objetivos de negócio.",
      "Direcionei decisões com base em métricas de aquisição, engajamento e conversão, otimizando eficiência de mídia e impacto.",
      "Atuei como elo entre Produto, Martech e parceiros, garantindo execução alinhada à estratégia de crescimento.",
    ],
  },
  {
    role: "Product Marketing Manager (PMM)",
    company: "Meu Pet Club",
    period: "10/2020 — 06/2022",
    bullets: [
      "Estruturei GTM completo (B2B e B2C), definindo ICP, posicionamento e estratégia de aquisição.",
      "Reposicionei canais e narrativa, reduzindo CAC B2B em 20%.",
      "Liderei estratégia de conteúdo e SEO, gerando +346% de crescimento de tráfego orgânico.",
      "Conectei Produto, Vendas e CS para aumentar eficiência comercial e geração de receita.",
    ],
  },
  {
    role: "Coordenadora de Comunicação e Marketing",
    company: "Grupo SVC",
    period: "09/2019 — 10/2020",
    bullets: [
      "Liderei reposicionamento de produto e definição de ICP.",
      "Estruturei aquisição (inbound + outbound) integrada ao time comercial.",
      "Implementei automação e qualificação de leads, aumentando conversão e previsibilidade.",
    ],
  },
  {
    role: "Analista de Marketing",
    company: "LS Sistema de Ensino",
    period: "12/2017 — 09/2019",
    bullets: [
      "Gestão de redes sociais e canais digitais, com estratégia de conteúdo para campanhas sazonais e AON.",
      "Mensuração e análise do desempenho de marketing digital.",
      "Criação de conteúdo, atendimento e relatórios de Social Media.",
    ],
  },
  {
    role: "Analista de Marketing",
    company: "Weebo Inovação e Tecnologia",
    period: "02/2016 — 04/2017",
    bullets: [
      "Elaboração de peças gráficas e digitais.",
      "Planejamento de redes sociais e produção de conteúdo.",
    ],
  },
];

const skills = [
  "Product Management",
  "Growth Marketing",
  "Product Roadmap",
  "Go-to-Market (GTM)",
  "Posicionamento & Narrativa",
  "Otimização de Funil",
  "UX/UI",
  "Data Analytics",
  "Agile",
];

const highlights = [
  { value: "3x", label: "performance em lançamento digital (gaming)" },
  { value: "+346%", label: "crescimento de tráfego orgânico" },
  { value: "-20%", label: "redução de CAC B2B" },
  { value: "B2B + B2C", label: "estratégias de GTM end-to-end" },
];

function Resume() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <header className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{ background: "#15182a" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.35) 1.2px, transparent 1.2px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.2fr_1fr] md:py-24">
          <div className="flex flex-col justify-center">
            <h1 className="font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
              Adilla
              <br />
              <span className="italic text-primary">Teixeira</span>
            </h1>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Product", "Growth", "Go-to-Market"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                >
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Especialista em crescimento orientado a produto, atuando na
              interseção entre posicionamento, distribuição e conversão — com
              impacto direto em receita.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:adillayukie@hotmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                <Mail className="h-4 w-4" /> Entrar em contato
              </a>
              <a
                href="https://www.linkedin.com/in/adillayukie"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
              >
                Sobre mim <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <li className="inline-flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> adillayukie@hotmail.com</li>
              <li className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> São Paulo, SP</li>
            </ul>
          </div>

          <div className="relative mx-auto flex items-end justify-center md:mx-0">
            <div
              className="relative aspect-square w-[320px] rounded-full md:w-[420px]"
              style={{
                background:
                  "linear-gradient(110deg, #9fb393 0%, #c8dcb8 50%, #DFFFD6 100%)",
              }}
            >
              <div
                aria-hidden
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(55% 50% at 72% 78%, rgba(255,255,255,0.5) 0%, transparent 70%)",
                }}
              />
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <img
                  src={adillaPhoto}
                  alt=""
                  aria-hidden
                  className="absolute bottom-0 left-1/2 h-[112%] w-auto max-w-none -translate-x-1/2 object-contain"
                />
              </div>
              <img
                src={adillaPhoto}
                alt="Retrato de Adilla Teixeira"
                className="absolute bottom-0 left-1/2 h-[112%] w-auto max-w-none -translate-x-1/2 object-contain"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 0%, black 21.8%, transparent 21.8%)",
                  maskImage:
                    "linear-gradient(to bottom, black 0%, black 21.8%, transparent 21.8%)",
                }}
              />

            </div>
          </div>


        </div>
      </header>

      {/* HIGHLIGHTS */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.label}>
              <div className="font-serif text-4xl text-primary">{h.value}</div>
              <p className="mt-2 text-sm leading-snug text-muted-foreground">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Resumo <span className="italic text-primary">profissional</span>
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              Lidero estratégias de go-to-market e otimização de funil com foco
              em impacto direto em receita, conectando comportamento do usuário,
              narrativa de valor e eficiência de canais.
            </p>
            <p>
              Minha atuação se concentra em identificar e destravar alavancas
              reais de crescimento — seja via reposicionamento, reestruturação
              de aquisição ou evolução da proposta de valor.
            </p>
            <Link
              to="/sobre"
              className="inline-flex items-center gap-2 text-primary underline-offset-4 hover:underline"
            >
              Conheça mais sobre mim <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="mb-10 font-serif text-3xl tracking-tight md:text-4xl">
            Principais competências
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-12 font-serif text-3xl tracking-tight md:text-4xl">
          Experiência
        </h2>
        <div className="space-y-10">
          {experiences.map((e) => (
            <article
              key={e.role + e.company}
              className="grid gap-6 border-t border-border pt-10 md:grid-cols-[1fr_2fr]"
            >
              <div>
                <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground">
                  {e.period}
                </p>
                <h3 className="mt-2 font-serif text-2xl leading-tight">{e.role}</h3>
                <p className="mt-1 text-primary">{e.company}</p>
              </div>
              <ul className="space-y-3 text-foreground/85">
                {e.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* EDUCATION + LANG + CERTS */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-3">
          <div>
            <h3 className="mb-5 font-serif text-2xl">Formação</h3>
            <ul className="space-y-4 text-sm text-foreground/85">
              <li>
                <p className="font-medium">MBA em Marketing</p>
                <p className="text-muted-foreground">ESPM · 2020–2022</p>
              </li>
              <li>
                <p className="font-medium">Bacharelado em Design Digital</p>
                <p className="text-muted-foreground">PUC-PR · 2012–2016</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-5 font-serif text-2xl">Idiomas</h3>
            <ul className="space-y-2 text-sm text-foreground/85">
              <li>Português — Nativo</li>
              <li>Inglês — Profissional</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-5 font-serif text-2xl">Certificações</h3>
            <ul className="space-y-2 text-sm text-foreground/85">
              <li>Adobe Illustrator</li>
              <li>Adobe InDesign</li>
              <li>Certificação Runrun.it</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(135deg, var(--mint), color-mix(in oklab, var(--coral) 30%, white))",
          }}
        />
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
            Vamos construir o próximo
            <span className="italic text-primary"> capítulo de growth?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Aberta para conversas sobre Product Management, GTM e estratégias de
            crescimento.
          </p>
          <a
            href="mailto:adillayukie@hotmail.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-90"
          >
            <Mail className="h-4 w-4" /> adillayukie@hotmail.com
          </a>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Adilla Teixeira
      </footer>
    </div>
  );
}
