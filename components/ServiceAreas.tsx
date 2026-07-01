import AnimatedSection from "./AnimatedSection";
import Link from "next/link";
import { businessInfo } from "@/config/businessinfo";
import styles from "./ServiceAreas.module.css";

export default function ServiceAreas() {
  return (
    <section className={`section ${styles.section}`} id="service-areas">
      <div className="container">
        <div className={styles.layout}>
          <AnimatedSection animation="fade-up" className={styles.left}>
            <p className="section-eyebrow">Where We Work</p>
            <h2 className="section-title">
              Serving <span>Austin</span><br />&amp; Surrounding Areas
            </h2>
            <div className="gold-line" />
            <p>
              Based in Pflugerville, TX, we cover the entire Austin metro area.
              If you&apos;re not sure if we serve your area, just give us a call.
            </p>

            <div className={styles.areas}>
              {businessInfo.serviceAreas.map((area) => (
                <div key={area} className={styles.areaChip}>
                  <span className={styles.pin}>📍</span>
                  {area}, TX
                </div>
              ))}
            </div>

            <Link href="/contact" className="btn btn--primary" style={{ marginTop: "2rem", display: "inline-flex" }}>
              Check My Area →
            </Link>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" className={styles.mapWrapper}>
            {/* Google Map embed, centered on Pflugerville/Austin */}
            <iframe
              className={styles.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220700.94887437706!2d-97.89534!3d30.3004707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b592d8696a37%3A0xba13f8e5cbb98d8a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              title="Service area map, Austin Texas"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className={styles.mapOverlay}>
              <div className={styles.mapBadge}>
                📍 Pflugerville, TX<br />
                <span>Home Base</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
