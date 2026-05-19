import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-serif text-lg tracking-tight">
          Adilla <span className="italic text-primary">Teixeira</span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-foreground font-medium" }}
            className="text-muted-foreground transition hover:text-foreground"
          >
            Currículo
          </Link>
          <Link
            to="/sobre"
            activeProps={{ className: "text-foreground font-medium" }}
            className="text-muted-foreground transition hover:text-foreground"
          >
            Sobre mim
          </Link>
        </div>
      </div>
    </nav>
  );
}
