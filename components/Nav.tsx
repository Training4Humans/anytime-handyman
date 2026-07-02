"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { businessInfo } from "@/config/businessinfo";
import styles from "./Nav.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/maintenance", label: "Maintenance Plans" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const pathname                  = usePathname();
  const isHome                    = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      {/* ── Top bar (hidden on mobile) ──────────────────────── */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <span>
            <span className={styles.topBarIcon}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            </span>
            Serving Austin &amp; Surrounding Areas
          </span>
          <a href={businessInfo.contact.phoneHref} className={styles.topPhone}>
            <span className={styles.topBarIcon}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            </span>
            {businessInfo.contact.phone}
          </a>
        </div>
      </div>

      {/* ── Main nav — hidden on mobile home page ───────────── */}
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""} ${isHome ? styles.navHome : ""}`}>
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
            <Image
              src="/Logos/AH_LOGO.png"
              alt="The Anytime Handyman Logo"
              width={150}
              height={150}
              priority
            />
          </Link>

          {/* Desktop Links */}
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.link}>{link.label}</Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a href={businessInfo.contact.phoneHref} className={`btn btn--primary ${styles.ctaBtn}`}>
            Get a Free Quote
          </a>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            id="hamburger-btn"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* ── Mobile floating hamburger (home page only) ────────── */}
      {isHome && (
        <button
          className={`${styles.floatingHamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          id="floating-hamburger-btn"
        >
          <span />
          <span />
          <span />
          <span className={styles.menuLabel}>MENU</span>
        </button>
      )}

      {/* ── Mobile slide-out menu ────────────────────────────── */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ""}`}>
        {/* Logo inside menu */}
        <div className={styles.menuLogoRow}>
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image src="/Logos/AH_LOGO.png" alt="The Anytime Handyman" width={100} height={100} />
          </Link>
          <button
            className={styles.menuClose}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <ul className={styles.mobileLinks}>
          {navLinks.map((link, i) => (
            <li key={link.href} style={{ transitionDelay: `${i * 50}ms` }}>
              <Link href={link.href} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.mobileCtas}>
          <a href={businessInfo.contact.phoneHref} className="btn btn--primary" onClick={() => setMenuOpen(false)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            Call Now
          </a>
          <Link href="/contact" className="btn btn--gold-outline" onClick={() => setMenuOpen(false)}>
            Get a Quote
          </Link>
        </div>

        <div className={styles.mobileInfo}>
          <p>{businessInfo.contact.phone}</p>
          <p>{businessInfo.contact.email}</p>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}
