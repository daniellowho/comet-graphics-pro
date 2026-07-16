import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, User } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";

const searchSchema = z.object({
  product: z.string().optional(),
});

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>) => searchSchema.parse(s),
  head: () => ({
    meta: [
      { title: "Contact — Comet Graphics" },
      { name: "description", content: "Get in touch with Comet Graphics in Faridabad for promotional products, corporate gifts, and printing quotes." },
      { property: "og:title", content: "Contact Comet Graphics" },
      { property: "og:description", content: "Call, WhatsApp, or send an enquiry for a custom quote." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { product } = Route.useSearch();
  return (
    <div>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Tell us what you need — we'll respond within 24 hours with pricing
            and lead times.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-5 md:px-8 md:py-20">
        <div className="md:col-span-3">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold">Send an Enquiry</h2>
              <p className="text-sm text-muted-foreground">
                Share your requirements and we'll get back with a quote.
              </p>
              <div className="mt-6">
                <ContactForm initialProduct={product} />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6 md:col-span-2">
          <Card>
            <CardContent className="space-y-4 pt-6">
              <h3 className="text-lg font-bold">Comet Graphics</h3>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Faridabad, Haryana, India</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+918043887468" className="hover:text-primary">
                  +91 80438 87468
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <User className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Proprietor: Mr. Arun Kathuria</span>
              </div>
              <div className="flex flex-col gap-2 pt-2 sm:flex-row">
                <Button asChild className="flex-1">
                  <a href="tel:+918043887468">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </a>
                </Button>
                <Button asChild className="flex-1 bg-[#25D366] text-white hover:bg-[#1fbc5a]">
                  <a href="https://wa.me/918043887468" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden pt-0">
            <div className="aspect-[4/3] w-full bg-secondary">
              <iframe
                title="Faridabad map"
                src="https://www.google.com/maps?q=Faridabad,Haryana,India&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}