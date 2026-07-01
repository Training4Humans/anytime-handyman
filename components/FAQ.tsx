"use client";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { faqs } from "@/config/businessinfo";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={`section section--dark`} id="faq">
      <div className="container">
        <div className={styles.layout}>
          <AnimatedSection animation="fade-up" className={styles.left}>
            <p className="section-eyebrow">Got Questions?</p>
            <h2 className="section-title">
              Frequently<br /><span>Asked</span>
            </h2>
            <div className="gold-line" />
            <p>
              Everything you need to know before your first call.
              Don&apos;t see your question? Reach out, we&apos;re happy to help.
            </p>
          </AnimatedSection>

          <div className={styles.accordion}>
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} animation="fade-up" className={styles.item}>
                <button
                  className={`${styles.question} ${open === i ? styles.questionOpen : ""}`}
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span>{faq.question}</span>
                  <span className={`${styles.chevron} ${open === i ? styles.chevronOpen : ""}`}>
                    ↓
                  </span>
                </button>
                <div className={`${styles.answer} ${open === i ? styles.answerOpen : ""}`}>
                  <p>{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
