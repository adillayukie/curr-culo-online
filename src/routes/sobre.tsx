import { createFileRoute, Link } from "@tanstack/react-router";
import adillaPhoto from "@/assets/adilla.jpeg";
import { Mail, ArrowRight, Heart, Compass, Lightbulb, Target } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  component: SobreMim,
  head: () => ({
    meta: [
      { title: "Sobre mim — Adilla Teixeira" },
      {
        name: "description",
        content:
          "Conheça Adilla Teixeira: trajetória, princípios e o que move uma Product Manager focada em crescimento orientado a produto.",
      },
      { property: "og:title", content: "Sobre mim — Adilla Teixeira" },
      {
        property: "og:description",
        content:
          "Trajetória, princípios e o que move uma PM focada em crescimento.",
      },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
});

const principles = [
  {
    icon: Compass,
    title: "Clareza antes de velocidade",
    text: "Crescimento sustentável nasce de um posicionamento claro. Antes de escalar, alinho narrativa, ICP e proposta de valor.",
  },
  {
    icon: Target,
    title: "Decisões orientadas a dados",
    text: "Cada hipótese vira experimento. Cada experimento vira aprendizado. Cada aprendizado vira alavanca de receita.",
  },
  {
    icon: Lightbulb,
    title: "Produto + Marketing como um só time",
    text: "Os melhores resultados acontecem quando Produto, Marketing, Vendas e CS operam com a mesma estratégia.",
  },
  {
    icon: Heart,
    title: "Impacto humano no centro",
    text: "Por trás de cada métrica há uma pessoa real. Entender comportamento é o que diferencia uma boa entrega de uma entrega memorável.",
  },
];

function SobreMim() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <header className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(50% 60% at 20% 10%, var(--mint) 0%, transparent 60%), radial-gradient(40% 40% at 90% 80%, color-mix(in oklab, var(--coral) 25%, transparent) 0%, transparent 70%)",
          }}
        />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1fr_1.2fr] md:py-24">
          <div className="relative order-2 mx-auto md:order-1 md:mx-0">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 rounded-full"
              style={{
                background:
                  "radial-gradient(closest-side, color-mix(in oklab, var(--coral) 35%, white) 0%, transparent 70%)",
              }}
            />
            <img
              src={adillaPhoto}
              alt="Retrato de Adilla Teixeira"
              className="relative h-[420px] w-auto object-contain"
            />
          </div>
          <div className="order-1 flex flex-col justify-center md:order-2">
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
              Sobre mim
            </span>
            <h1 className="font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
              Mais do que <span className="italic text-primary">métricas</span>,
              propósito.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Sou Adilla — paranaense de origem, paulistana por escolha. Comecei
              minha trajetória em design e comunicação e, ao longo dos anos,
              encontrei no encontro entre produto, marketing e dados o lugar
              onde criatividade e estratégia se transformam em crescimento real.
            </p>
          </div>
        </div>
      </header>

      {/* STORY */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="mb-10 font-serif text-3xl tracking-tight md:text-4xl">
          Minha <span className="italic text-primary">trajetória</span>
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            Comecei como designer e analista de marketing, criando peças,
            cuidando de canais e aprendendo, na prática, o que faz uma marca
            existir na cabeça das pessoas. Em pouco tempo percebi que adorava
            entender o "porquê" por trás de cada clique, de cada lead e de cada
            conversa de vendas.
          </p>
          <p>
            Essa curiosidade me levou para o universo de Product Marketing e,
            depois, Product Management. Atuei em contextos muito diferentes —
            de educação a SaaS B2B/B2C, passando por gaming dentro de um dos
            maiores grupos de beleza do país — e em todos eles encontrei o
            mesmo desafio: traduzir capacidades de produto em valor percebido,
            e valor percebido em receita.
          </p>
          <p>
            Hoje, atuo na interseção entre estratégia, dados e narrativa. Gosto
            de problemas ambíguos, de times multidisciplinares e de construir
            estruturas de crescimento que sobrevivem além de uma boa campanha.
          </p>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="mb-12 font-serif text-3xl tracking-tight md:text-4xl">
            Princípios que <span className="italic text-primary">me guiam</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFF DUTY */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Fora do <span className="italic text-primary">trabalho</span>
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              Sou movida por aprender. Gosto de café bom, de boas conversas e
              de observar como pequenas mudanças de comportamento transformam
              produtos inteiros.
            </p>
            <p>
              Acredito que carreira é construção contínua e que as melhores
              ideias surgem do encontro entre pessoas diferentes. Estou sempre
              aberta a trocar experiências sobre produto, growth e o que vem
              depois.
            </p>
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
            Vamos <span className="italic text-primary">conversar?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Se algo aqui ressoou com você, adoraria trocar uma ideia.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:adillayukie@hotmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-90"
            >
              <Mail className="h-4 w-4" /> adillayukie@hotmail.com
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
            >
              Ver currículo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Adilla Teixeira
      </footer>
    </div>
  );
}
