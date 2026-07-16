import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/why-us", label: "Why Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 md:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground font-bold">
            CG
          </div>
          <div className="min-w-0">
            <div className="truncate text-lg font-bold leading-tight text-primary">
              Comet Graphics
            </div>
            <div className="hidden truncate text-xs text-muted-foreground sm:block">
              Promotional Products &amp; Printing Solutions
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="mr-2 hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground data-[status=active]:text-primary"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Button
            asChild
            size="sm"
            className="bg-[#25D366] text-white hover:bg-[#1fbc5a]"
          >
            <a href="tel:+918043887468">
              <Phone className="mr-1 h-4 w-4" /> Call Now
            </a>
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>
      </div>

      <nav className="flex items-center justify-center gap-1 border-t border-border bg-background/60 px-2 py-2 lg:hidden">
        {NAV.map((n) => (
          <Link
            key={n.to}
            to={n.to}
            activeOptions={{ exact: n.to === "/" }}
            className="rounded-md px-2 py-1 text-xs font-medium text-foreground/80 hover:text-primary data-[status=active]:text-primary"
          >
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}