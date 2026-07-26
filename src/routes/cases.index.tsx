import { createFileRoute, Link } from "@tanstack/react-router";
import { Noise } from "@/components/Noise";
import { motion } from "framer-motion";
import { ContactCTA } from "@/components/ContactCTA";
import boticarioCaseImg from "@/assets/boticario-case.png";
import {
  ArrowRight,
  FolderOpen,
  Sparkles,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/cases/")({
  component: CasesHubPage,
  head: () => ({
    meta: [
      { title: "Repositório de Cases — Adilla Teixeira" },
      {
        name: "description",
        content:
          "Repositório de estudos de caso e projetos de impacto em produto digital liderados por Adilla Teixeira.",
      },
    ],
  }),
});

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

function CasesHubPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO SECTION */}
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
          className="relative z-10 mx-auto max-w-5xl px-6 py-16 text-center md:py-24"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Repositório de Cases</span>
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
          >
            Estudos de <span className="italic text-primary">Caso & Projetos</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg"
          >
            Projetos práticos onde conectei estratégia de negócio, pesquisa de usuários,
            gestão de roadmap e governança tecnológica.
          </motion.p>
        </motion.div>
      </header>

      {/* CASES GRID / LIST */}
      <main className="mx-auto max-w-5xl px-6 pt-12 space-y-8">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <FolderOpen className="h-5 w-5 text-primary" />
            <span>Todos os Cases</span>
          </h2>
          <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
            1 Projeto Disponível
          </span>
        </div>

        {/* CASE CARD 1: Grupo Boticário */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-primary/40"
        >
          {/* FEATURED COVER IMAGE BANNER */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden border-b border-border bg-black">
            <img
              src={boticarioCaseImg}
              alt="Destaque da Fundação Grupo Boticário"
              className="h-full w-full object-cover object-left transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-8 md:p-10 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-primary/15 border border-primary/30 px-3 py-1 text-xs font-semibold text-primary">
                Fundação Grupo Boticário
              </span>
              <span className="rounded-full bg-secondary border border-border px-3 py-1 text-xs font-medium text-secondary-foreground">
                Evolução de Produto & UX
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl transition-colors group-hover:text-primary">
                Da reformulação de um site à evolução de um produto digital
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
                Como liderei a evolução de um canal institucional para uma plataforma digital mais
                estratégica, orientada à experiência do usuário, automação de CRM e dados.
              </p>
            </div>

            {/* KEY TAGS & ACTION */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {[
                  "Reestruturação de CMS",
                  "SEO & GA4 Analytics",
                  "Automação de CRM",
                ].map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-xl border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                to="/cases/reformulacao-site-fundacao-grupo-boticario"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow transition-transform active:scale-95 hover:opacity-90 ml-auto"
              >
                <span>Saiba mais</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.article>

        {/* EM BREVE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl border border-dashed border-border bg-card/40 p-8 text-center space-y-3"
        >
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
            <Zap size={20} />
          </div>
          <h4 className="font-serif text-lg font-bold text-foreground">
            Novos Cases em Breve
          </h4>
          <p className="text-xs text-muted-foreground max-w-md mx-auto">
            Novos estudos de caso sobre Growth, Lançamento de Produto Gaming no Fortnite e Estratégia B2B estão sendo preparados.
          </p>
        </motion.div>
      </main>

      <ContactCTA />

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Adilla Teixeira
      </footer>
    </div>
  );
}
