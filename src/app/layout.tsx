import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { business } from "@/data/business";
import "./globals.css";

const barlow = localFont({ src: "../fonts/barlow-condensed-bold.ttf", variable: "--font-display", display: "swap" });
const dmSans = localFont({ src: [{ path: "../fonts/dm-sans-regular.ttf", weight: "400" }, { path: "../fonts/dm-sans-bold.ttf", weight: "700" }], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Ken’s Diner | Schonsee, Edmonton", template: "%s | Ken’s Diner" },
  description: "Homestyle cooking at Ken’s Diner in Schonsee, Edmonton. Explore the diner menu, weekend brunch, hours, and directions.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={`${barlow.variable} ${dmSans.variable}`}><body><a className="skip-link" href="#main">Skip to content</a><header className="site-header"><div className="shell header-inner"><Link href="/" className="logo-link" aria-label="Ken’s Diner home"><span className="logo-panel"><Image src="/diner-photos/kens-logo.png" alt="" width={365} height={151} priority /></span></Link><nav aria-label="Main navigation"><Link href="/menu">Menu</Link><a href={business.specials}>Daily specials</a><Link href="/#visit">Visit</Link></nav></div></header>{children}<footer className="site-footer"><div className="shell footer-inner"><span>Ken’s Diner · Schonsee, Edmonton</span><Link href="/menu">Menu</Link><a href={business.directions}>Directions ↗</a></div></footer></body></html>;
}
