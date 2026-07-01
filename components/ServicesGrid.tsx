import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { services } from "@/config/businessinfo";
import styles from "./ServicesGrid.module.css";

const featured = services.filter((s) => s.featured);

export default function ServicesGrid() {
  return (
    <section className={styles.section}>
      {/* ─── Editorial List ─────────────────────────────────── */}
      <div className={styles.servicesWrap}>
        <div className="container">
          <AnimatedSection animation="fade-up" className={styles.header}>
            <div className={styles.headerLeft}>
              <p className="section-eyebrow">What We Do</p>
              <h2 className="section-title" style={{ marginBottom: 0 }}>
                Our Services
              </h2>
            </div>
            <div className={styles.headerRight}>
              <Link href="/services" className={styles.viewAll}>
                View All Services <span>→</span>
              </Link>
            </div>
          </AnimatedSection>

          <div className={styles.serviceList}>
            {featured.map((service, i) => (
              <AnimatedSection key={service.id} animation="fade-up" className="">
                <Link
                  href={`/services#${service.id}`}
                  className={styles.serviceRow}
                >
                  <span className={styles.serviceNum}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className={styles.serviceMain}>
                    <span className={styles.serviceName}>{service.title}</span>
                    <span className={styles.serviceTag}>
                      {service.category === "interior" ? "Interior" :
                       service.category === "exterior" ? "Exterior" : "Specialty"}
                    </span>
                  </div>
                  <span className={styles.serviceArrow}>→</span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
