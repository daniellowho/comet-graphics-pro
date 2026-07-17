import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  Truck,
  Package,
  CalendarClock,
  ShieldCheck,
  Users,
  HandCoins,
  Boxes,
  Star,
} from "lucide-react";
import { CATEGORIES, formatINR, startingPrice } from "@/lib/products";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const featured = CATEGORIES.slice(0, 6);
  return (
    <div className="scroll-smooth">
      {/* HERO */}
      <section className="relative overflow-hidden mesh-gradient-hero">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent/20 blur-[100px]"
          />
          <motion.div
            animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-primary/30 blur-[90px]"
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
            >
              <ShieldCheck className="h-3.5 w-3.5" /> Trusted since 1999
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Your Trusted Partner for{" "}
              <span className="text-primary">Promotional Products</span> Since 1999
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Corporate gifts, apparel, and printing solutions crafted with
              quality, delivered on time, across India for over 25 years.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button asChild size="lg" className="animate-pulse-glow">
                <Link to="/products">
                  Browse Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80"
              alt="Branded coffee mug"
              className="col-span-1 row-span-2 h-full w-full rounded-2xl object-cover shadow-lg animate-float"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&q=80"
              alt="Brass trophy"
              className="h-40 w-full rounded-2xl object-cover shadow-lg sm:h-52 animate-float"
              style={{ animationDelay: "1s" }}
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80"
              alt="Branded polo t-shirt"
              className="h-40 w-full rounded-2xl object-cover shadow-lg sm:h-52 animate-float"
              style={{ animationDelay: "2s" }}
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Trust bar */}
        <div className="border-y border-border bg-background/70">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 text-sm md:grid-cols-4 md:px-8">
            {[
              { icon: CalendarClock, label: "25+ Years in Business" },
              { icon: Boxes, label: "10+ Product Categories" },
              { icon: Truck, label: "Pan-India Delivery" },
              { icon: Package, label: "Bulk Order Specialists" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="font-medium text-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Products
            </h2>
            <p className="mt-2 text-muted-foreground">
              Popular picks from our promotional catalog.
            </p>
          </div>
          <Link
            to="/products"
            className="hidden text-sm font-semibold text-primary hover:underline sm:inline-flex"
          >
            View All Products →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((cat) => (
            <Card
              key={cat.slug}
              className="group overflow-hidden pt-0 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <CardContent className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-foreground">{cat.name}</h3>
                  <span className="text-sm font-semibold text-primary">
                    from {formatINR(startingPrice(cat))}
                  </span>
                </div>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {cat.description}
                </p>
                <Button asChild size="sm" className="w-full">
                  <Link to="/contact" search={{ product: cat.name }}>
                    Enquire Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* QUALITY SECTION */}
      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Committed to Quality at Every Step
            </h2>
            <p className="mt-3 text-muted-foreground">
              Full printing services — designing, stitching, embellishment, and
              finishing — backed by a dedicated quality control team. Every
              product is tested against three critical parameters.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { title: "Shrinkage Testing", desc: "Fabric stability verified before dispatch." },
              { title: "Colour Fastness", desc: "Prints and dyes resist fading and washing." },
              { title: "Light Fastness", desc: "Colours hold up under sun and display lighting." },
            ].map((q) => (
              <Card key={q.title} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-accent/20 text-accent-foreground">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold">{q.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{q.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose Comet Graphics
          </h2>
          <p className="mt-3 text-muted-foreground">
            A partner businesses across India rely on for quality, consistency,
            and trust.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Award, title: "25+ Years of Experience", desc: "Trusted in the promotional products industry since 1999." },
            { icon: Users, title: "Skilled & Dedicated Team", desc: "Experienced professionals across design, print, and finishing." },
            { icon: ShieldCheck, title: "Ethical Business Practices", desc: "Transparent, client-first dealings built on trust." },
            { icon: HandCoins, title: "Flexible Payment Options", desc: "Multiple payment modes for customer convenience." },
          ].map((f) => (
            <Card key={f.title}>
              <CardContent className="pt-6">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link to="/why-us">See all reasons →</Link>
          </Button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm shadow-sm">
            <div className="flex text-accent">
              {[0, 1, 2, 3].map((i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
              <Star className="h-4 w-4" />
            </div>
            <span className="font-medium">2.5/5 based on customer reviews on IndiaMART</span>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              { quote: "Quality of the printed mugs was excellent and delivery was on time for our annual event.", author: "Sample Review — replace with real client feedback" },
              { quote: "Reliable partner for bulk corporate gifting. Handled our custom design requirements smoothly.", author: "Sample Review — replace with real client feedback" },
            ].map((t) => (
              <Card key={t.author} className="text-left">
                <CardContent className="pt-6">
                  <p className="text-foreground">“{t.quote}”</p>
                  <p className="mt-4 text-xs uppercase tracking-wide text-muted-foreground">{t.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="rounded-3xl bg-primary px-8 py-12 text-center text-primary-foreground shadow-lg md:px-16 md:py-16">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to place a bulk order?</h2>
          <p className="mx-auto mt-3 max-w-xl opacity-90">
            Tell us what you need — quantity, customization, timeline — and we'll
            get back within 24 hours with a tailored quote.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Get a Quote</Link>
            </Button>
            <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#1fbc5a]">
              <a href="https://wa.me/918043887468" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
