import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FileText, User } from "lucide-react";

const items = [
  { to: "/" as const, icon: FileText, label: "Currículo" },
  { to: "/sobre" as const, icon: User, label: "Sobre mim" },
];

export function SiteNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const activeIndex = Math.max(
    0,
    items.findIndex((i) =>
      i.to === "/" ? location.pathname === "/" : location.pathname.startsWith(i.to),
    ),
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });

  useEffect(() => {
    const update = () => {
      const btn = btnRefs.current[activeIndex];
      const container = containerRef.current;
      if (!btn || !container) return;
      const b = btn.getBoundingClientRect();
      const c = container.getBoundingClientRect();
      setIndicatorStyle({ width: b.width, left: b.left - c.left });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [activeIndex]);

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-full max-w-sm -translate-x-1/2 px-3">
      <div
        ref={containerRef}
        className="relative flex items-center justify-between rounded-full border border-border bg-card/90 px-1 py-2 shadow-xl backdrop-blur"
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          const isActive = index === activeIndex;
          return (
            <button
              key={item.to}
              ref={(el) => {
                btnRefs.current[index] = el;
              }}
              onClick={() => navigate({ to: item.to })}
              className={`relative z-10 flex flex-1 flex-col items-center justify-center px-3 py-2 text-sm font-medium transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon size={20} />
              <span className="mt-1 hidden text-xs sm:block">{item.label}</span>
            </button>
          );
        })}
        <motion.div
          animate={indicatorStyle}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="absolute top-1 bottom-1 rounded-full bg-primary/10"
        />
      </div>
      {/* Hidden links so TanStack router knows about the routes for prefetching */}
      <div className="hidden">
        <Link to="/" />
        <Link to="/sobre" />
      </div>
    </nav>
  );
}
