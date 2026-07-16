import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Comet Graphics" },
      { name: "description", content: "Founded in 1999, Comet Graphics is a Faridabad-based supplier of promotional products, corporate gifts, and printing solutions." },
      { property: "og:title", content: "About Comet Graphics" },
      { property: "og:description", content: "25+ years supplying promotional products across India." },
    ],
  }),
  component: AboutPage,
});

const SNAPSHOT: Array<[string, string]> = [
  ["Founded", "1999"],
  ["Type", "Proprietorship"],
  ["Team Size", "Up to 10"],
  ["Location", "Faridabad, Haryana"],
  ["Registration", "GST Registered (2017)"],
];

function AboutPage() {
  return (
    <div>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Comet Graphics</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A quarter century of trusted service in promotional products, corporate gifts, and printing.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-3 md:px-8 md:py-20">
        <div className="space-y-5 md:col-span-2">
          <p className="text-base leading-relaxed text-foreground">
            Founded in 1999, Comet Graphics has built a reputation as a reliable
            trader and supplier of a wide range of promotional products —
            spanning apparel, leather goods, and desk accessories. Our
            experience across the industry allows us to serve businesses of
            every scale with confidence.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Products are offered in standard sizes as well as custom designs
            tailored to client needs, and our in-house printing services cover
            everything from concept to finish. A strong vendor network enables
            us to fulfill bulk orders without compromising on quality — each
            batch undergoes checks at every stage of procurement.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Reliable logistics partners ensure on-time delivery across India,
            whether it's a single event kit or a large corporate rollout. The
            company is led by proprietor <strong className="text-foreground">Mr. Arun Kathuria</strong>,
            whose client-centric and ethical approach has helped build a large
            and loyal customer base over the years.
          </p>
        </div>

        <Card className="h-fit">
          <CardContent className="pt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
              Company Snapshot
            </h3>
            <dl className="mt-4 divide-y divide-border">
              {SNAPSHOT.map(([k, v]) => (
                <div key={k} className="flex justify-between py-3 text-sm">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="font-medium text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}