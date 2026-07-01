"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { businessInfo, services } from "@/config/businessinfo";
import styles from "./page.module.css";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    address: "",
    timing: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("sending");
    // Simulate submission — wire up to a real backend/email service later
    await new Promise((r) => setTimeout(r, 1200));
    setFormState("success");
  }

  const serviceOptions = services.map((s) => s.title);

  return (
    <main className={styles.main}>

      {/* ── Page Header ─────────────────────────────────────── */}
      <div className={styles.pageHeader}>
        <Image
          src="/images/Flooring.jpg"
          alt="Premium flooring installation by The Anytime Handyman"
          fill
          className={styles.headerBg}
          priority
          sizes="100vw"
        />
        <div className={styles.headerOverlay} />
        <div className={`container ${styles.headerContent}`}>
          <p className={styles.headerEyebrow}>
            <span className={styles.eyebrowDot} />
            Free Estimates
          </p>
          <h1 className={styles.headerTitle}>
            Let&apos;s Talk About<br />
            <span>Your Project.</span>
          </h1>
          <p className={styles.headerSub}>
            We respond to every inquiry within 24 hours. Most calls answered same day.
          </p>
        </div>
      </div>

      {/* ── Split Layout ─────────────────────────────────────── */}
      <section className={styles.split}>

        {/* ── Left: Info Panel ───────────────────────────────── */}
        <div className={styles.infoPanel}>

          {/* Quick contact */}
          <div className={styles.infoBlock}>
            <p className={styles.infoLabel}>Call or Text</p>
            <a href={businessInfo.contact.phoneHref} className={styles.infoPhone}>
              {businessInfo.contact.phone}
            </a>
            <p className={styles.infoNote}>Mon – Sat, 7am – 7pm</p>
          </div>

          <div className={styles.infoDivider} />

          <div className={styles.infoBlock}>
            <p className={styles.infoLabel}>Email</p>
            <a href={`mailto:${businessInfo.contact.email}`} className={styles.infoEmail}>
              {businessInfo.contact.email}
            </a>
          </div>

          <div className={styles.infoDivider} />

          {/* Service area */}
          <div className={styles.infoBlock}>
            <p className={styles.infoLabel}>Service Area</p>
            <p className={styles.infoAreaText}>
              Austin, Pflugerville, Round Rock,<br />
              Cedar Park, Georgetown,<br />
              Kyle, Buda &amp; surrounding areas.
            </p>
          </div>

          <div className={styles.infoDivider} />

          {/* Trust signals */}
          <div className={styles.trustGrid}>
            {[
              { icon: "✓", label: "Licensed & Insured" },
              { icon: "✓", label: "Free Estimates" },
              { icon: "✓", label: "Satisfaction Guaranteed" },
              { icon: "✓", label: "No Surprise Fees" },
            ].map((t) => (
              <div key={t.label} className={styles.trustItem}>
                <span className={styles.trustCheck}>{t.icon}</span>
                <span className={styles.trustLabel}>{t.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.infoDivider} />

          {/* Testimonial snippet */}
          <div className={styles.testimonialSnippet}>
            <p className={styles.snippetStars}>★★★★★</p>
            <p className={styles.snippetText}>
              &ldquo;Called on a Tuesday, they were at my house Wednesday morning. Fixed our leaking pipe and patched the drywall same day. Absolute pros.&rdquo;
            </p>
            <p className={styles.snippetAuthor}>— Marcus T., Pflugerville</p>
          </div>

        </div>

        {/* ── Right: Contact Form ─────────────────────────────── */}
        <div className={styles.formPanel}>

          {formState === "success" ? (
            <div className={styles.successState}>
              <div className={styles.successIcon}>✓</div>
              <h2 className={styles.successTitle}>Message Received!</h2>
              <p className={styles.successSub}>
                We&apos;ll be in touch within 24 hours. For urgent needs, call us directly at{" "}
                <a href={businessInfo.contact.phoneHref} className={styles.successPhone}>
                  {businessInfo.contact.phone}
                </a>.
              </p>
              <button
                className={styles.successReset}
                onClick={() => { setFormState("idle"); setForm({ name: "", phone: "", email: "", service: "", address: "", timing: "", message: "" }); }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>Get a Free Estimate</h2>
                <p className={styles.formSub}>Fill out the form and we&apos;ll reach out to schedule your free, no-obligation estimate.</p>
              </div>

              <form onSubmit={handleSubmit} className={styles.form} id="contact-form">

                {/* Row 1: Name + Phone */}
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Full Name <span className={styles.required}>*</span></label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Smith"
                      value={form.name}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.label}>Phone Number <span className={styles.required}>*</span></label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="(512) 555-0100"
                      value={form.phone}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                </div>

                {/* Row 2: Email + Service */}
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email Address <span className={styles.required}>*</span></label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="service" className={styles.label}>Service Needed</label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={styles.select}
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                      <option value="Other">Other / Not Sure</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Address + Timing */}
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="address" className={styles.label}>Property Address</label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      placeholder="123 Main St, Austin, TX"
                      value={form.address}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="timing" className={styles.label}>Preferred Timing</label>
                    <select
                      id="timing"
                      name="timing"
                      value={form.timing}
                      onChange={handleChange}
                      className={styles.select}
                    >
                      <option value="">Select timeframe...</option>
                      <option value="asap">As soon as possible</option>
                      <option value="this-week">This week</option>
                      <option value="next-week">Next week</option>
                      <option value="this-month">This month</option>
                      <option value="flexible">I&apos;m flexible</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Project Description <span className={styles.required}>*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Describe what you need done. The more detail, the better we can prepare for your estimate..."
                    value={form.message}
                    onChange={handleChange}
                    className={styles.textarea}
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submitBtn}
                  id="contact-submit"
                  disabled={formState === "sending"}
                >
                  {formState === "sending" ? (
                    <span className={styles.sending}>Sending...</span>
                  ) : (
                    <>Request Free Estimate <span className={styles.arrow}>→</span></>
                  )}
                </button>

                <p className={styles.formDisclaimer}>
                  By submitting this form, you agree to be contacted by The Anytime Handyman regarding your inquiry. We never share your information.
                </p>

              </form>
            </>
          )}
        </div>
      </section>

    </main>
  );
}
