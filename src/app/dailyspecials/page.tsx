import type { Metadata } from "next";
import { connection } from "next/server";
import Link from "next/link";
import { Suspense } from "react";
import { business } from "@/data/business";
import { dailySpecials, type DailySpecial } from "@/data/daily-specials";
import "./specials.css";

export const metadata: Metadata = {
  title: "Daily specials",
  description: "See Ken’s Diner’s dated lunch and dinner specials in Schonsee, Edmonton, with prices, hours, and a quick way to call.",
};

const dateLabel = (date: string) =>
  new Intl.DateTimeFormat("en-CA", { timeZone: "America/Edmonton", weekday: "long", month: "long", day: "numeric", year: "numeric" }).format(new Date(`${date}T12:00:00Z`));

function ChoiceList({ items }: { items: string[] }) {
  return <span className="special-choice-list">{items.map((item, index) => <span key={item}>{index > 0 && <em>or</em>}{item}</span>)}</span>;
}

function SpecialCard({ special, kind }: { special: DailySpecial; kind: "lunch" | "dinner" }) {
  const meal = special[kind];
  if (!meal) return null;
  const isLunch = kind === "lunch";
  return (
    <article className={`special-card special-card-${kind}`}>
      <div className="special-card-heading">
        <div><span className="special-small-label">The {kind} special</span><h3>{isLunch ? "Lunch" : "Dinner"}</h3></div>
        <span className="special-time">{isLunch ? "11 am–2 pm" : "4–6 pm"}</span>
      </div>
      <div className="special-card-body">
        {isLunch ? <>
          <div className="special-course"><span className="special-course-label">Choose your main</span><ChoiceList items={special.lunch!.mains} /></div>
          <div className="special-course"><span className="special-course-label">Choose soup or side</span><ChoiceList items={special.lunch!.sides} /></div>
          <div className="special-course"><span className="special-course-label">Something sweet</span><strong>{special.lunch!.dessert}</strong></div>
          <p className="special-note">Served with your choice of soup, salad, or fries.</p>
        </> : <>
          <div className="special-course"><span className="special-course-label">Soup or salad</span><ChoiceList items={special.dinner!.starters} /></div>
          <div className="special-course"><span className="special-course-label">The main event</span><strong>{special.dinner!.main}</strong></div>
          <div className="special-course"><span className="special-course-label">Something sweet</span><strong>{special.dinner!.dessert}</strong></div>
        </>}
      </div>
      <div className="special-card-price">{isLunch ? <><span>All in</span><strong>{special.lunch!.price}</strong></> : <><span>Full <strong>{special.dinner!.fullPrice}</strong></span><span>Small <strong>{special.dinner!.smallPrice}</strong></span></>}</div>
    </article>
  );
}

async function PostedSpecials() {
  await connection();
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Edmonton", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
  const upcoming = dailySpecials.filter((special) => special.date >= today).sort((a, b) => a.date.localeCompare(b.date));

  if (!upcoming.length) return <section className="special-empty shell" aria-labelledby="special-empty-title"><span className="special-kicker">Fresh from the kitchen</span><h2 id="special-empty-title">The next special is cooking.</h2><p>Our board changes often. Give us a call for today’s lunch and dinner specials.</p><a className="special-cta" href={business.phoneHref}>Call Ken’s <span aria-hidden="true">↗</span></a></section>;

  return <div className="special-postings shell">
    {upcoming.map((special, index) => <section className={`special-date-group ${index === 0 ? "special-featured" : ""}`} key={special.date} aria-labelledby={`date-${special.date}`}>
      <div className="special-date-heading"><div><span className="special-kicker">{index === 0 ? "Next on the board" : "Coming up"}</span><h2 id={`date-${special.date}`}>{dateLabel(special.date)}</h2></div><span className="special-date-stamp">{special.date === today ? "Today" : "Save the date"}</span></div>
      <div className="special-card-grid">{special.lunch && <SpecialCard special={special} kind="lunch" />}{special.dinner && <SpecialCard special={special} kind="dinner" />}</div>
      {index === 0 && <div className="special-action-bar"><p>Craving it? Dine in or call ahead for takeout.</p><a href={business.phoneHref}>Call {business.phone} <span aria-hidden="true">↗</span></a></div>}
    </section>)}
  </div>;
}

export default function DailySpecialsPage() {
  return <main id="main" className="daily-specials-page">
    <section className="special-hero"><div className="shell special-hero-inner"><div className="special-hero-copy"><span className="special-hero-eyebrow">Your booth is waiting · Schonsee, Edmonton</span><h1>Good food.<br /><span>Great times.</span></h1><p>Lunch, dinner, and a little something sweet. See what’s on the board, then come on in.</p><a className="special-hero-link" href="#the-board">See the specials <span aria-hidden="true">↓</span></a></div><div className="special-hero-art" aria-hidden="true"><div className="special-hero-plate"><div className="special-hero-burst">DAILY<br />SPECIALS</div></div><span className="special-hero-star star-one">✳</span><span className="special-hero-star star-two">✳</span></div></div></section>
    <div className="visit-checker" aria-hidden="true" />
    <section id="the-board" className="special-board" aria-labelledby="board-title"><div className="shell special-board-intro"><div><span className="special-kicker">Straight from the griddle</span><h2 id="board-title">On the board</h2></div><p>Specials are subject to change. For the latest availability, call {business.phone}.</p></div><Suspense fallback={<p className="shell special-loading">Checking the board…</p>}><PostedSpecials /></Suspense></section>
    <section className="special-visit"><div className="shell special-visit-inner"><div><span className="special-kicker">Pull up a booth</span><h2>See you at Ken’s.</h2><p>6104 Schonsee Way NW<br />Edmonton, Alberta</p></div><div className="special-visit-actions"><a href={business.directions}>Get directions <span aria-hidden="true">↗</span></a><Link href="/menu">Explore the full menu <span aria-hidden="true">↗</span></Link></div></div></section>
  </main>;
}
