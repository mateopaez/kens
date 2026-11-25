import Image from "next/image";
import Link from "next/link";
import { connection } from "next/server";
import { Suspense } from "react";
import { business } from "@/data/business";
import { dailySpecials, type DailySpecial } from "@/data/daily-specials";
import { NewsletterSignup } from "./newsletter-signup";
import "./home-hero.css";
import "./visit.css";

const specialDateLabel = (date: string) => new Intl.DateTimeFormat("en-CA", {
  timeZone: "America/Edmonton", weekday: "long", month: "long", day: "numeric", year: "numeric",
}).format(new Date(`${date}T12:00:00Z`));

function MealPreview({ special, kind }: { special: DailySpecial; kind: "lunch" | "dinner" }) {
  const isLunch = kind === "lunch";
  const meal = special[kind];
  if (!meal) return null;

  return <article className={`home-special-meal home-special-${kind}`}>
    <div className="home-special-meal-head"><div><span>{isLunch ? "11 am–2 pm" : "4–6 pm"}</span><h3>{isLunch ? "Lunch" : "Dinner"}</h3></div><span className="home-special-price">{isLunch ? special.lunch!.price : special.dinner!.fullPrice}</span></div>
    <div className="home-special-meal-body">
      <p><span>{isLunch ? "Your pick" : "Main event"}</span><strong>{isLunch ? special.lunch!.mains.join(" or ") : special.dinner!.main}</strong></p>
      <p><span>{isLunch ? "Soup or side" : "Soup or salad"}</span><strong>{isLunch ? special.lunch!.sides.join(" or ") : special.dinner!.starters.join(" or ")}</strong></p>
      <p><span>To finish</span><strong>{meal.dessert}</strong></p>
    </div>
    <div className="home-special-meal-foot">{isLunch ? "Includes your choice of soup, salad, or fries" : `Small portion ${special.dinner!.smallPrice}`}</div>
  </article>;
}

async function HomeSpecials() {
  await connection();
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Edmonton", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
  const special = dailySpecials.find((item) => item.date === today);
  const next = dailySpecials.filter((item) => item.date > today).sort((a, b) => a.date.localeCompare(b.date))[0];

  if (!special) return <section id="specials" className="home-specials" aria-labelledby="home-specials-title"><div className="shell home-specials-empty"><span className="home-special-kicker">Ken’s Diner specials</span><h2 id="home-specials-title">Something good is coming.</h2><p>{next ? `Next posted special: ${specialDateLabel(next.date)}.` : "Call us for today’s lunch and dinner specials."}</p><div className="home-special-actions"><Link href={business.specials}>See the specials board <span aria-hidden="true">↗</span></Link><a href={business.phoneHref}>Call Ken’s <span aria-hidden="true">↗</span></a></div></div></section>;

  return <section id="specials" className="home-specials" aria-labelledby="home-specials-title"><div className="shell home-specials-inner">
    <div className="home-special-intro"><div><span className="home-special-kicker">Fresh from the kitchen · {specialDateLabel(special.date)}</span><h2 id="home-specials-title">Today’s <em>specials</em></h2></div><p>Two good reasons to pull up a booth. Specials are subject to change.</p></div>
    <div className="home-special-grid">{special.lunch && <MealPreview special={special} kind="lunch" />}{special.dinner && <MealPreview special={special} kind="dinner" />}</div>
    <div className="home-special-bottom"><span>Homestyle cooking, served daily.</span><div className="home-special-actions"><a href={business.phoneHref}>Call {business.phone} <span aria-hidden="true">↗</span></a><Link href={business.specials}>See the full specials board <span aria-hidden="true">↗</span></Link></div></div>
  </div></section>;
}

