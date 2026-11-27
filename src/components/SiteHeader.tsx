"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { business } from "@/data/business";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <nav className="shell header-inner" aria-label="Main navigation">
        <Link href="/" className="header-logo" aria-label="Ken’s Diner home" onClick={closeMenu}>
          <Image src="/diner-photos/kens-logo.png" alt="" width={365} height={151} sizes="(max-width: 760px) 128px, (max-width: 1267px) 15vw, 190px" loading="eager" />
        </Link>

        <div className="header-desktop-links">
          <Link className="header-specials" href={business.specials}>Daily specials</Link>
          <div className="header-actions">
            <Link href="/#visit">Visit &amp; hours</Link>
            <Link className="header-menu" href="/menu">View menu</Link>
          </div>
        </div>

        <button className="header-toggle" type="button" aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} onClick={() => setIsOpen((open) => !open)}>
          <span className="header-toggle-icon" aria-hidden="true"><span /><span /><span /></span>
        </button>

        <div id="mobile-navigation" className="header-mobile-menu" hidden={!isOpen}>
          <Link href={business.specials} onClick={closeMenu}>Daily specials</Link>
          <Link href="/menu" onClick={closeMenu}>View menu</Link>
          <Link href="/#visit" onClick={closeMenu}>Visit &amp; hours</Link>
        </div>
      </nav>
    </header>
  );
}
