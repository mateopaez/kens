import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";

export default function Home() {
  return (
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-image"><Image src="/diner-photos/burger-basket.webp" alt="Burger and fries served in a basket at Ken’s Diner" fill priority sizes="100vw" /></div>
        <div className="hero-content shell"><h1 id="hero-title">Your neighbourhood<br />’50s diner</h1><p>Homestyle cooking in Schonsee, Edmonton.</p><div className="hero-actions"><Link className="button button-red" href="/menu">View menu <span aria-hidden="true">↗</span></Link><a className="button-text" href={business.directions}>Get directions <span aria-hidden="true">↗</span></a></div></div>
      </section>
      <section className="hours-strip" aria-label="Opening hours"><div className="shell hours-inner"><div><strong>Monday–Friday</strong><span>{business.hours.weekday.time}</span></div><div><strong>Saturday–Sunday</strong><span>{business.hours.weekend.time}</span></div><div><strong>Weekend brunch</strong><span>{business.brunchService.time}</span></div><p>{business.hours.holiday}</p></div></section>
      <div className="checker-divider" aria-hidden="true" />
      <section className="explore shell" aria-labelledby="explore-title"><div className="explore-image"><Image src="/diner-photos/coffee-at-the-counter.webp" alt="Two guests with coffee and breakfast at Ken’s Diner" fill sizes="(max-width: 800px) 100vw, 48vw" /></div><div className="explore-content"><h2 id="explore-title">At the diner</h2><p>Breakfast, lunch, dinner, and a little extra time for brunch on weekends.</p><div className="menu-links"><Link href="/menu#early-bird"><span><strong>Early Bird Breakfast</strong><small>Monday–Friday · 8 am–11 am · Dine-in only</small></span><b aria-hidden="true">↗</b></Link><Link href="/menu#diner"><span><strong>Diner Menu</strong><small>All-day favourites</small></span><b aria-hidden="true">↗</b></Link><Link href="/menu#brunch"><span><strong>Weekend Brunch</strong><small>Saturday–Sunday · 9:30 am–2 pm</small></span><b aria-hidden="true">↗</b></Link></div></div></section>
      <section id="specials" className="specials"><div className="shell specials-inner"><h2>Daily specials</h2><p>Ken’s offers changing lunch and dinner specials.</p><a href={business.specials}>See daily specials <span aria-hidden="true">↗</span></a></div></section>
      <section id="visit" className="visit"><div className="shell visit-inner"><div className="visit-intro"><h2>Visit Ken’s</h2><p>Dine in or carry out in Schonsee.</p><address>{business.address}</address><div className="visit-actions"><a className="button button-red" href={business.directions}>Get directions <span aria-hidden="true">↗</span></a><a className="button button-outline" href={business.phoneHref}>Call Ken’s</a></div></div><div className="visit-info"><h3>Hours</h3><dl><div><dt>{business.hours.weekday.days}</dt><dd>{business.hours.weekday.time}</dd></div><div><dt>{business.hours.weekend.days}</dt><dd>{business.hours.weekend.time}</dd></div><div><dt>Weekend brunch</dt><dd>{business.brunchService.time}</dd></div></dl><p>{business.hours.holiday}</p><h3>Contact</h3><a href={business.phoneHref}>{business.phone}</a><a href={`mailto:${business.email}`}>{business.email}</a><a href={business.instagram}>Instagram ↗</a></div></div></section>
    </main>
  );
}
