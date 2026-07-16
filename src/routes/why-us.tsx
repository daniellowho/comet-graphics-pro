import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Users, ShieldCheck, HandCoins, Boxes } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us — Comet Graphics" },
      { name: "description", content: "Why businesses across India choose Comet Graphics for promotional products, corporate gifts, and printing." },
      { property: "og:title", content: "Why Choose Comet Graphics" },
      { property: "og:description", content: "25+ years of experience, ethical practices, and reliable bulk order fulfillment." },
    ],
  }),
  component: WhyUsPage,
});

const REASONS = [
  { icon: Award, title: "25+ Years of Experience", desc: "Trusted in the promotional products industry since 1999, with deep expertise across categories." },
  { icon: Users, title: "Skilled & Dedicated Team", desc: "Experienced professionals handle every stage — design, print, stitching, embellishment, and finishing." },
  { icon: ShieldCheck, title: "Ethical Business Practices", desc: "Transparent dealings, honest pricing, and client-first service that has earned long-standing loyalty." },
  { icon: HandCoins, title: "Flexible Payment Options", desc: "Multiple modes of payment for the convenience of our corporate and retail clients." },
  { icon: Boxes, title: "Bulk Order Capability", desc: "A rich vendor network lets us deliver large-quantity orders on schedule, without compromising quality." },
];

function WhyUsPage() {
  return (
    <div>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Why Choose Us</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Five reasons companies across India rely on Comet Graphics for their promotional needs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r) => (
            <Card key={r.title} className="transition hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary">
                  <r.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-primary p-10 text-center text-primary-foreground">
          <h2 className="text-2xl font-bold sm:text-3xl">Let's start your next order</h2>
          <p className="mx-auto mt-2 max-w-xl opacity-90">
            Get a personalized quote for bulk gifts, apparel, or custom printing.
          </p>
          <div className="mt-5">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}