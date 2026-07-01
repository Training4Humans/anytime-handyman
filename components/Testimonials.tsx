"use client";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { testimonials } from "@/config/testimonials";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className={styles.section} id="reviews">
      <div className="container">

        {/* Header row */}
        <AnimatedSection animation="fade-up" className={styles.header}>
          <div>
            <p className="section-eyebrow">Client Reviews</p>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              What They&apos;re Saying
            </h2>
          </div>
          <div className={styles.headerRight}>
            <div className={styles.googlePill}>
              <span className={styles.googleG}>G</span>
              <span className={styles.googleText}>5.0 · Google Reviews</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Big editorial quote */}
        <AnimatedSection animation="fade-up" className={styles.quoteBlock}>
          <div className={styles.openQuote}>&ldquo;</div>
          <p className={styles.quoteText}>{t.text}</p>
          <div className={styles.quoteFooter}>
            <div className={styles.avatar}>{t.avatar}</div>
            <div>
              <p className={styles.name}>{t.name}</p>
              <p className={styles.meta}>{t.location} · {t.service} · {t.date}</p>
            </div>
            <div className={styles.stars}>
              {"★".repeat(t.rating)}
            </div>
          </div>
        </AnimatedSection>

        {/* Selector tabs, minimal */}
        <AnimatedSection animation="fade-up" className={styles.tabs}>
          {testimonials.map((r, i) => (
            <button
              key={r.id}
              className={`${styles.tab} ${i === active ? styles.tabActive : ""}`}
              onClick={() => setActive(i)}
            >
              <span className={styles.tabAvatar}>{r.avatar}</span>
              <span className={styles.tabName}>{r.name.split(" ")[0]}</span>
            </button>
          ))}
        </AnimatedSection>

      </div>
    </section>
  );
}
