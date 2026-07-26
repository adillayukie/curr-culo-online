import { createFileRoute, Link } from "@tanstack/react-router";
import { Noise } from "@/components/Noise";
import { motion } from "framer-motion";
import { ContactCTA } from "@/components/ContactCTA";
import boticarioCaseImg from "@/assets/boticario-case.png";
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
  Compass,
  Database,
  Layers,
  Lightbulb,
  LineChart,
  Lock,
  Search,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

export const Route = createFileRoute(
  "/cases/reformulacao-site-fundacao-grupo-boticario",
)({
  component: CaseBoticarioPage,
  head: () => ({
    meta: [
      {
        title:
          "Case: Reformulação de Site a Produto Digital — Fundação Grupo Boticário",
      },
      {
        name: "description",
        content:
          "Estudo de caso detalhado da evolução do site institucional da Fundação Grupo Boticário para uma plataforma de produto digital orientada a UX e dados.",
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

function CaseBoticarioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO HEADER */}
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
          className="relative z-10 mx-auto max-w-5xl px-6 pt-16 pb-12 md:pt-20 md:pb-16"
        >
          {/* BACK TO CASES BUTTON */}
          <motion.div variants={fadeInUp} className="mb-6">
            <Link
              to="/cases"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-xs font-semibold text-muted-foreground transition hover:bg-secondary hover:text-foreground backdrop-blur"
            >
              <ArrowLeft size={14} />
              <span>Voltar para todos os Cases</span>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Fundação Grupo Boticário · Estudo de Caso</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-serif text-3xl leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Da reformulação de um site à{" "}
            <span className="italic text-primary">evolução de um produto</span>{" "}
            digital
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-4 max-w-3xl text-base text-muted-foreground sm:text-lg leading-relaxed"
          >
            Como liderei a evolução de um canal institucional para uma plataforma
            digital mais estratégica, orientada à experiência do usuário e
            dados.
          </motion.p>
        </motion.div>
      </header>

      {/* CASE MAIN CONTAINER */}
      <main className="mx-auto max-w-5xl px-6 pt-12 pb-16">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl"
        >
          {/* FEATURED IMAGE BANNER */}
          <div className="relative w-full overflow-hidden border-b border-border max-h-[440px] bg-black">
            <img
              src={boticarioCaseImg}
              alt="Destaque da Fundação Grupo Boticário - A natureza tem um chamado para você!"
              className="w-full h-full object-cover object-left max-h-[440px]"
            />
          </div>

          {/* BANNER DE INFORMAÇÕES CHAVE */}
          <div className="relative border-b border-border bg-gradient-to-r from-primary/10 via-secondary/30 to-transparent p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="rounded-full bg-primary/15 border border-primary/30 px-3 py-1 text-xs font-semibold text-primary">
                Fundação Grupo Boticário
              </span>
              <span className="rounded-full bg-background border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                Evolução de Produto & UX
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 border-t border-border pt-6 mt-6 text-xs sm:text-sm text-muted-foreground">
              <div>
                <span className="block font-semibold text-foreground">Papel:</span>
                Product Manager / Líder de Produto
              </div>
              <div>
                <span className="block font-semibold text-foreground">Foco:</span>
                Evolução de CMS, UX, SEO & Analytics
              </div>
              <div>
                <span className="block font-semibold text-foreground">Contexto:</span>
                Nova Estratégia Institucional 2030
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 space-y-12">
            {/* CONTEXTO INICIAL */}
            <section className="rounded-2xl bg-secondary/30 p-6 md:p-8 border border-border">
              <p className="text-sm md:text-base leading-relaxed text-foreground/85">
                O site institucional da Fundação Grupo Boticário precisava evoluir para
                acompanhar a nova estratégia institucional e apresentar uma jornada
                mais clara e eficiente para diferentes usuários. Além disso, a
                plataforma de CMS tinha funcionalidades limitadas e a tecnologia
                utilizada estava defasada.
              </p>
              <p className="mt-3 text-xs text-muted-foreground italic">
                * Este case descreve minha atuação na condução do produto e foi adaptado
                para preservar informações internas e confidenciais. Alguns detalhes
                foram generalizados.
              </p>
            </section>

            {/* O PROBLEMA */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <AlertCircle size={20} />
                </div>
                <h2 className="font-serif text-3xl tracking-tight">
                  O <span className="italic text-primary">Problema</span>
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "O usuário tinha dificuldade em navegar e encontrar o que procurava.",
                  "Não tinha uma experiência personalizada para diferentes públicos.",
                  "O site não tinha uma experiência mobile amigável e responsiva.",
                  "Desalinhamento com a nova estratégia de atuação 2030 da instituição.",
                  "Tecnologia defasada que precisava atender aos requisitos atuais de governança.",
                  "Plataforma atual de CMS possuía poucas funcionalidades para gestão de conteúdo.",
                  "A plataforma não possuía estratégia estruturada de SEO.",
                  "Pela defasagem da ferramenta, os dados obtidos não eram totalmente confiáveis.",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-border bg-background p-4 text-sm text-foreground/90"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                      ✕
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* OBJETIVOS */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Target size={20} />
                </div>
                <h2 className="font-serif text-3xl tracking-tight">
                  <span className="italic text-primary">Objetivos</span> do Projeto
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Negócio */}
                <div className="rounded-2xl border border-border p-6 bg-card space-y-4">
                  <div className="flex items-center gap-2 text-lg font-bold text-foreground font-serif">
                    <LineChart size={18} className="text-primary" />
                    <h3>Objetivos de Negócio</h3>
                  </div>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    {[
                      "Reposicionar digitalmente a Fundação Grupo Boticário.",
                      "Alinhar o site à nova estratégia institucional 2030.",
                      "Melhorar a performance geral do canal.",
                      "Estruturar uma base tecnológica mais escalável.",
                      "Assegurar a governança de tecnologia do Grupo Boticário.",
                    ].map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Usuário */}
                <div className="rounded-2xl border border-border p-6 bg-card space-y-4">
                  <div className="flex items-center gap-2 text-lg font-bold text-foreground font-serif">
                    <Users size={18} className="text-primary" />
                    <h3>Objetivos do Usuário</h3>
                  </div>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    {[
                      "Melhorar a navegação fluida em diferentes dispositivos (Mobile & Desktop).",
                      "Tornar a jornada do usuário mais intuitiva e ágil.",
                      "Otimizar a hierarquia da informação para facilitar o acesso aos conteúdos.",
                      "Criar uma experiência adequada aos diferentes perfis de público.",
                    ].map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* MEU PAPEL */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Workflow size={20} />
                </div>
                <h2 className="font-serif text-3xl tracking-tight">
                  Meu <span className="italic text-primary">Papel no Projeto</span>
                </h2>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-4 text-foreground/85">
                <p className="text-sm md:text-base leading-relaxed">
                  Atuei no <strong>levantamento das necessidades</strong> ao mapear a
                  jornada do usuário, realizar pesquisa de concorrentes, mapear as
                  histórias dos usuários e alinhar expectativas com os stakeholders.
                </p>
                <p className="text-sm md:text-base leading-relaxed">
                  Para garantir que o produto fosse entregue dentro da qualidade e
                  prazos esperados, fui responsável pela{" "}
                  <strong>Gestão de Roadmap e orçamento</strong>,
                  levantamento e priorização de necessidades, ponto focal entre negócio,
                  tecnologia e fornecedores, definição e acompanhamento de requisitos,
                  além de gestão de riscos e dependências.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                  Após a entrega, acompanhei métricas pós-lançamento e busquei a evolução
                  contínua do produto.
                </p>
              </div>
            </section>

            {/* DISCOVERY & PESQUISA */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Search size={20} />
                </div>
                <h2 className="font-serif text-3xl tracking-tight">
                  Discovery & <span className="italic text-primary">Pesquisa</span>
                </h2>
              </div>

              <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  Na fase de alinhamento de objetivos de negócio e priorização foi identificado que a instituição tinha passado recentemente por uma revisão da estratégia e era necessário que ela estivesse refletida no site institucional.
                </p>
                <p>
                  Além disso, o site era o canal proprietário de maior autonomia e com capacidade de capilaridade da instituição, por isso era importante posicioná-lo como o principal de forma que englobasse as jornadas de todos os usuários.
                </p>
                <p>
                  Outro ponto relevante levantado nas entrevistas, a tecnologia utilizada deveria estar alinhada com a governança do Grupo Boticário e ter potencial para ser escalável.
                </p>
                <p>
                  Durante a fase de pesquisa e definição do problema foi identificado que os públicos que acessavam o site eram estudantes, pesquisadores, comunicadores, gestores públicos, agentes públicos da área fiscal e entusiastas da conservação do meio ambiente, todos eles com objetivos distintos. Com isso, era necessário repensar a arquitetura da informação e a forma de organizar os conteúdos.
                </p>
                <p>
                  Também identificamos que os usuários acessavam principalmente a página inicial, exploravam pouco os demais conteúdos e apresentavam baixo engajamento na plataforma. Isso nos levou a repensar a navegação e a estratégia de conteúdo para incentivar uma exploração mais ampla do site.
                </p>
                <p>
                  Outra evidência encontrada, foi que o processo de integração com o CRM dependia de etapas manuais, o que acarretava um aumento no trabalho operacional e perda de engajamento do lead.
                </p>
              </div>
            </section>

            {/* PRIORIZAÇÃO */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Layers size={20} />
                </div>
                <h2 className="font-serif text-3xl tracking-tight">
                  <span className="italic text-primary">Priorização</span>
                </h2>
              </div>

              <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  Com base nesses achados, definimos que o MVP deveria priorizar três grandes frentes: melhorar a descoberta e navegação dos conteúdos, criar uma arquitetura capaz de atender diferentes públicos e estabelecer uma base de dados e tecnologia que permitisse medir e evoluir a experiência.
                </p>
                <p>
                  Para melhorar a descoberta e navegação dos conteúdos a plataforma foi projetada com design responsivo (funcionando em diversos dispositivos como os mobile), com páginas organizadas de forma hierárquica para concentrar temas semelhantes (alinhados com a nova estratégia e facilitando a navegação), com campo de pesquisa de fácil acesso em toda a plataforma no topo da página, com a área "Especial para você" com conteúdos educativos e informativos da instituição e com a área "Biblioteca" que possui filtros para facilitar a busca.
                </p>
                <p>
                  A arquitetura foi repensada para atender as principais jornadas de usuários (pesquisadores, gestores públicos, comunicadores e agentes públicos da área fiscal). Além disso, foi realizada a integração com o Google Analytics 4 e configurado os Eventos Personalizados, permitindo mapear melhor a jornada dos usuários.
                </p>
                <p>
                  A escolha da tecnologia foi discutida com o Time de Desenvolvimento que trouxe o Wordpress como solução. Isso porque é uma plataforma amplamente utilizada no mundo, fácil de utilizar, integração facilitada com ferramentas de Data Analytics, alta flexibilidade e excelente para otimização de SEO. Com isso, o time responsável pela gestão da plataforma ganharia com autonomia para atualizar conteúdos, teria menos dependência técnica, poderia integrar com outras plataformas e estaria alinhada com a governança do Grupo Boticário.
                </p>
                <p>
                  Na segunda fase, foi realizado a integração dos formulários com a plataforma de CRM para automatizar o fluxo dos leads, que contou com a atuação conjunta do time de Martech e Desenvolvimento.
                </p>
              </div>
            </section>

            {/* DECISÕES E TRADE-OFFS */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Compass size={20} />
                </div>
                <h2 className="font-serif text-3xl tracking-tight">
                  Decisões & <span className="italic text-primary">Trade-offs</span>
                </h2>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-border p-6 bg-card space-y-2">
                  <h3 className="font-serif text-lg font-bold text-foreground flex items-center gap-2">
                    <Zap size={16} className="text-primary" />
                    Unificação de Jornadas Semelhantes
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Escolhemos não criar uma página separada para cada usuário, mas sim
                    concentrar jornadas semelhantes. Em testes com protótipos,
                    identificamos pouca ou nenhuma diferença entre perfis como
                    estudantes e pesquisadores, simplificando a navegação.
                  </p>
                </div>

                <div className="rounded-2xl border border-border p-6 bg-card space-y-2">
                  <h3 className="font-serif text-lg font-bold text-foreground flex items-center gap-2">
                    <Zap size={16} className="text-primary" />
                    Melhora da performance
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Embora melhorar a performance do canal fosse um objetivo estratégico, optamos por estabelecer primeiro uma base confiável de dados para que as otimizações futuras fossem orientadas por evidências.
                  </p>
                </div>

                <div className="rounded-2xl border border-border p-6 bg-card space-y-2">
                  <h3 className="font-serif text-lg font-bold text-foreground flex items-center gap-2">
                    <Database size={16} className="text-primary" />
                    Priorização da Infraestrutura de Dados e Analytics
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Como não tínhamos uma baseline confiável, não conseguíamos mensurar adequadamente o impacto das otimizações de performance. Por isso, priorizamos primeiro a atualização da infraestrutura de dados e analytics, para estabelecer uma baseline confiável. A partir daí, poderíamos identificar gargalos reais e definir uma estratégia de otimização baseada em evidências.
                  </p>
                </div>
              </div>
            </section>

            {/* SOLUÇÃO */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 size={20} />
                </div>
                <h2 className="font-serif text-3xl tracking-tight">
                  <span className="italic text-primary">Solução</span>
                </h2>
              </div>

              <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  O site institucional se transformou em uma plataforma de conteúdo melhorando a experiência do usuário, a organização do conteúdo, a capacidade de coleta e análise de dados e a base tecnológica da plataforma.
                </p>
                <p>
                  A experiência do usuário melhorou por conta da nova arquitetura, navegação mais intuitiva e fluída e design responsivo.
                </p>
                <p>
                  Os conteúdos foram reorganizados para facilitar a navegação, melhorar a encontrabilidade das informações e estruturar áreas temáticas, como a biblioteca.
                </p>
                <p>
                  Por conta de todas as melhoras realizadas, a nova estrutura de analytics passou a fornecer dados mais confiáveis para apoiar decisões de evolução do produto.
                </p>
                <p>
                  Com a nova tecnologia escolhida contamos com um CMS robusto, integrações e base escalável.
                </p>
              </div>
            </section>

            {/* MEU IMPACTO */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Sparkles size={20} />
                </div>
                <h2 className="font-serif text-3xl tracking-tight">
                  Meu <span className="italic text-primary">Impacto</span>
                </h2>
              </div>

              <div className="rounded-2xl border border-border p-6 md:p-8 bg-card space-y-4">
                <ul className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>
                      Traduzi a estratégia institucional em requisitos de produto, garantindo que a arquitetura da informação e as jornadas refletissem os objetivos da Fundação.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>
                      Conduzi a priorização do MVP e a definição da arquitetura da informação, equilibrando necessidades dos usuários, objetivos do negócio e viabilidade técnica.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>
                      Estruturei, junto aos times envolvidos, uma base de analytics e tecnologia que permitiu aumentar a confiabilidade dos dados e apoiar futuras decisões de produto.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* RESULTADO */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <LineChart size={20} />
                </div>
                <h2 className="font-serif text-3xl tracking-tight">
                  <span className="italic text-primary">Resultado</span>
                </h2>
              </div>

              <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  O site institucional se transformou em uma plataforma de conteúdo que reúne conhecimento adquirido pela instituição e os apresenta para seus usuários de forma intuitiva e fluída. Além disso, conta a sua atuação estratégica até 2030 com um visual mais moderno e alinhado com seus valores.
                </p>
                <p>
                  A nova arquitetura passou a incentivar a navegação entre conteúdos, enquanto a nova estrutura de analytics possibilitou acompanhar esse comportamento com maior confiabilidade.
                </p>
                <p>
                  A plataforma passou a contemplar as principais jornadas dos usuários, melhorando a navegação e o acesso aos conteúdos.
                </p>
                <p>
                  A integração entre os formulários e o CRM permitiu que os leads fossem automaticamente integrados na ferramenta, diminuindo o trabalho operacional.
                </p>
              </div>
            </section>

            {/* PRINCIPAIS APRENDIZADOS */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Lightbulb size={20} />
                </div>
                <h2 className="font-serif text-3xl tracking-tight">
                  Principais <span className="italic text-primary">Aprendizados</span>
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-border p-6 bg-card space-y-3">
                  <div className="h-8 w-8 rounded-full bg-primary/15 flex items-center justify-center font-serif font-bold text-primary text-sm">
                    01
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Atender diferentes públicos não significa criar uma jornada isolada para cada um. A identificação de comportamentos semelhantes gera experiências mais simples e escaláveis.
                  </p>
                </div>

                <div className="rounded-2xl border border-border p-6 bg-card space-y-3">
                  <div className="h-8 w-8 rounded-full bg-primary/15 flex items-center justify-center font-serif font-bold text-primary text-sm">
                    02
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Uma base confiável de analytics deve sempre anteceder iniciativas de otimização de performance e SEO.
                  </p>
                </div>

                <div className="rounded-2xl border border-border p-6 bg-card space-y-3">
                  <div className="h-8 w-8 rounded-full bg-primary/15 flex items-center justify-center font-serif font-bold text-primary text-sm">
                    03
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Produtos institucionais também devem ser tratados como produtos digitais vivos, equilibrando necessidades dos usuários, visão estratégica e viabilidade tecnológica.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </motion.article>

        {/* FOOTER CALLOUT TO CASES HUB */}
        <div className="mt-12 mb-16 text-center">
          <Link
            to="/cases"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow transition hover:bg-secondary"
          >
            <ArrowLeft size={16} />
            <span>Voltar para o repositório de Cases</span>
          </Link>
        </div>
      </main>

      <ContactCTA />

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Adilla Teixeira
      </footer>
    </div>
  );
}
