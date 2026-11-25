import type { Metadata } from "next";
import Image from "next/image";
import { business } from "@/data/business";
import "./menu.css";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore Ken’s Diner favourites, Early Bird Breakfast, weekend brunch, desserts, and the full menu. Call for pickup in Schonsee, Edmonton.",
};

const dinerPages = [
  { src: "/references/diner-page-1.jpg", width: 2550, height: 3300, alt: "Diner menu with soups, salads, sandwiches, chicken, and beverages", label: "01 / Soups, sandwiches & more" },
  { src: "/references/diner-page-2.jpg", width: 2550, height: 3300, alt: "Diner menu with burgers, hot dogs, sides, and desserts", label: "02 / Burgers, dogs & sides" },
  { src: "/references/diner-page-3.jpg", width: 2550, height: 3300, alt: "Diner menu with all-day breakfast, extras, and beverages", label: "03 / All-day breakfast" },
  { src: "/references/diner-page-4.jpg", width: 1700, height: 2200, alt: "Ken’s Diner kids’ menu with brunch, lunch, and dinner", label: "04 / Little diners" },
];

function MenuSheet({ src, width, height, alt, label }: { src: string; width: number; height: number; alt: string; label: string }) {
  return <figure className="retro-sheet">
    <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size ${label} menu page in a new tab`}>
      <Image src={src} width={width} height={height} alt={alt} sizes="(max-width: 720px) 100vw, (max-width: 1200px) 50vw, 560px" unoptimized loading="lazy" />
    </a>
    <figcaption><span>{label}</span><span>Open full size ↗</span></figcaption>
  </figure>;
}

export default function MenuPage() {
  return <main id="main" className="retro-menu">
    <section className="retro-hero" aria-labelledby="menu-title">
      <div className="retro-hero-inner shell">
        <div className="retro-hero-copy">
          <span className="retro-eyebrow">Ken’s Diner · Schonsee, Edmonton</span>
          <h1 id="menu-title">GOOD FOOD.<br /><em>GOOD TIMES.</em></h1>
          <p>Breakfast classics, diner favourites, and a little something sweet. Find your next favourite, then come pull up a booth.</p>
          <div className="retro-hero-actions">
            <a className="retro-button retro-button-red" href={business.phoneHref}>Call for pickup <span aria-hidden="true">↗</span></a>
            <a className="retro-button retro-button-outline" href="#menu-board">Explore the menu <span aria-hidden="true">↓</span></a>
          </div>
          <span className="retro-hero-phone">Order by phone: {business.phone}</span>
        </div>
        <div className="retro-hero-photo">
          <Image src="/diner-photos/burger-basket.webp" alt="Burger and fries served in a diner basket" fill priority sizes="(max-width: 800px) 100vw, 48vw" />
          <div className="retro-photo-stamp" aria-hidden="true"><span>Pull up<br />a booth!</span></div>
        </div>
      </div>
    </section>
    <div className="retro-checker" aria-hidden="true" />

    <section className="retro-highlights shell" aria-labelledby="highlights-title">
      <div className="retro-highlights-heading"><div><span className="retro-eyebrow">Straight from the menu</span><h2 id="highlights-title">HOUSE FAVOURITES</h2></div><p>A few good places to start. See the full menu below for all the details.</p></div>
      <div className="retro-highlights-grid">
        <a href="#early-bird" className="retro-highlight"><span className="retro-highlight-num">01 / WEEKDAY BREAKFAST</span><strong>The Early Bird</strong><span className="retro-highlight-description">Two eggs, your choice of breakfast meat, homemade hashbrowns & toast.</span><span className="retro-highlight-bottom"><b>$10.00</b><span>See breakfast ↗</span></span></a>
        <a href="#diner" className="retro-highlight"><span className="retro-highlight-num">02 / DINER CLASSIC</span><strong>Ken Burger</strong><span className="retro-highlight-description">A 5 oz beef burger with mushrooms and Swiss cheese.</span><span className="retro-highlight-bottom"><b>$17.00</b><span>See diner menu ↗</span></span></a>
        <a href="#desserts" className="retro-highlight"><span className="retro-highlight-num">03 / SOMETHING SWEET</span><strong>Mile High Pie</strong><span className="retro-highlight-description">A slice of pie. Ask your server for today’s flavour.</span><span className="retro-highlight-bottom"><b>$7.50</b><span>See dessert ↗</span></span></a>
      </div>
    </section>

    <section id="menu-board" className="retro-board" aria-labelledby="board-title">
      <div className="shell">
        <div className="retro-board-head"><span className="retro-eyebrow">Pick your craving</span><h2 id="board-title">THE MENU BOARD</h2><p>Jump straight to what sounds good.</p></div>
        <nav className="retro-board-nav" aria-label="Menu sections">
          <a href="#early-bird"><span className="retro-board-number">01</span><span><strong>Early Bird Breakfast</strong><small>Mon–Fri · 8–11 am · Dine-in only</small></span><b aria-hidden="true">↗</b></a>
          <a href="#diner"><span className="retro-board-number">02</span><span><strong>Diner Menu</strong><small>All-day favourites & kids’ menu</small></span><b aria-hidden="true">↗</b></a>
          <a href="#brunch"><span className="retro-board-number">03</span><span><strong>Weekend Brunch</strong><small>Sat–Sun · 9:30 am–2 pm</small></span><b aria-hidden="true">↗</b></a>
          <a href="#desserts"><span className="retro-board-number">04</span><span><strong>Desserts & Drinks</strong><small>Pie, sundaes, shakes & more</small></span><b aria-hidden="true">↗</b></a>
        </nav>
      </div>
    </section>

    <div className="retro-menu-pages shell">
      <section id="early-bird" className="retro-menu-section" aria-labelledby="early-bird-title">
        <div className="retro-section-intro"><span className="retro-section-index">01 / RISE & SHINE</span><h2 id="early-bird-title">EARLY BIRD<br />BREAKFAST</h2><p>Good mornings start here. A weekday deal worth getting out of bed for.</p><div className="retro-service-note"><strong>{business.earlyBirdService.days}</strong><span>{business.earlyBirdService.time} · {business.earlyBirdService.restriction}</span></div></div>
        <div className="retro-single-sheet"><MenuSheet src="/references/early-bird.png" width={773} height={2000} alt="Early Bird Breakfast menu with weekday dine-in breakfast offerings" label="Early Bird Breakfast" /></div>
      </section>
      <section id="diner" className="retro-menu-section retro-menu-section-wide" aria-labelledby="diner-title">
        <div className="retro-section-intro"><span className="retro-section-index">02 / ALL THE CLASSICS</span><h2 id="diner-title">DINER MENU</h2><p>Soups, sandwiches, burgers, all-day breakfast, and something for the little diners, too.</p></div>
        <div className="retro-sheets-grid">{dinerPages.map((page) => <MenuSheet key={page.src} {...page} />)}</div>
      </section>
      <section id="brunch" className="retro-menu-section" aria-labelledby="brunch-title">
        <div className="retro-section-intro"><span className="retro-section-index">03 / TAKE IT SLOW</span><h2 id="brunch-title">WEEKEND<br />BRUNCH</h2><p>Make a morning of it with brunch specialties and breakfast favourites.</p><div className="retro-service-note"><strong>{business.brunchService.days}</strong><span>{business.brunchService.time}</span></div></div>
        <div className="retro-single-sheet"><MenuSheet src="/references/weekend-brunch.jpg" width={1650} height={3300} alt="Weekend brunch menu with specialties, traditional favourites, and extras" label="Weekend Brunch" /></div>
      </section>
      <section id="desserts" className="retro-menu-section" aria-labelledby="desserts-title">
        <div className="retro-section-intro"><span className="retro-section-index">04 / SAVE ROOM</span><h2 id="desserts-title">DESSERTS<br />& DRINKS</h2><p>Finish with pie, a shake, a sundae, or whatever your sweet tooth says.</p></div>
        <div className="retro-single-sheet"><MenuSheet src="/references/desserts.jpg" width={1650} height={3300} alt="Desserts and beverages menu with pie, ice cream, milkshakes, coffee, and more" label="Desserts & Drinks" /></div>
      </section>
    </div>

    <section className="retro-last-call" aria-labelledby="last-call-title"><div className="shell retro-last-call-inner"><div><span className="retro-eyebrow">See you at Ken’s</span><h2 id="last-call-title">READY TO EAT?</h2><p>Call ahead for pickup or come on in and find your favourite booth.</p></div><div className="retro-last-call-actions"><a className="retro-button retro-button-light" href={business.phoneHref}>Call {business.phone} <span aria-hidden="true">↗</span></a><a className="retro-button retro-button-outline-light" href={business.directions}>Get directions <span aria-hidden="true">↗</span></a></div></div></section>
  </main>;
}
