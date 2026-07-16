import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="text-lg font-bold text-primary">Comet Graphics</div>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Trusted partner for promotional products, corporate gifts, apparel,
            and printing solutions since 1999. Based in Faridabad, delivering
            across India.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">Quick Links</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/products" className="hover:text-primary">Products</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">Follow</div>
          <div className="mt-3 flex gap-3 text-muted-foreground">
            <a href="#" aria-label="Facebook" className="hover:text-primary"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-primary"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-primary"><Linkedin className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-primary"><Twitter className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © 2026 Comet Graphics. All rights reserved.
      </div>
    </footer>
  );
}