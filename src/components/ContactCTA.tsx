import { Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Noise } from "@/components/Noise";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border">
      <div aria-hidden className="absolute inset-0 bg-background" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_560px_at_50%_200px,#fdba74,transparent)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Noise patternRefreshInterval={2} patternAlpha={18} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center"
      >
        <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
          Vamos <span className="italic text-primary">conversar?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground text-base sm:text-lg">
          Aberta para conversas sobre Product Management, Go-to-Market e estratégias de
          crescimento.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:adillayukie@hotmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-90 shadow-md"
          >
            <Mail className="h-4 w-4" /> adillayukie@hotmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/adillayukie"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:bg-secondary shadow-sm"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
