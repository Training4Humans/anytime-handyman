"use client";
import { useState, useEffect, useCallback } from "react";
import AnimatedSection from "./AnimatedSection";
import { testimonials } from "@/config/testimonials";
import styles from "./Testimonials.module.css";

const INTERVAL = 5000; // ms between auto-advances

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const total = testimonials.length;

  const goTo = useCallback((index: number) => {
    setFading(true);
    setTimeout(() => {
      setActive(index);
      setFading(false);
    }, 300);
  }, []);

  const prev = useCallback(() => {
    goTo((active - 1 + total) % total);
  }, [active, total, goTo]);

  const next = useCallback(() => {
    goTo((active + 1) % total);
  }, [active, total, goTo]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

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
              <svg className={styles.googleG} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-label="Google">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                <path fill="none" d="M0 0h48v48H0z"/>
              </svg>
              <span className={styles.googleText}>4.9 · Google Reviews</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Slideshow quote */}
        <div className={styles.slideshowWrap}>
          <button
            className={styles.arrow}
            onClick={prev}
            aria-label="Previous review"
            id="testimonial-prev"
          >
            ←
          </button>

          <div className={`${styles.quoteBlock} ${fading ? styles.fading : ""}`}>
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
          </div>

          <button
            className={styles.arrow}
            onClick={next}
            aria-label="Next review"
            id="testimonial-next"
          >
            →
          </button>
        </div>

        {/* Dot indicators */}
        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
