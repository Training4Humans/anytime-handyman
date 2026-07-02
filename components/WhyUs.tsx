import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import CountUp from "./CountUp";
import styles from "./WhyUs.module.css";

const stats = [
  { countUp: true, target: 2019, from: 2010, suffix: "",  label: "Founded in Austin" },
  { countUp: true, target: 200,  from: 0,    suffix: "+", label: "Homes Served" },
  { countUp: true, target: 100,  from: 0,    suffix: "%", label: "Satisfaction Rate" },
  { countUp: false, display: "1 Call",                    label: "Handles Everything" },
];

export default function WhyUs() {
  return (
    <section className={styles.section} id="why-us">
      <div className={styles.splitLayout}>

        {/* ── Left: Full-bleed photo ── */}
        <div className={styles.imagePane}>
          <Image
            src="/images/hero-bg.jpg"
            alt="Premium Austin home we maintain"
            fill
            className={styles.image}
            sizes="50vw"
          />
          <div className={styles.imageOverlay} />
          {/* Floating badge */}
          <div className={styles.floatingBadge}>
            <span className={styles.badgeYear}>Est.</span>
            <span className={styles.badgeNum}>2019</span>
            <span className={styles.badgeCity}>Austin, TX</span>
          </div>
        </div>

        {/* ── Right: Content ── */}
        <div className={styles.contentPane}>
          <AnimatedSection animation="fade-up" className={styles.content}>
            <p className="section-eyebrow">The Difference</p>

            <h2 className={styles.headline}>
              We Treat Your<br />
              Home Like<br />
              <em className={styles.italic}>Our Own.</em>
            </h2>

            <div className={styles.divider} />

            <p className={styles.body}>
              Austin has no shortage of handymen. What sets us apart is simple -
              we show up when we say we will, we price without surprises, and we
              stand behind every single repair we make.
            </p>

            <p className={styles.body}>
              Since 2019, homeowners across the Austin metro have trusted us
              because we treat the relationship, not just the job.
            </p>

            {/* Stats row */}
            <div className={styles.stats}>
              {stats.map((s) => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statNum}>
                    {s.countUp ? (
                      <CountUp target={s.target!} from={s.from} suffix={s.suffix} duration={2000} />
                    ) : (
                      s.display
                    )}
                  </span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>

            {/* Pillars, plain text list, no cards */}
            <div className={styles.pillars}>
              {[
                ["On Time, Every Time", "We show up. Full stop."],
                ["Transparent Pricing", "Written estimates. Zero surprises."],
                ["Licensed & Insured", "Your home is fully protected."],
                ["Satisfaction Guaranteed", "We don't leave until it's right."],
              ].map(([title, sub]) => (
                <div key={title} className={styles.pillar}>
                  <div className={styles.pillarDot} />
                  <div>
                    <p className={styles.pillarTitle}>{title}</p>
                    <p className={styles.pillarSub}>{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about" className={styles.cta}>
              Our Story <span>→</span>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
