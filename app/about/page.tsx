import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { businessInfo } from "@/config/businessinfo";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Us | The Anytime Handyman",
  description: "The story behind Austin's most trusted handyman service. Founded in 2019 by Tronell Louis, built on reliability, integrity, and genuine craftsmanship.",
};

const values = [
  {
    title: "Reliability",
    desc: "We show up when we say we will. No runarounds, no no-shows. Your time is valuable.",
  },
  {
    title: "Integrity",
    desc: "Written estimates before every job. What we quote is what you pay.",
  },
  {
    title: "Craftsmanship",
    desc: "We treat every home like our own. No shortcuts, no sloppy work.",
  },
  {
    title: "Community",
    desc: "We're Austinites too. We care about the neighborhoods we work in.",
  },
];

const stats = [
  { num: "2019", label: "Year Founded" },
  { num: "500+", label: "Jobs Completed" },
  { num: "5★", label: "Average Rating" },
  { num: "100%", label: "Satisfaction Guarantee" },
];

export default function AboutPage() {
  return (
    <main className={styles.main}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <Image
          src="/images/living-room.jpg"
          alt="Beautifully maintained Austin home interior"
          fill
          className={styles.heroBg}
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.heroEyebrow}>
            <span className={styles.eyebrowDot} />
            Est. {businessInfo.established} · Austin, TX
          </p>
          <h1 className={styles.heroTitle}>
            Built on Trust.<br />
            <span>Driven by Craft.</span>
          </h1>
          <p className={styles.heroSub}>
            A local handyman service built the right way, one honest job at a time.
          </p>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────── */}
      <div className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Owner Story ───────────────────────────────────────── */}
      <section className={styles.story}>
        <div className={styles.storyLayout}>

          {/* Portrait */}
          <div className={styles.portraitPane}>
            <div className={styles.portraitFrame}>
              <Image
                src={businessInfo.owner.photo}
                alt={`${businessInfo.owner.name}, ${businessInfo.owner.title}`}
                fill
                className={styles.portrait}
                sizes="50vw"
              />
              <div className={styles.portraitOverlay} />
            </div>
            <div className={styles.portraitTag}>
              <p className={styles.portraitName}>{businessInfo.owner.name}</p>
              <p className={styles.portraitTitle}>{businessInfo.owner.title}</p>
            </div>
          </div>

          {/* Bio */}
          <div className={styles.bioPane}>
            <p className={styles.bioEyebrow}>
              <span className={styles.eyebrowDot} />
              Our Story
            </p>
            <h2 className={styles.bioTitle}>
              One Handyman.<br />One Standard.
            </h2>
            <div className={styles.bioDivider} />
            <p className={styles.bioText}>{businessInfo.owner.bio}</p>
            <p className={styles.bioText}>
              Today, The Anytime Handyman serves homeowners across the greater Austin metro, from quick repairs to full home maintenance plans. Every job, no matter the size, gets the same level of attention and care.
            </p>

            {/* Placeholder notice */}
            <div className={styles.placeholderNotice}>
              <p className={styles.placeholderText}>
                More content coming soon: photos, certifications, and team profiles.
              </p>
            </div>

            <Link href="/contact" className={styles.bioCta}>
              Work With Us →
            </Link>
          </div>

        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────── */}
      <section className={styles.valuesSection}>
        <div className="container">
          <div className={styles.valuesHeader}>
            <p className={styles.bioEyebrow}>
              <span className={styles.eyebrowDot} />
              What We Stand For
            </p>
            <h2 className={styles.valuesTitle}>
              The Four Things That<br />Drive Everything We Do.
            </h2>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div key={v.title} className={styles.valueCard}>
                <span className={styles.valueNum}>0{i + 1}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className={styles.ctaBg} />
        <div className={`container ${styles.ctaContent}`}>
          <h2 className={styles.ctaTitle}>
            Ready to Meet<br />Your Handyman?
          </h2>
          <p className={styles.ctaSub}>
            Get a free, no-obligation estimate. We&apos;ll be in touch within 24 hours.
          </p>
          <div className={styles.ctaRow}>
            <a href={businessInfo.contact.phoneHref} className="btn btn--primary" id="about-cta-call">
              Call {businessInfo.contact.phone}
            </a>
            <Link href="/contact" className="btn btn--outline" id="about-cta-quote">
              Get a Free Estimate →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
