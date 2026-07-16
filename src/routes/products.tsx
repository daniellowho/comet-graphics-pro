import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CATEGORIES, formatINR } from "@/lib/products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Comet Graphics" },
      { name: "description", content: "Explore our range of promotional products: mugs, apparel, lanyards, trophies, gift boxes, diaries and paper bags." },
      { property: "og:title", content: "Products — Comet Graphics" },
      { property: "og:description", content: "Browse our full promotional products catalog." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [q, setQ] = useState("");
  const [active, setActive] = useState<string>("all");

  const filtered = useMemo(() => {
    let cats = CATEGORIES;
    if (active !== "all") cats = cats.filter((c) => c.slug === active);
    if (q.trim()) {
      const s = q.toLowerCase();
      cats = cats
        .map((c) => ({
          ...c,
          variants: c.variants.filter((v) => v.name.toLowerCase().includes(s)),
        }))
        .filter(
          (c) => c.name.toLowerCase().includes(s) || c.variants.length > 0,
        );
    }
    return cats;
  }, [q, active]);

  return (
    <div>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Our Products
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Promotional products, corporate gifts, apparel, and printing
            solutions — customizable for your brand and available in bulk.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            <FilterChip active={active === "all"} onClick={() => setActive("all")}>
              All
            </FilterChip>
            {CATEGORIES.map((c) => (
              <FilterChip
                key={c.slug}
                active={active === c.slug}
                onClick={() => setActive(c.slug)}
              >
                {c.name}
              </FilterChip>
            ))}
          </div>
          <div className="w-full md:w-72">
            <Input
              placeholder="Search products..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-10 space-y-14">
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground">No products match your filters.</p>
          )}
          {filtered.map((cat) => (
            <div key={cat.slug}>
              <div className="mb-4 flex items-end justify-between">
                <h2 className="text-2xl font-bold">{cat.name}</h2>
                <span className="text-sm text-muted-foreground">
                  {cat.variants.length} option{cat.variants.length !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cat.variants.map((v) => (
                  <Card
                    key={v.name}
                    className="group overflow-hidden pt-0 transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-secondary">
                      <img
                        src={cat.image}
                        alt={v.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="space-y-3">
                      <h3 className="font-semibold leading-snug">{v.name}</h3>
                      <div className="text-sm text-muted-foreground">
                        Starting at{" "}
                        <span className="font-semibold text-primary">
                          {formatINR(v.price)}
                        </span>
                        /piece
                      </div>
                      <Button asChild size="sm" className="w-full">
                        <Link to="/contact" search={{ product: v.name }}>
                          Enquire Now
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "rounded-full border px-3 py-1.5 text-sm font-medium transition " +
        (active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background text-foreground hover:border-primary/40 hover:text-primary")
      }
    >
      {children}
    </button>
  );
}