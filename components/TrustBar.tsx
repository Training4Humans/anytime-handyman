"use client";
import styles from "./TrustBar.module.css";

const items = [
  "5-Star Rated",
  "Licensed & Insured",
  "Est. 2019",
  "Austin Local",
  "Same-Day Available",
  "Satisfaction Guaranteed",
  "200+ Happy Clients",
  "Transparent Pricing",
  "No Job Too Small",
  "No Job Too Big",
];

export default function TrustBar() {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className={styles.bar}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.dot} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
