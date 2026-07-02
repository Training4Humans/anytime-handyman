import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services, businessInfo } from "@/config/businessinfo";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Full-service handyman solutions for Austin homeowners. Interior repairs, exterior improvements, and specialty installations. Licensed, insured, and satisfaction guaranteed.",
};

const categories = [
  {
    id: "interior",
    label: "Interior",
    headline: "Interior Repairs & Improvements",
    sub: "From drywall and painting to flooring and fixture installation, we handle every room in your home with precision craftsmanship.",
    image: "/images/services-interior.jpg",
  },
  {
    id: "exterior",
    label: "Exterior",
    headline: "Exterior & Outdoor Work",
    sub: "Decks, fences, pressure washing, and gutters. Your home's exterior deserves the same attention as the inside.",
    image: "/images/services-exterior.jpg",
  },
  {
    id: "specialty",
    label: "Specialty",
    headline: "Specialty Services",
    sub: "Smart home installations, holiday lighting, water damage repair: the jobs that require a trusted expert.",
    image: "/images/epoxy-floor.jpg",
  },
] as const;

export default function ServicesPage() {
  return (
    <main className={styles.main}>

      {/* ------------------------------------------ */}
      <section className={styles.hero}>
        <Image
          src="/images/services-hero.jpg"
          alt="Premium home repair and renovation services by The Anytime Handyman"
          fill
          className={styles.heroBg}
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.heroEyebrow}>
            <span className={styles.eyebrowDot} />
            Licensed &amp; Insured · Est. {businessInfo.established}
          </p>
          <h1 className={styles.heroTitle}>
            Every Job.<br />
            <span>Done Right.</span>
          </h1>
          <p className={styles.heroSub}>
            From a single repair to a full home refresh, Austin&apos;s most trusted handyman team has you covered.
          </p>
          <Link href="/contact" className={styles.heroCta}>
            Get a Free Estimate
          </Link>
        </div>
      </section>

      {/* ΓöÇΓöÇ Category Sections ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ */}
      {categories.map((cat, i) => {
        const catServices = services.filter((s) => s.category === cat.id);
        const isEven = i % 2 === 0;

        return (
          <section key={cat.id} className={styles.category} id={cat.id}>
            <div className={`${styles.categoryLayout} ${isEven ? "" : styles.categoryLayoutReverse}`}>

              {/* Image pane */}
              <div className={styles.categoryImg}>
                <Image
                  src={cat.image}
                  alt={cat.headline}
                  fill
                  className={styles.categoryPhoto}
                  sizes="50vw"
                />
                <div className={styles.categoryImgOverlay} />
                <div className={styles.categoryLabel}>{cat.label}</div>
              </div>

              {/* Content pane */}
              <div className={styles.categoryContent}>
                <h2 className={styles.categoryHeadline}>{cat.headline}</h2>
                <p className={styles.categorySub}>{cat.sub}</p>

                <ul className={styles.serviceList}>
                  {catServices.map((s) => (
                    <li key={s.id} className={styles.serviceItem}>
                      <span className={styles.serviceTick}>ΓÇó</span>
                      <div>
                        <p className={styles.serviceTitle}>{s.title}</p>
                        <p className={styles.serviceDesc}>{s.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className={styles.categoryCta}>
                  Get a Quote for {cat.label} Work ΓåÆ
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      {/* ΓöÇΓöÇ Bottom CTA ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ */}
      <section className={styles.cta}>
        <div className={styles.ctaBg} aria-hidden="true" />
        <div className={`container ${styles.ctaContent}`}>
          <p className={styles.ctaEyebrow}>Ready to Get Started?</p>
          <h2 className={styles.ctaTitle}>
            Let&apos;s Talk About<br />Your Project.
          </h2>
          <p className={styles.ctaSub}>
            Free estimates. No obligation. We respond within 24 hours.
          </p>
          <div className={styles.ctaRow}>
            <a href={businessInfo.contact.phoneHref} className="btn btn--primary" id="services-cta-call">
              Call {businessInfo.contact.phone}
            </a>
            <Link href="/contact" className="btn btn--outline" id="services-cta-quote">
              Request a Free Quote ΓåÆ
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
