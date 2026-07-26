import { createFileRoute, Link } from "@tanstack/react-router";
import adillaPhoto from "@/assets/adilla.png";
import { Mail, Linkedin, MapPin, ArrowUpRight, Sparkles, ArrowRight } from "lucide-react";
import { Noise } from "@/components/Noise";
import { motion } from "framer-motion";
import { ContactCTA } from "@/components/ContactCTA";

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
    role: "Analista de produto digital",
    company: "Grupo Boticário",
    period: "06/2022 — 11/2025",
    bullets: [
      "Liderei iniciativas de evolução de produtos digitais, conectando objetivos estratégicos, necessidades dos usuários e áreas de negócio para garantir entregas de alto impacto.",
      "Gerenciei o roadmap de iniciativas e orçamento de R$ 200 mil, priorizando entregas com base em valor para o usuário, viabilidade e objetivos organizacionais.",
      "Atuei como ponte entre Produto, Martech, Tecnologia e parceiros externos, promovendo alinhamento entre stakeholders durante todo o ciclo de desenvolvimento.",
      "Conduzi a definição de indicadores de sucesso e acompanhei métricas de desempenho dos produtos, utilizando dados para direcionar melhorias contínuas e apoiar decisões de produto.",
      "Coordenei o lançamento do mapa \"Guardiões do Futuro\" no Fortnite, articulando diferentes áreas envolvidas e alcançando um resultado três vezes superior à média de jogadores de benchmarking.",
      "Colaborei na definição da experiência do usuário e da estratégia do produto, garantindo alinhamento entre necessidades do público, objetivos de negócio e execução técnica.",
    ],
  },
  {
    role: "Product Manager (PM)",
    company: "Meu Pet Club | Grupo SVC",
    period: "10/2020 — 06/2022",
    bullets: [
      "Conduzi a estratégia e evolução de produtos digitais B2B e B2C, equilibrando necessidades dos clientes, objetivos do negócio e oportunidades de mercado.",
      "Realizei discovery contínuo com usuários e análise de comportamento para identificar oportunidades de melhoria e apoiar a definição de prioridades do produto.",
      "Trabalhei em conjunto com equipes multidisciplinares para transformar necessidades de negócio em iniciativas de produto, acompanhando sua implementação e evolução.",
      "Estruturei indicadores de desempenho e acompanhei métricas de aquisição, conversão e retenção para orientar decisões e evolução contínua do produto.",
      "Identifiquei oportunidades de crescimento por meio da otimização da jornada do usuário, resultando em aumento de 346% no tráfego orgânico e redução de 20% no CAC B2B.",
      "Apoiei o alinhamento entre Produto, Marketing e Comercial, garantindo consistência na entrega de valor ao cliente e suporte às estratégias de crescimento.",
    ],
  },
  {
    role: "Coordenadora de Comunicação e Marketing",
    company: "Grupo SVC",
    period: "09/2019 — 10/2020",
    bullets: [
      "Liderei o reposicionamento estratégico do Meu Pet Club, definindo ICP, personas e narrativa de valor orientada a diferenciação no mercado.",
      "Estruturei o funil de geração de demanda (Inbound + Outbound), conectando marketing e vendas para aumentar eficiência comercial e conversão.",
      "Desenvolvi fluxos de nutrição e automação focados em progressão de leads no funil, melhorando a qualidade das oportunidades para SDRs.",
    ],
  },
  {
    role: "Analista Pl. de marketing",
    company: "LS Sistema de Ensino",
    period: "12/2017 — 08/2019",
    bullets: [
      "Gestão de redes sociais e canais digitais.",
      "Desenvolvimento de estratégias de conteúdo para campanhas sazonais e AON.",
      "Mensuração e análise do desempenho de marketing digital;",
      "Criação de conteúdo, monitorar, realizar o atendimento e relatórios de Social Media;",
      "Criar e publicar notícias de assuntos pertinentes às áreas da empresa.",
    ],
  },
  {
    role: "Analista de marketing",
    company: "Weebo Marketing Digital",
    period: "02/2016 — 12/2017",
    bullets: [
      "Desenvolvi peças gráficas e conteúdos digitais para diferentes clientes e segmentos, apoiando estratégias de comunicação e posicionamento de marca.",
      "Atuei de forma integrada com múltiplas áreas e stakeholders, garantindo alinhamento entre demandas, identidade visual e objetivos de comunicação.",
      "Planejei ações de redes sociais e produção de conteúdo com foco em presença digital, relacionamento e fortalecimento de marca.",
    ],
  },
  {
    role: "Analista de marketing",
    company: "HT Moto Turismo",
    period: "01/2015 — 01/2016",
    bullets: [
      "Desenvolvi materiais de comunicação interna e externa alinhados à identidade da marca e às necessidades institucionais da empresa.",
      "Realizei interface com fornecedores para alinhamento de prazos, orçamento e qualidade de entregas relacionadas a materiais e campanhas de comunicação.",
      "Atuei na gestão de redes sociais e atualização do site institucional, contribuindo para fortalecimento da presença digital da marca.",
    ],
  },
  {
    role: "Assistente de marketing",
    company: "Rede Transamérica",
    period: "2010 — 2012",
    bullets: [
      "Gerenciei redes sociais e canais digitais, desenvolvendo conteúdos alinhados ao posicionamento da marca e às estratégias de comunicação institucional.",
      "Realizei atualização e manutenção do site institucional, priorizando experiência e alinhamento da comunicação.",
    ],
  },
];

