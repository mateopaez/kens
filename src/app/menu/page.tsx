import type { Metadata } from "next";
import Image from "next/image";
import { business } from "@/data/business";

export const metadata: Metadata = { title: "Menu" };

const dinerPages = [
  { src: "/references/diner-page-1.jpg", width: 2550, height: 3300, alt: "Diner menu — soups, salads, sandwiches, chicken, and beverages" },
  { src: "/references/diner-page-2.jpg", width: 2550, height: 3300, alt: "Diner menu — burgers, hot dogs, sides, and desserts" },
  { src: "/references/diner-page-3.jpg", width: 2550, height: 3300, alt: "Diner menu — all day breakfast, extras, and beverages" },
  { src: "/references/diner-page-4.jpg", width: 1700, height: 2200, alt: "Ken’s Diner kids’ menu — brunch, lunch, and dinner" },
];

function MenuSheet({ src, width, height, alt }: { src: string; width: number; height: number; alt: string }) {
  return <figure className="menu-sheet"><a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size image: ${alt}`}><Image src={src} width={width} height={height} alt={alt} sizes="(max-width: 900px) 100vw, 880px" unoptimized /></a><figcaption>Tap the page to open the full-size image in a new tab.</figcaption></figure>;
}

export default function MenuPage() {
  return <main id="main" className="menu-main"><div className="menu-masthead"><div className="shell"><h1>Menu</h1></div></div><nav className="menu-jumps shell" aria-label="Menu sections"><a href="#early-bird">Early Bird</a><a href="#diner">Diner Menu</a><a href="#brunch">Weekend Brunch</a><a href="#desserts">Desserts & drinks</a></nav><div className="menu-column"><section id="early-bird" className="menu-section"><div className="menu-section-heading"><h2>Early Bird Breakfast</h2><p>{business.earlyBirdService.days} · {business.earlyBirdService.time} · {business.earlyBirdService.restriction}</p></div><MenuSheet src="/references/early-bird.png" width={773} height={2000} alt="Early Bird Breakfast menu — weekday dine-in breakfast offerings" /></section><section id="diner" className="menu-section"><div className="menu-section-heading"><h2>Diner Menu</h2><p>Original menu pages, in the order shown by Ken’s.</p></div>{dinerPages.map((page) => <MenuSheet key={page.src} {...page} />)}</section><section id="brunch" className="menu-section"><div className="menu-section-heading"><h2>Weekend Brunch</h2><p>{business.brunchService.days} · {business.brunchService.time}</p></div><MenuSheet src="/references/weekend-brunch.jpg" width={1650} height={3300} alt="Weekend Brunch menu — brunch specialties, traditional favourites, and extras" /></section><section id="desserts" className="menu-section"><div className="menu-section-heading"><h2>Desserts & drinks</h2><p>The second sheet of Ken’s weekend brunch gallery.</p></div><MenuSheet src="/references/desserts.jpg" width={1650} height={3300} alt="Desserts and beverages menu — pie, ice cream, milkshakes, coffee, and more" /></section></div></main>;
}
