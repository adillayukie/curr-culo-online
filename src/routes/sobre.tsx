import { createFileRoute, Link } from "@tanstack/react-router";
import adillaPhoto from "@/assets/adilla.jpeg";
import {
  Mail,
  ArrowRight,
  Search,
  Sparkles,
  Layers,
  Wind,
} from "lucide-react";
import { motion } from "framer-motion";
import { Noise } from "@/components/Noise";

export const Route = createFileRoute("/sobre")({
  component: SobreMim,
  head: () => ({
    meta: [
      { title: "Sobre mim — Adilla Teixeira" },
      {
        name: "description",
        content:
          "Conheça Adi: design, tecnologia e comunicação como ferramentas para construir produtos que fazem sentido para as pessoas.",
      },
      { property: "og:title", content: "Sobre mim — Adilla Teixeira" },
      {
        property: "og:description",
        content:
          "Design, tecnologia e comunicação como ferramentas para construir produtos que fazem sentido.",
      },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
});

const ways = [
  {
    icon: Search,
    title: "Questiono complexidade para otimizá-la",
    text: "Não para complicar mais, mas para encontrar o caminho mais simples.",
  },
  {
    icon: Sparkles,
    title: "Aprendo rápido temas novos",
    text: "Because começo com curiosidade, não com medo.",
  },
  {
    icon: Layers,
    title: "Gosto de estruturar o que está solto",
    text: "Navego a complexidade para que as pessoas ao meu redor não precisem.",
  },
  {
    icon: Wind,
    title: "Próspero em ambientes em transformação",
    text: "Incerteza, pra mim, é onde surgem as melhores oportunidades.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function SobreMim() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <header className="relative overflow-hidden border-b border-border">
        <div aria-hidden className="absolute inset-0 bg-background" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_560px_at_50%_200px,#fdba74,transparent)]"
        />
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <Noise patternRefreshInterval={2} patternAlpha={18} />
        </div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1fr_1.2fr] md:py-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative order-2 mx-auto md:order-1 md:mx-0"
          >
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
          </motion.div>
          
          <div className="order-1 flex flex-col justify-center md:order-2">
            <motion.span
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground backdrop-blur"
            >
              Sobre mim
            </motion.span>
            
            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl"
            >
              Prazer, sou <span className="italic text-primary">Adi</span> — e
              sim, pode me chamar assim mesmo. :)
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-6 text-lg text-muted-foreground"
            >
              Minha trajetória sempre misturou comunicação, tecnologia e
              criatividade. Tudo começou quando, aos 14 anos, aprendi HTML, CSS
              e Photoshop para deixar um blog com a minha cara. Sem perceber,
              aquilo já era meu primeiro projeto de produto: construir algo que
              as pessoas realmente quisessem usar.
            </motion.p>
          </div>
        </motion.div>
      </header>

      {/* STORY */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-3xl px-6 py-20"
      >
        <h2 className="mb-10 font-serif text-3xl tracking-tight md:text-4xl">
          Formação & <span className="italic text-primary">visão</span>
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            Sou formada em Design Digital (PUC-PR), tenho background técnico em
            Informática e MBA em Marketing (ESPM). Mas o que mais gosto nessa
            combinação é a capacidade de conectar esses mundos: vejo produto
            como design, tecnologia como ferramenta de estratégia, e
            comunicação como a ponte entre o que é complexo e o que faz sentido
            para as pessoas.
          </p>
        </div>
      </motion.section>

      {/* WAYS OF WORKING */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12 font-serif text-3xl tracking-tight md:text-4xl"
          >
            No dia a dia, me reconheço em{" "}
            <span className="italic text-primary">
              quatro jeitos de trabalhar
            </span>
          </motion.h2>
          
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2"
          >
            {ways.map((w) => (
              <motion.div
                key={w.title}
                variants={fadeInUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <w.icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-xl">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {w.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OFF DUTY */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Fora do <span className="italic text-primary">trabalho</span>
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              Nasci em São Paulo, morei muitos anos em Curitiba, e hoje estou
              de volta a SP. Quando não estou trabalhando, estou em galerias,
              cinemas ou cafés. Gosto de conversar sobre design, arquitetura,
              investimentos e produção audiovisual — acredito que tudo é
              narrativa, e que boas narrativas movem mercados (e pessoas).
            </p>
            <p>
              E claro: parte importante da minha rotina é a{" "}
              <span className="italic text-primary">Amora</span>, minha
              cachorra e principal aluna nas minhas tentativas de ensinar
              truques novos. Ela domina o básico, estamos evoluindo para o
              avançado.
            </p>
          </div>
        </div>
      </motion.section>

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-4xl px-6 py-24 text-center"
        >
          <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
            Vamos <span className="italic text-primary">conversar?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Hoje busco oportunidades em fintech ou SaaS em crescimento, onde eu
            possa aprofundar expertise operacional, trabalhar perto de times de
            produto e contribuir com estratégias que gerem impacto real. Se
            quiser trocar uma ideia, pode me chamar.
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
        </motion.div>
      </section>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Adilla Teixeira
      </footer>
    </div>
  );
}
