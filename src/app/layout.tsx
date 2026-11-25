import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { business } from "@/data/business";
import "./globals.css";
import "./footer.css";

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.7" cy="6.4" r="1" fill="currentColor" stroke="none" /></svg>;
}

function FacebookIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.8 21.5v-8.6h2.9l.4-3.4h-3.3V7.3c0-1 .3-1.7 1.7-1.7h1.8v-3a22 22 0 0 0-2.6-.1c-2.6 0-4.4 1.6-4.4 4.5v2.5H7.4v3.4h2.9v8.6h3.5Z" /></svg>;
}

function MapReviewIcon() {
  return <svg viewBox="0 0 40 48" fill="none" aria-hidden="true"><path d="M20 45S4 29.7 4 19a16 16 0 1 1 32 0C36 29.7 20 45 20 45Z" stroke="currentColor" strokeWidth="2.8" /><path d="m20 9.8 2.4 5 5.5.8-4 3.9.9 5.5-4.8-2.6-4.8 2.6.9-5.5-4-3.9 5.5-.8 2.4-5Z" fill="currentColor" /></svg>;
}

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
        <footer className="site-footer">
          <div className="footer-info">
            <div className="shell footer-info-grid">
              <div className="footer-brand">
                <Link href="/" aria-label="Ken’s Diner home"><Image src="/diner-photos/kens-logo.png" alt="" width={365} height={151} sizes="170px" /></Link>
                <p>Homestyle cooking, the way you like it.</p>
              </div>
              <div className="footer-column"><h3>Find your way</h3><address>{business.address}</address><a className="footer-text-link" href={business.directions}>Open directions <span aria-hidden="true">↗</span></a></div>
              <div className="footer-column"><h3>When we’re open</h3><p>Mon–Fri <strong>{business.hours.weekday.time}</strong></p><p>Sat–Sun <strong>{business.hours.weekend.time}</strong></p><small>{business.hours.holiday}</small></div>
              <nav className="footer-column footer-nav" aria-label="Footer navigation"><h3>On the menu</h3><Link href="/menu">Full menu</Link><Link href={business.specials}>Daily specials</Link><Link href="/#visit">Visit &amp; hours</Link></nav>
              <div className="footer-column footer-connect"><h3>Stay in touch</h3><a className="footer-social" href={business.instagram} target="_blank" rel="noopener noreferrer"><InstagramIcon />Instagram <span aria-hidden="true">↗</span></a><a className="footer-social" href={business.facebook} target="_blank" rel="noopener noreferrer"><FacebookIcon />Facebook <span aria-hidden="true">↗</span></a></div>
            </div>
            <div className="shell footer-review-wrap"><a className="footer-review" href={business.googleReviews} target="_blank" rel="noopener noreferrer"><span className="footer-review-pin"><MapReviewIcon /></span><span className="footer-review-copy"><strong>Enjoyed your visit?</strong><span><span className="footer-review-stars" aria-hidden="true">★★★★★</span> Leave us a Google review</span></span><span className="footer-review-arrow" aria-hidden="true">↗</span></a></div>
            <div className="shell footer-bottom"><span>Ken’s Diner · Made for good company.</span><a href={business.phoneHref}>{business.phone}</a></div>
          </div>
        </footer>
      </body>
    </html>
  );
}