const skills = [
  "Estratégia de produto",
  "Gestão de Roadmap",
  "Priorização de Backlog",
  "Discovery e validação",
  "Gestão de Stakeholders",
  "Produtos Digitais",
  "Análise de Dados",
  "Metodologias Ágeis (Scrum / Kanban)",
  "Definição de KPIs",
  "Comunicação Negócio & Tecnologia",
  "UX e Jornada do Usuário",
];

const highlights = [
  { value: "3x", label: "performance em lançamento digital (gaming)" },
  { value: "+346%", label: "crescimento de tráfego orgânico" },
  { value: "-20%", label: "redução de CAC B2B" },
  { value: "B2B + B2C", label: "estratégias de GTM end-to-end" },
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

function Resume() {
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
          className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.2fr_1fr] md:py-24"
        >
          <div className="flex flex-col justify-center">
            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl"
            >
              Adilla
              <br />
              <span className="italic text-primary">Teixeira</span>
            </motion.h1>

            <motion.span
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Product · Growth · Go-to-Market
            </motion.span>

            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-6 max-w-xl text-lg text-muted-foreground"
            >
              Conecto estratégia, produto e comunicação para transformar
              complexidade em algo que as pessoas conseguem usar de verdade.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-8 flex flex-wrap gap-3"
            >
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
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
              >
                Sobre mim <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.ul
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground"
            >
              <li className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" /> adillayukie@hotmail.com
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> São Paulo, SP
              </li>
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative mx-auto flex items-end justify-center md:mx-0"
          >
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
          </motion.div>
        </motion.div>
      </header>

      {/* HIGHLIGHTS */}
      <section className="border-b border-border bg-card">
        <motion.div
          id="big-numbers"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4"
        >
          {highlights.map((h) => (
            <motion.div
              key={h.label}
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="font-serif text-4xl text-primary">{h.value}</div>
              <p className="mt-2 text-sm leading-snug text-muted-foreground">{h.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ABOUT SUMMARY */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-6xl px-6 py-20"
      >
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
      </motion.section>

      {/* SKILLS */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-10 font-serif text-3xl tracking-tight md:text-4xl"
          >
            Principais competências
          </motion.h2>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-wrap gap-3"
          >
            {skills.map((s) => (
              <motion.span
                key={s}
                variants={fadeInUp}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground"
              >
                {s}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 font-serif text-3xl tracking-tight md:text-4xl"
        >
          Experiência
        </motion.h2>
        <div className="space-y-10">
          {experiences.map((e, index) => (
            <motion.article
              key={e.role + e.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.05 }}
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
            </motion.article>
          ))}
        </div>
      </section>

      {/* EDUCATION + LANG + CERTS */}
      <section className="border-t border-border bg-card">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-3"
        >
          <motion.div variants={fadeInUp} transition={{ duration: 0.6, ease: "easeOut" }}>
            <h3 className="mb-5 font-serif text-2xl">Formação</h3>
            <ul className="space-y-4 text-sm text-foreground/85">
              <li>
                <p className="font-medium">MBA em Marketing</p>
                <p className="text-muted-foreground">ESPM (completo) · 2020–2022</p>
              </li>
              <li>
                <p className="font-medium">Bacharelado em Design Digital</p>
                <p className="text-muted-foreground">PUC-PR (completo) · 2012–2016</p>
              </li>
              <li>
                <p className="font-medium">Bacharelado em Sistemas de Informação</p>
                <p className="text-muted-foreground">Opet (incompleto) · 2011–2013</p>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={fadeInUp} transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}>
            <h3 className="mb-5 font-serif text-2xl">Idiomas</h3>
            <ul className="space-y-2 text-sm text-foreground/85">
              <li>Português — Nativo</li>
              <li>Inglês — Intermediário</li>
            </ul>
          </motion.div>
          <motion.div variants={fadeInUp} transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}>
            <h3 className="mb-5 font-serif text-2xl">Cursos & Certificações</h3>
            <ul className="space-y-3 text-sm text-foreground/85">
              <li>
                <p className="font-medium">BPD - Branding de perto</p>
                <p className="text-muted-foreground text-xs">Galileu Nogueira · 2024</p>
              </li>
              <li>
                <p className="font-medium">Product Management</p>
                <p className="text-muted-foreground text-xs">PM3 · 2023</p>
              </li>
              <li>
                <p className="font-medium">Customer Experience</p>
                <p className="text-muted-foreground text-xs">Sandbox Escola de Estratégia · 2021</p>
              </li>
              <li>
                <p className="font-medium">Certificação Runrun.it</p>
                <p className="text-muted-foreground text-xs">Runrun.it · 2020</p>
              </li>
              <li>
                <p className="font-medium">Social Media Intelligence & Google Data Studio</p>
                <p className="text-muted-foreground text-xs">IBPAD · 2020</p>
              </li>
              <li>
                <p className="font-medium">Marketing de Conteúdo & Gestão de Redes Sociais</p>
                <p className="text-muted-foreground text-xs">Ion Interactive · 2018–2020</p>
              </li>
              <li>
                <p className="font-medium">Inbound Marketing</p>
                <p className="text-muted-foreground text-xs">HubSpot Academy · 2017</p>
              </li>
              <li>
                <p className="font-medium">Adobe Photoshop | Illustrator | Indesign</p>
                <p className="text-muted-foreground text-xs">ENG DTP & Multimídia · 2015</p>
              </li>
              <li>
                <p className="font-medium">Curso de E-mail Marketing</p>
                <p className="text-muted-foreground text-xs">Creative Bizz · 2015</p>
              </li>
              <li>
                <p className="font-medium">HTML, CSS, JavaScript, PHP, ASP, MySQL</p>
                <p className="text-muted-foreground text-xs">Microcamp · 2008</p>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <ContactCTA />

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Adilla Teixeira
      </footer>
    </div>
  );
}
