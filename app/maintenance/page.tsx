"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { businessInfo } from "@/config/businessinfo";
import styles from "./page.module.css";

/* ── Pricing Data ──────────────────────────────────────────── */
const plans = [
  {
    id: "essential",
    name: "Essential",
    tagline: "The basics, handled.",
    monthlyPrice: 29,
    quarterlyPrice: 26,
    annualPrice: 23,
    highlight: false,
    badge: null,
    visits: "1 visit / year",
    features: [
      "Annual home inspection (22-point checklist)",
      "Smoke & CO detector testing + battery replacement",
      "HVAC filter check & replacement guidance",
      "Water heater inspection",
      "Door & window hardware adjustment",
      "Outdoor faucet & hose bib check",
      "10% off all additional labor",
      "Priority scheduling (standard)",
      "Email & phone support",
    ],
    notIncluded: [
      "Bi-annual visits",
      "Dedicated service manager",
      "Emergency priority response",
      "Materials included",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    tagline: "Most popular. Most protected.",
    monthlyPrice: 49,
    quarterlyPrice: 44,
    annualPrice: 39,
    highlight: true,
    badge: "Most Popular",
    visits: "2 visits / year",
    features: [
      "Bi-annual home inspections (spring & fall)",
      "HVAC filter replacement included",
      "Smoke & CO detector testing + batteries",
      "Plumbing fixture inspection & minor adjustments",
      "Exterior caulking inspection",
      "Gutter debris check",
      "Dryer vent cleaning",
      "Pressure washing assessment",
      "15% off all additional labor",
      "Priority scheduling (7-day guarantee)",
      "Dedicated service manager",
      "Phone, email & text support",
    ],
    notIncluded: [
      "Quarterly visits",
      "Emergency same-day response",
      "Materials fully included",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Total peace of mind.",
    monthlyPrice: 99,
    quarterlyPrice: 89,
    annualPrice: 79,
    highlight: false,
    badge: "Best Value Annually",
    visits: "4 visits / year",
    features: [
      "Quarterly home inspections (all seasons)",
      "All HVAC filters replaced at every visit",
      "Full 22-point inspection + written report",
      "Smoke & CO detector testing + batteries",
      "Plumbing flush & fixture adjustment",
      "Dryer vent cleaning (bi-annual)",
      "Exterior pressure wash assessment",
      "Gutter cleaning (bi-annual)",
      "Appliance health check",
      "Holiday lighting installation assistance",
      "20% off all additional labor",
      "Emergency priority response (48-hr guarantee)",
      "Dedicated service manager",
      "Seasonal add-on scheduling",
      "24/7 phone & text support",
    ],
    notIncluded: [],
  },
];

type BillingCycle = "monthly" | "quarterly" | "annual";

/* ── FAQ ───────────────────────────────────────────────────── */
const faqs = [
  {
    q: "Is there a long-term contract?",
    a: "No. All plans are month-to-month and can be cancelled anytime. Annual plans are paid upfront for the discounted rate.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Austin, Pflugerville, Round Rock, Cedar Park, Georgetown, Kyle, Buda, and surrounding Central Texas communities.",
  },
  {
    q: "Are materials included?",
    a: "Routine consumables (HVAC filters, batteries, smoke detector batteries) are included in Standard and Premium plans. Other materials are billed at cost.",
  },
  {
    q: "What if I need a repair that's not covered?",
    a: "No problem. Plan members receive 10–20% off all additional labor. We handle it at a priority rate.",
  },
  {
    q: "How do I schedule my visits?",
    a: "After signing up, your dedicated service manager will reach out to schedule your first visit within 5 business days.",
  },
  {
    q: "Can I upgrade or downgrade my plan?",
    a: "Yes. You can change your plan at any time. Upgrades take effect immediately; downgrades apply at the next billing cycle.",
  },
];

/* ── Component ─────────────────────────────────────────────── */
export default function MaintenancePage() {
  const [billing, setBilling] = useState<BillingCycle>("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function getPrice(plan: (typeof plans)[0]) {
    if (billing === "quarterly") return plan.quarterlyPrice;
    if (billing === "annual") return plan.annualPrice;
    return plan.monthlyPrice;
  }

  function getSavings(plan: (typeof plans)[0]) {
    if (billing === "quarterly") return Math.round((1 - plan.quarterlyPrice / plan.monthlyPrice) * 100);
    if (billing === "annual") return Math.round((1 - plan.annualPrice / plan.monthlyPrice) * 100);
    return 0;
  }

  return (
    <main className={styles.main}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <Image
          src="/images/maintenance-hero.jpg"
          alt="Pristine well-maintained home protected by The Anytime Handyman"
          fill
          className={styles.heroBg}
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroInner}>
            <div className={styles.heroLeft}>
              <p className={styles.heroEyebrow}>
                <span className={styles.eyebrowDot} />
                Signature Service
              </p>
              <h1 className={styles.heroTitle}>
                Your Home.<br />
                <span>Protected.</span>
              </h1>
              <p className={styles.heroSub}>
                Proactive maintenance plans that catch small problems before they become expensive disasters. One subscription, total peace of mind.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.heroStat}>
                  <span className={styles.heroStatNum}>$0</span>
                  <span className={styles.heroStatLabel}>Setup fee</span>
                </div>
                <div className={styles.heroStatDivider} />
                <div className={styles.heroStat}>
                  <span className={styles.heroStatNum}>24hr</span>
                  <span className={styles.heroStatLabel}>First response</span>
                </div>
                <div className={styles.heroStatDivider} />
                <div className={styles.heroStat}>
                  <span className={styles.heroStatNum}>100%</span>
                  <span className={styles.heroStatLabel}>Satisfaction guarantee</span>
                </div>
              </div>
            </div>
            <div className={styles.heroRight}>
              <Image
                src="/images/service-contracts.png"
                alt="Anytime Handyman service contract badge"
                width={320}
                height={320}
                className={styles.heroContractBadge}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Value Props ──────────────────────────────────────── */}
      <section className={styles.valueBar}>
        <div className="container">
          <div className={styles.valueGrid}>
            <div className={styles.valueItem}>
              <span className={styles.valueIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
              </span>
              <p className={styles.valueTitle}>Proactive, Not Reactive</p>
              <p className={styles.valueDesc}>We find problems before they find your wallet.</p>
            </div>
            <div className={styles.valueItem}>
              <span className={styles.valueIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
              </span>
              <p className={styles.valueTitle}>Written Reports</p>
              <p className={styles.valueDesc}>Every visit documented with a full inspection report.</p>
            </div>
            <div className={styles.valueItem}>
              <span className={styles.valueIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M13.7 2.3C13.3 1.9 12.7 2 12.3 2.4L9 5.7 8.3 5C7.9 4.6 7.3 4.6 6.9 5L3 8.9c-.4.4-.4 1 0 1.4l.7.7-2.3 2.3c-.4.4-.4 1 0 1.4l7.6 7.6c.4.4 1 .4 1.4 0l2.3-2.3.7.7c.4.4 1 .4 1.4 0l3.9-3.9c.4-.4.4-1 0-1.4l-.7-.7 3.3-3.3c.4-.4.4-1.1 0-1.4L13.7 2.3zm-3.2 15L4.1 11l1.6-1.6 6.4 6.4-1.6 1.5zm5-5L9.1 6l1.6-1.6 6.4 6.4-1.6 1.5z"/></svg>
              </span>
              <p className={styles.valueTitle}>Priority Repairs</p>
              <p className={styles.valueDesc}>Members jump the queue, guaranteed response times.</p>
            </div>
            <div className={styles.valueItem}>
              <span className={styles.valueIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
              </span>
              <p className={styles.valueTitle}>Members Save More</p>
              <p className={styles.valueDesc}>10-20% off all additional labor, every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────── */}
      <section className={styles.pricing} id="plans">
        <div className="container">
          <div className={styles.pricingHeader}>
            <p className={styles.sectionEyebrow}>
              <span className={styles.eyebrowDot} />
              Transparent Pricing
            </p>
            <h2 className={styles.pricingTitle}>
              Choose Your<br /><span>Coverage Level.</span>
            </h2>
            <p className={styles.pricingSubtitle}>
              Based on Austin-area market rates. No hidden fees. Cancel anytime.
            </p>

            {/* Billing toggle */}
            <div className={styles.billingWrapper}>
              <div className={styles.billingToggle}>
                <button
                  className={`${styles.billingBtn} ${billing === "monthly" ? styles.billingBtnActive : ""}`}
                  onClick={() => setBilling("monthly")}
                  id="billing-monthly"
                >
                  Monthly
                </button>
                <button
                  className={`${styles.billingBtn} ${billing === "quarterly" ? styles.billingBtnActive : ""}`}
                  onClick={() => setBilling("quarterly")}
                  id="billing-quarterly"
                >
                  Quarterly
                </button>
                <button
                  className={`${styles.billingBtn} ${billing === "annual" ? styles.billingBtnActive : ""}`}
                  onClick={() => setBilling("annual")}
                  id="billing-annual"
                >
                  Annual
                </button>
              </div>
              <div className={styles.billingSaveRow}>
                <span className={styles.billingSaveEmpty} />
                <span className={styles.billingSaveLabel}>Save 10%</span>
                <span className={styles.billingSaveLabel}>Save 20%</span>
              </div>
            </div>
          </div>

          {/* Plan cards */}
          <div className={styles.planGrid}>
            {plans.map((plan) => {
              const price = getPrice(plan);
              const savings = getSavings(plan);
              return (
                <div
                  key={plan.id}
                  className={`${styles.planCard} ${plan.highlight ? styles.planCardHighlight : ""}`}
                  id={`plan-${plan.id}`}
                >
                  {plan.badge && (
                    <div className={`${styles.planBadge} ${plan.highlight ? styles.planBadgeGold : styles.planBadgeSubtle}`}>
                      {plan.badge}
                    </div>
                  )}

                  <div className={`${styles.planTop} ${plan.id === "premium" ? styles.planTopPremium : ""}`}>
                    <h3 className={styles.planName}>{plan.name}</h3>
                    <p className={styles.planTagline}>{plan.tagline}</p>
                    <div className={styles.planPrice}>
                      <span className={styles.planPriceCurrency}>$</span>
                      <span className={styles.planPriceNum}>{price}</span>
                      <span className={styles.planPricePer}>/mo</span>
                    </div>
                    {plan.id === "premium" && (
                      <div className={styles.planBadgeRow}>
                        <span className={styles.planBadgeText}>Best Value</span>
                      </div>
                    )}
                    {savings > 0 && (
                      <p className={styles.planSavings}>You save {savings}% vs monthly</p>
                    )}
                    {billing === "annual" && (
                      <p className={styles.planBilled}>Billed ${price * 12}/year</p>
                    )}
                    {billing === "quarterly" && (
                      <p className={styles.planBilled}>Billed ${price * 3}/quarter</p>
                    )}
                    <p className={styles.planVisits}>{plan.visits}</p>
                  </div>

                  <a
                    href={businessInfo.contact.phoneHref}
                    className={`${styles.planCta} ${plan.highlight ? styles.planCtaGold : styles.planCtaOutline}`}
                    id={`plan-cta-${plan.id}`}
                  >
                    Get Started: {plan.name}
                  </a>

                  <ul className={styles.planFeatures}>
                    {plan.features.map((f) => (
                      <li key={f} className={styles.planFeatureItem}>
                        <span className={styles.planCheck}>✓</span>
                        {f}
                      </li>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <li key={f} className={`${styles.planFeatureItem} ${styles.planFeatureExcluded}`}>
                        <span className={styles.planCross}>✗</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <p className={styles.pricingDisclaimer}>
            * Prices shown are per month. Materials for routine consumables (filters, batteries) included in Standard &amp; Premium. All plans are month-to-month unless annual billing is selected. Pricing based on single-family homes up to 2,500 sq ft. Larger homes priced upon request.
          </p>
        </div>
      </section>

      {/* ── Comparison Banner ────────────────────────────────── */}
      <section className={styles.compBanner}>

        {/* Left pane — dark text */}
        <div className={styles.compLeft}>
          <div className={styles.compLeftContent}>
            <p className={styles.sectionEyebrow}>
              <span className={styles.eyebrowDot} />
              The Numbers
            </p>
            <h2 className={styles.compTitle}>
              The Average Home Repair<br />
              Costs <span>$1,500+</span> Unexpectedly.
            </h2>
            <p className={styles.compSub}>
              Our members catch issues early. A $29/month plan has prevented water heater failures, HVAC breakdowns, and roof leaks worth thousands. Prevention is always cheaper than repair.
            </p>
          </div>
        </div>

        {/* Right pane — image background + stats */}
        <div className={styles.compRight}>
          <Image
            src="/images/repair-bill-shock.jpg"
            alt="Homeowner shocked by a large AC repair bill"
            fill
            className={styles.compPhoto}
            sizes="50vw"
          />
          <div className={styles.compRightOverlay} />
          <div className={styles.compStats}>
            {[
              { stat: "$3,000+", label: "Average HVAC replacement" },
              { stat: "$8,000+", label: "Average water damage repair" },
              { stat: "$5,500+", label: "Average roof repair" },
              { stat: "$348/yr", label: "Essential plan cost" },
            ].map((s) => (
              <div key={s.label} className={styles.compStat}>
                <span className={styles.compStatNum}>{s.stat}</span>
                <span className={styles.compStatLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

      </section>


      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className={styles.faq}>
        <div className="container">
          <div className={styles.faqHeader}>
            <h2 className={styles.faqTitle}>Common Questions</h2>
          </div>
          <div className={styles.faqList}>
            {faqs.map((item, i) => (
              <div key={i} className={styles.faqItem} id={`faq-${i}`}>
                <button
                  className={styles.faqQuestion}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {item.q}
                  <span className={`${styles.faqIcon} ${openFaq === i ? styles.faqIconOpen : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <p className={styles.faqAnswer}>{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className={styles.ctaBg} />
        <div className={`container ${styles.ctaContent}`}>
          <h2 className={styles.ctaTitle}>
            Ready to Stop Worrying<br />About Your Home?
          </h2>
          <p className={styles.ctaSub}>
            Join Austin homeowners who sleep better knowing their home is covered.
          </p>
          <div className={styles.ctaRow}>
            <a href={businessInfo.contact.phoneHref} className="btn btn--primary" id="maintenance-cta-call">
              Call {businessInfo.contact.phone}
            </a>
            <Link href="/contact" className="btn btn--outline" id="maintenance-cta-quote">
              Get a Custom Quote →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