export default function Home() {
  return (
    <main id="main">
      <section className="diner-hero" aria-labelledby="hero-title">
        <div className="diner-hero-image">
          <Image src="/diner-photos/about-us.jpg" alt="Guests sharing burgers, fries, and milkshakes at Ken’s Diner" fill priority sizes="(max-width: 760px) 100vw, 60vw" />
        </div>
        <div className="shell diner-hero-inner">
          <div className="diner-hero-copy">
            <span className="diner-hero-kicker">Your neighbourhood diner in Schonsee</span>
            <h1 id="hero-title">Meet me<br />at <span>Ken’s.</span></h1>
            <p>Big breakfasts, diner classics, and a booth with your name on it. Come hungry, stay awhile.</p>
            <div className="diner-hero-actions">
              <Link className="diner-hero-primary" href={business.specials}>See the specials <span aria-hidden="true">↗</span></Link>
              <Link className="diner-hero-secondary" href="/menu">Explore the menu <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="diner-hero-location">
              <span>6104 Schonsee Way NW, Edmonton</span>
              <a href={business.directions}>Get directions <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
        <div className="diner-hero-photo-note" aria-hidden="true">Good food. Better together.</div>
      </section>
      <section className="hours-strip" aria-label="Opening hours"><div className="shell hours-inner"><div><strong>Monday–Friday</strong><span>{business.hours.weekday.time}</span></div><div><strong>Saturday–Sunday</strong><span>{business.hours.weekend.time}</span></div><div><strong>Weekend brunch</strong><span>{business.brunchService.time}</span></div><p>{business.hours.holiday}</p></div></section>
      <div className="checker-divider" aria-hidden="true" />
      <section className="explore shell" aria-labelledby="explore-title"><div className="explore-image"><Image src="/diner-photos/coffee-at-the-counter.webp" alt="Two guests with coffee and breakfast at Ken’s Diner" fill sizes="(max-width: 800px) 100vw, 48vw" /></div><div className="explore-content"><h2 id="explore-title">At the diner</h2><p>Breakfast, lunch, dinner, and a little extra time for brunch on weekends.</p><div className="menu-links"><Link href="/menu#early-bird"><span><strong>Early Bird Breakfast</strong><small>Monday–Friday · 8 am–11 am · Dine-in only</small></span><b aria-hidden="true">↗</b></Link><Link href="/menu#diner"><span><strong>Diner Menu</strong><small>All-day favourites</small></span><b aria-hidden="true">↗</b></Link><Link href="/menu#brunch"><span><strong>Weekend Brunch</strong><small>Saturday–Sunday · 9:30 am–2 pm</small></span><b aria-hidden="true">↗</b></Link></div></div></section>
      <Suspense fallback={<section id="specials" className="home-specials home-specials-loading"><div className="shell">Checking today’s specials…</div></section>}><HomeSpecials /></Suspense>
      <section id="visit" className="visit" aria-labelledby="visit-title">
        <div className="visit-checker" aria-hidden="true" />
        <div className="shell visit-layout">
          <div className="visit-intro">
            <span className="visit-kicker">Find us in Schonsee</span>
            <h2 id="visit-title">Pull up a chair!</h2>
            <p>Breakfast, lunch, dinner, and good company. We’d love to see you at Ken’s.</p>
            <address>{business.address}</address>
            <div className="visit-actions">
              <a className="visit-primary" href={business.directions} target="_blank" rel="noopener noreferrer">Get directions <span aria-hidden="true">↗</span></a>
              <a className="visit-secondary" href={business.phoneHref}>Call ahead <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="visit-map-card">
            <div className="visit-map-header"><span>Find us on the map</span><span>Schonsee · Edmonton</span></div>
            <div className="visit-map-frame">
              <iframe title="Google map showing Ken’s Diner at 6104 Schonsee Way NW, Edmonton" src="https://www.google.com/maps?q=Ken%27s%20Diner%2C%206104%20Schonsee%20Way%20NW%2C%20Edmonton%2C%20AB%20T5Z%200K6&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div className="visit-map-footer"><span><span className="visit-pin" aria-hidden="true" /> Ken’s Diner · 6104 Schonsee Way NW</span><a href={business.directions} target="_blank" rel="noopener noreferrer">Open Google Maps ↗</a></div>
          </div>
        </div>
        <div className="shell visit-bottom">
          <div className="visit-details">
            <div className="visit-hours"><span className="visit-panel-label">When to pull up</span><h3>Opening hours</h3><dl><div><dt>{business.hours.weekday.days}</dt><dd>{business.hours.weekday.time}</dd></div><div><dt>{business.hours.weekend.days}</dt><dd>{business.hours.weekend.time}</dd></div><div><dt>Weekend brunch</dt><dd>{business.brunchService.time}</dd></div></dl><p>{business.hours.holiday}</p></div>
            <div className="visit-contact"><span className="visit-panel-label">Say hello</span><h3>Let’s talk</h3><a href={business.phoneHref}>{business.phone}</a><a href={`mailto:${business.email}`}>{business.email}</a></div>
          </div>
          <NewsletterSignup />
        </div>
      </section>
    </main>
  );
}
