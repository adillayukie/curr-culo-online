import { createFileRoute } from "@tanstack/react-router";
import adillaPhoto from "@/assets/adilla.jpeg";
import { Mail, Phone, Linkedin, MapPin, ArrowUpRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Resume,
  head: () => ({
    meta: [
      { title: "Adilla Yukie Teixeira — Product Marketing & Growth" },
      {
        name: "description",
        content:
          "Currículo de Adilla Yukie Teixeira — Product Marketing Manager focada em go-to-market, posicionamento e crescimento orientado a dados.",
      },
      { property: "og:title", content: "Adilla Yukie Teixeira — Product Marketing" },
      {
        property: "og:description",
        content: "PMM com foco em GTM, posicionamento e growth orientado a dados.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const experiences = [
  {
    role: "Analista Sênior de Produto Digital (PMM)",
    company: "Grupo Boticário",
    period: "06/2022 — 11/2025",
    bullets: [
      "Liderei o GTM do mapa “Guardiões do Futuro” no Fortnite, conectando proposta de valor, narrativa e canais — alcançando 3x a média de jogadores em iniciativas institucionais.",
      "Estruturei a narrativa de valor do produto em parceria com Produto e Marketing, garantindo consistência entre experiência, comunicação e objetivos de negócio.",
      "Defini métricas de sucesso e acompanhei alcance, engajamento e conversão, otimizando eficiência de mídia e captura de valor.",
      "Atuei como ponte entre Produto, Martech e parceiros para alinhar entregas, narrativa e estratégia de crescimento.",
      "Gerenciei roadmap e orçamento (R$ 200k), priorizando iniciativas com maior impacto para usuário e negócio.",
    ],
  },
  {
    role: "Product Marketing Manager (PMM)",
    company: "Meu Pet Club | Grupo SVC",
    period: "10/2020 — 06/2022",
    bullets: [
      "Liderei estratégias de GTM para produtos B2B e B2C, definindo posicionamento, proposta de valor e métricas (CAC, LTV, conversão).",
      "Conduzi discovery de mercado e comportamento do usuário, orientando aquisição, comunicação e evolução do produto.",
      "Ativei o blog como principal canal de aquisição qualificada: +346% de tráfego orgânico e -20% no CAC B2B.",
      "Otimizei o funil via experimentação contínua (A/B, conteúdo e canais), aumentando previsibilidade de crescimento.",
      "Estruturei narrativa e materiais de sales enablement, aumentando consistência e eficiência na conversão.",
    ],
  },
  {
    role: "Coordenadora de Comunicação e Marketing",
    company: "Grupo SVC",
    period: "09/2019 — 10/2020",
    bullets: [
      "Liderei o reposicionamento estratégico do Meu Pet Club, definindo ICP, personas e narrativa de valor.",
      "Estruturei o funil de demanda (Inbound + Outbound), conectando marketing e vendas para aumentar conversão.",
      "Desenvolvi fluxos de nutrição e automação, melhorando a qualidade das oportunidades para SDRs.",
    ],
  },
];

const skills = [
  "Go-to-Market & Lançamentos",
  "Posicionamento & Mensagens",
  "Adoção & Otimização de Funil",
  "Discovery de Mercado",
  "Growth & Experimentação (A/B)",
  "Influência em Roadmap",
  "Análise de Dados (CAC, LTV, Conversão)",
  "Alinhamento Cross-functional",
];

const highlights = [
  { value: "3x", label: "jogadores acima da média em GTM Fortnite" },
  { value: "+346%", label: "tráfego orgânico via canal de blog" },
  { value: "-20%", label: "redução de CAC B2B" },
  { value: "R$ 200k", label: "orçamento de roadmap gerenciado" },
];

function Resume() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <header className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 60% at 80% 10%, var(--mint) 0%, transparent 60%), radial-gradient(40% 40% at 10% 90%, color-mix(in oklab, var(--coral) 25%, transparent) 0%, transparent 70%)",
          }}
        />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.2fr_1fr] md:py-24">
          <div className="flex flex-col justify-center">
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Product Marketing · Go-to-Market · Growth
            </span>
            <h1 className="font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
              Adilla
              <br />
              <span className="italic text-primary">Yukie Teixeira</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Traduzo capacidades de produto em propostas de valor claras,
              conectando produto, marketing e receita para gerar crescimento
              previsível e orientado a dados.
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
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <li className="inline-flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> (41) 9.9970.4287</li>
              <li className="inline-flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> adillayukie@hotmail.com</li>
              <li className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> São Paulo, SP</li>
            </ul>
          </div>

          <div className="relative mx-auto md:mx-0">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-secondary"
              style={{ transform: "rotate(-3deg)" }}
            />
            <div
              aria-hidden
              className="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-full"
              style={{ background: "var(--coral)" }}
            />
            <img
              src={adillaPhoto}
              alt="Retrato de Adilla Yukie Teixeira"
              className="relative h-[460px] w-[360px] rounded-[1.75rem] object-cover shadow-xl"
            />
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
            Sobre <span className="italic text-primary">mim</span>
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              Profissional de Product Marketing com experiência na interseção
              entre Produto, Marketing e Receita, atuando na construção e
              evolução de estratégias de go-to-market, posicionamento e
              crescimento.
            </p>
            <p>
              Traduzo capacidades de produto em propostas de valor claras,
              otimizo funis de aquisição e conversão e alinho stakeholders para
              aumentar eficiência e previsibilidade. Atuação orientada a dados,
              com foco em impacto de negócio.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="mb-10 font-serif text-3xl tracking-tight md:text-4xl">
            Competências
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

      {/* EDUCATION + LANG + COURSES */}
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
                <p className="font-medium">Bacharel em Design Digital</p>
                <p className="text-muted-foreground">PUC-PR · 2012–2016</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-5 font-serif text-2xl">Idioma</h3>
            <p className="text-sm text-foreground/85">Inglês — Avançado</p>
          </div>
          <div>
            <h3 className="mb-5 font-serif text-2xl">Cursos</h3>
            <ul className="space-y-3 text-sm text-foreground/85">
              <li>Product Management — PM3 · 2023</li>
              <li>Customer Experience — Sandbox · 2021</li>
              <li>Google Data Studio — IBPAD · 2020</li>
              <li>Inbound Marketing — HubSpot Academy · 2017</li>
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
            Aberta para conversas sobre Product Marketing, GTM e estratégias de
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
        © {new Date().getFullYear()} Adilla Yukie Teixeira
      </footer>
    </div>
  );
}
