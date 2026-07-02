import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import styles from "./MaintenancePromo.module.css";

export default function MaintenancePromo() {
  return (
    <section className={styles.section} id="maintenance-promo">
      <div className={styles.layout}>

        {/* ── Left: Image ── */}
        <div className={styles.imagePane}>
          <Image
            src="/images/living-room.jpg"
            alt="Beautiful home interior protected by maintenance plan"
            fill
            className={styles.image}
            sizes="50vw"
          />
          <div className={styles.imageOverlay} />

          {/* Gold banner overlaid on image */}
          <div className={styles.imageBanner}>
            <span className={styles.bannerLine}>Monthly</span>
            <span className={styles.bannerDot}>·</span>
            <span className={styles.bannerLine}>Quarterly</span>
            <span className={styles.bannerDot}>·</span>
            <span className={styles.bannerLine}>Annual</span>
          </div>
        </div>

        {/* ── Right: Content ── */}
        <div className={styles.contentPane}>
          <AnimatedSection animation="fade-up" className={styles.content}>

            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Signature Service
            </div>

            <div className={styles.headlineRow}>
              <h2 className={styles.headline}>
                Your Home is<br />
                Your <span>Biggest</span><br />
                Investment.
              </h2>
              <div className={styles.contractBadge}>
                <Image
                  src="/images/service-contracts.png"
                  alt="Service contracts available"
                  width={170}
                  height={170}
                  className={styles.contractImg}
                />
              </div>
            </div>

            <p className={styles.sub}>
              Protect it with a personalized maintenance plan, proactive care
              that catches problems before they become expensive disasters.
            </p>

            {/* What's included, minimal text list */}
            <div className={styles.included}>
              <p className={styles.includedLabel}>What&apos;s covered:</p>
              <div className={styles.includedGrid}>
                {[
                  "Safety & Systems",
                  "HVAC & Filters",
                  "Plumbing Checks",
                  "Electrical Testing",
                  "Exterior Inspection",
                  "Appliance Review",
                  "Seasonal Add-Ons",
                  "And much more",
                ].map((item) => (
                  <div key={item} className={styles.includedItem}>
                    <span className={styles.includedCheck}>•</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.pricing}>
              <p className={styles.pricingText}>Pricing personalized to your home.</p>
              <p className={styles.pricingNote}>No contracts. Cancel anytime.</p>
            </div>

            <div className={styles.ctas}>
              <Link href="/maintenance" className={styles.ctaPrimary}>
                View Plans &amp; Get a Quote
              </Link>
              <Link href="/contact" className={styles.ctaSecondary}>
                Learn More →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
