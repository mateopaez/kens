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
  return (
    <html lang="en" className={`${barlow.variable} ${dmSans.variable}`}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <header className="site-header">
          <nav className="shell header-inner" aria-label="Main navigation">
            <Link href="/" className="header-logo" aria-label="Ken’s Diner home">
              <Image
                src="/diner-photos/kens-logo.png"
                alt=""
                width={365}
                height={151}
                sizes="(max-width: 960px) 144px, (max-width: 1267px) 15vw, 190px"
                loading="eager"
              />
            </Link>
            <Link className="header-specials" href={business.specials}>Daily specials</Link>
            <div className="header-actions">
              <Link href="/#visit">Visit &amp; hours</Link>
              <Link className="header-menu" href="/menu">View menu</Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="site-footer"><div className="shell footer-inner"><span>Ken’s Diner · Schonsee, Edmonton</span><Link href="/menu">Menu</Link><a href={business.directions}>Directions ↗</a></div></footer>
      </body>
    </html>
  );
}
