import Link from "next/link";
import Image from "next/image";
import { businessInfo } from "@/config/businessinfo";
import styles from "./Footer.module.css";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/maintenance", label: "Maintenance Plans" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.goldBar} />

      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>

            {/* Brand column */}
            <div className={styles.brand}>
              <Image
                src="/Logos/Web.png"
                alt="The Anytime Handyman"
                width={100}
                height={100}
              />
              <p className={styles.tagline}>
                Austin&apos;s Most Reliable Handyman.<br />
                On Time. Every Time.
              </p>
              <div className={styles.socials}>
                <a
                  href={businessInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className={styles.socialIcon}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a
                  href={businessInfo.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className={styles.socialIcon}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M11.5 2C6.253 2 2 6.253 2 11.5c0 1.821.487 3.53 1.338 5.013L2.01 22l5.632-1.316A9.447 9.447 0 0 0 11.5 21C16.747 21 21 16.747 21 11.5S16.747 2 11.5 2zm0 17.25a7.72 7.72 0 0 1-3.94-1.076l-.283-.168-2.924.683.693-2.854-.184-.293A7.718 7.718 0 0 1 3.75 11.5c0-4.273 3.477-7.75 7.75-7.75s7.75 3.477 7.75 7.75-3.477 7.75-7.75 7.75z"/>
                  </svg>
                </a>
                <a
                  href={`mailto:${businessInfo.contact.email}`}
                  aria-label="Email"
                  className={styles.socialIcon}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <polyline points="2,4 12,13 22,4"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Quick Links</h4>
              <ul className={styles.linkList}>
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.footerLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Services</h4>
              <ul className={styles.linkList}>
                {["Drywall Repair", "Interior Painting", "Carpentry & Trim", "Deck Building", "Fence Installation", "Epoxy Flooring", "TV Mounting", "Smart Home Setup"].map((s) => (
                  <li key={s}>
                    <Link href="/services" className={styles.footerLink}>{s}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Contact Us</h4>
              <div className={styles.contactList}>
                <a href={businessInfo.contact.phoneHref} className={styles.contactItem}>
                  <span className={styles.contactIcon}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  </span>
                  <span>{businessInfo.contact.phone}</span>
                </a>
                <a href={`mailto:${businessInfo.contact.email}`} className={styles.contactItem}>
                  <span className={styles.contactIcon}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
                  </span>
                  <span>{businessInfo.contact.email}</span>
                </a>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  </span>
                  <span>Pflugerville, TX<br />Serving Austin Metro</span>
                </div>
              </div>

              <h4 className={styles.colTitle} style={{ marginTop: "1.5rem" }}>Hours</h4>
              <div className={styles.hours}>
                {businessInfo.hours.map((h) => (
                  <div key={h.day} className={styles.hourRow}>
                    <span>{h.day}</span>
                    <span>{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p>© {year} {businessInfo.name}. All rights reserved. · Est. {businessInfo.established} · Austin, TX · Licensed &amp; Insured</p>
            <p>
              Made with <span className={styles.goldHeart}>♥</span> in Texas by{" "}
              <a
                href="https://www.biggiebrands.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.biggieLink}
              >
                BIGGIE Brands
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
