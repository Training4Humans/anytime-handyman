"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { businessInfo } from "@/config/businessinfo";
import styles from "./Hero.module.css";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked, fallback image is shown via CSS
      });
    }
  }, []);

  return (
    <section className={styles.hero} id="hero">
      {/* ── Video Background ── */}
      <div className={styles.mediaBg}>
        <video
          ref={videoRef}
          className={styles.video}
          src={businessInfo.hero.video}
          poster={businessInfo.hero.videoPoster}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        {/* Fallback image if video fails */}
        <div className={styles.fallbackBg} style={{ zIndex: -1 }} />
        {/* Gradient overlays */}
        <div className={styles.overlayBottom} />
        <div className={styles.overlayTop} />
        <div className={styles.overlayLeft} />
        {/* Logo overlay - fades in then out in sync with video loop */}
        <div className={styles.logoOverlay} aria-hidden="true">
          <Image
            src="/Logos/AH_Logo2.png"
            alt=""
            width={320}
            height={320}
            className={styles.logoOverlayImg}
            priority
          />
        </div>
      </div>

      {/* ── Content ── */}
      <div className={styles.content}>
        <div className={`container ${styles.inner}`}>

          {/* Badge */}
          <div className={`${styles.badge} fade-up`}>
            <span className={styles.dot} />
            Austin&apos;s Trusted Handyman · Est. {businessInfo.established}
          </div>

          {/* Headline */}
          <h1 className={`${styles.headline} fade-up`}>
            <span className={`script ${styles.script}`}>The</span>
            <span className={styles.mainLine}>Anytime</span>
            <span className={styles.mainLine}>Handyman</span>
          </h1>

          <p className={`${styles.sub} fade-up`}>
            On Time. Every Time. Licensed · Insured · Satisfaction Guaranteed.<br />
            Serving Austin &amp; Surrounding Areas.
          </p>

          {/* CTAs */}
          <div className={`${styles.ctas} fade-up`}>
            <a
              href={businessInfo.contact.phoneHref}
              className="btn btn--primary"
              id="hero-call-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Call Now: {businessInfo.contact.phone}
            </a>
            <Link href="/contact" className="btn btn--outline" id="hero-quote-btn">
              Get a Free Quote →
            </Link>
          </div>

          {/* Trust icons */}
          <div className={`${styles.trust} fade-up`}>
            {[
              {
                icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
                label: "5-Star Rated"
              },
              {
                icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>,
                label: "Licensed & Insured"
              },
              {
                icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
                label: "Same-Day Available"
              },
              {
                icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
                label: "Satisfaction Guaranteed"
              },
            ].map((item) => (
              <div key={item.label} className={styles.trustItem}>
                <span className={styles.trustIcon}>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span>Scroll</span>
      </div>

      {/* ── Mobile-only floating CTA bar ── */}
      <div className={styles.mobileCta}>
        <a href={businessInfo.contact.phoneHref} className={styles.mobileCtaCall} id="hero-mobile-call">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
          Call Now
        </a>
        <a href="/contact" className={styles.mobileCtaQuote} id="hero-mobile-quote">
          Free Estimate →
        </a>
      </div>
    </section>
  );
}
