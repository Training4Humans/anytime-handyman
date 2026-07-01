import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import WhyUs from "@/components/WhyUs";
import MaintenancePromo from "@/components/MaintenancePromo";
import Testimonials from "@/components/Testimonials";
import ServiceAreas from "@/components/ServiceAreas";
import FAQ from "@/components/FAQ";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { businessInfo } from "@/config/businessinfo";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: businessInfo.seo.defaultTitle,
  description: businessInfo.seo.defaultDescription,
};

export default function Home() {
  return (
    <>
      {/* 1. Hero, full-screen video */}
      <Hero />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Why Choose Us */}
      <WhyUs />

      {/* 4. Testimonials */}
      <Testimonials />

      {/* 5. Maintenance Plan Promo, HERO PRODUCT */}
      <MaintenancePromo />

      {/* 6. Services Grid */}
      <ServicesGrid />

      {/* 7. Service Areas + Map */}
      <ServiceAreas />

      {/* 8. FAQ */}
      <FAQ />

      {/* 9. Final CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerBg} aria-hidden="true" />
        <div className="container">
          <AnimatedSection animation="fade-up" className={styles.ctaContent}>
            <p className="section-eyebrow">Ready to Get Started?</p>
            <h2 className={styles.ctaTitle}>
              Let&apos;s Fix, Build,<br />or Maintain Your Home.
            </h2>
            <p className={styles.ctaSub}>
              No job too big, no job too small. Get a free, no-obligation quote today.
            </p>
            <div className={styles.ctaRow}>
              <a
                href={businessInfo.contact.phoneHref}
                className="btn btn--primary"
                id="cta-banner-call"
              >
                📞 Call Now: {businessInfo.contact.phone}
              </a>
              <Link href="/contact" className="btn btn--outline" id="cta-banner-quote">
                Get a Free Quote →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
