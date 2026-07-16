export type ProductVariant = {
  name: string;
  price: number;
  unit?: string;
};

export type ProductCategory = {
  slug: string;
  name: string;
  image: string;
  description: string;
  variants: ProductVariant[];
};

export const CATEGORIES: ProductCategory[] = [
  {
    slug: "coffee-mug",
    name: "Coffee Mug",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80",
    description: "Ceramic and glass mugs — ideal for corporate gifting and branding.",
    variants: [
      { name: "150ml Plain Ceramic Coffee Mug", price: 75 },
      { name: "200ml Ceramic Coffee Mug", price: 90 },
      { name: "Glass Coffee Mug", price: 150 },
    ],
  },
  {
    slug: "men-t-shirt",
    name: "Men T Shirt",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
    description: "Cotton polos and half-sleeve tees in standard and custom prints.",
    variants: [
      { name: "Men Green Cotton Polo T-Shirt", price: 320 },
      { name: "Men Black Plain Polo T-Shirt", price: 350 },
      { name: "Men Plain Half Sleeves T-Shirt", price: 1100 },
    ],
  },
  {
    slug: "card-lanyard",
    name: "Card Lanyard",
    image:
      "https://images.unsplash.com/photo-1621784563330-caee0b138a00?auto=format&fit=crop&w=800&q=80",
    description: "Durable polyester ID lanyards for events, offices, and conferences.",
    variants: [{ name: "Polyester ID Card Lanyard", price: 3 }],
  },
  {
    slug: "brass-trophy",
    name: "Brass Trophy",
    image:
      "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&q=80",
    description: "Elegant brass sports cups and awards for recognition programs.",
    variants: [{ name: "Brass Sports Cup Trophy", price: 240 }],
  },
  {
    slug: "corporate-gift-box",
    name: "Corporate Gift Box",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
    description: "Curated promotional gift boxes for clients, employees, and events.",
    variants: [{ name: "Promotional Corporate Gifts Box", price: 175 }],
  },
  {
    slug: "new-year-diaries",
    name: "New Year Diaries",
    image:
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80",
    description: "Custom-branded cardboard diaries and notebooks for the new year.",
    variants: [{ name: "Cardboard New Year Diaries / Notebooks", price: 130 }],
  },
  {
    slug: "paper-carry-bag",
    name: "Paper Carry Bag",
    image:
      "https://images.unsplash.com/photo-1591208871111-d15b56ee3712?auto=format&fit=crop&w=800&q=80",
    description: "Printed paper carry bags for retail, events, and gifting.",
    variants: [{ name: "Printed Paper Carry Bags", price: 2.5 }],
  },
];

export function startingPrice(cat: ProductCategory) {
  return Math.min(...cat.variants.map((v) => v.price));
}

export function formatINR(n: number) {
  return `₹${n.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;
}