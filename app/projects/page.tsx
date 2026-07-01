"use client";

const HERO_IMAGES = [
  { src: "/projects/epoxy/epoxy-001/131942657_431859698177074_7707002505857034281_n.jpg", alt: "Epoxy floor" },
  { src: "/projects/deck/deck-002/139395627_446577686705275_1410206474486397585_n.jpg",   alt: "Deck build" },
  { src: "/projects/flooring/floor-001/668407527_1464726332109619_1539879138405178106_n.jpg", alt: "Flooring install" },
  { src: "/projects/cabinets/cabinets-001/100576630_267937207902658_3958186867232342016_n.jpg", alt: "Cabinet install" },
];

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./page.module.css";

/* ── Types ───────────────────────────────────────────────── */
interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  cover: string;
  images: string[];
  imageCount: number;
}

interface Category {
  id: string;
  slug: string;
  label: string;
  order: number;
  projectCount: number;
  projects: Project[];
}

interface Portfolio {
  generated: string;
  categoryCount: number;
  projectCount: number;
  imageCount: number;
  categories: Category[];
}

/* ── Component ───────────────────────────────────────────── */
export default function ProjectsPage() {
  const [portfolio, setPortfolio]           = useState<Portfolio | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeProject, setActiveProject]   = useState<Project | null>(null);
  const [lightbox, setLightbox]             = useState<{ project: Project; imgIndex: number } | null>(null);

  useEffect(() => {
    fetch("/portfolio.json")
      .then((r) => r.json())
      .then((data: Portfolio) => { setPortfolio(data); })
      .catch(() => setPortfolio({ generated: "", categoryCount: 0, projectCount: 0, imageCount: 0, categories: [] }));
  }, []);

  // Keyboard nav for lightbox
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (!lightbox) return;
    if (e.key === "Escape")     setLightbox(null);
    if (e.key === "ArrowRight") setLightbox((p) => p ? { ...p, imgIndex: Math.min(p.imgIndex + 1, p.project.images.length - 1) } : p);
    if (e.key === "ArrowLeft")  setLightbox((p) => p ? { ...p, imgIndex: Math.max(p.imgIndex - 1, 0) } : p);
  }, [lightbox]);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  // All projects flattened for "all" view
  const allProjects = portfolio?.categories.flatMap((c) => c.projects) ?? [];

  const visibleProjects = activeCategory === "all"
    ? allProjects
    : portfolio?.categories.find((c) => c.id === activeCategory)?.projects ?? [];

  const formatDate = (d: string) => {
    if (!d) return "";
    const [year, month] = d.split("-");
    if (!month) return year;
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <main className={styles.main}>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className={styles.hero}>
        {/* 4-panel collage */}
        <div className={styles.heroCollage}>
          {HERO_IMAGES.map((img) => (
            <div key={img.src} className={styles.heroPanel}>
              <Image src={img.src} alt={img.alt} fill className={styles.heroPanelImg} sizes="25vw" priority />
              <div className={styles.heroPanelOverlay} />
            </div>
          ))}
        </div>
        {/* Dark gradient over the whole thing */}
        <div className={styles.heroGradient} />
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.heroEyebrow}>
            <span className={styles.eyebrowDot} />
            Real Work. Real Results.
          </p>
          <h1 className={styles.heroTitle}>
            Our Project<br />
            <span>Gallery.</span>
          </h1>
          <p className={styles.heroSub}>
            Every project tells a story. Browse our completed work across Austin and surrounding areas.
          </p>
          {portfolio && (
            <p className={styles.heroCount}>
              {portfolio.categoryCount} categories &middot; {portfolio.projectCount} projects &middot; {portfolio.imageCount} photos
            </p>
          )}
        </div>
      </section>

      {/* ── Gallery ───────────────────────────────────────────── */}
      <section className={styles.gallery}>
        <div className="container">

          {/* Category tabs */}
          {portfolio && portfolio.categories.length > 0 && (
            <div className={styles.filterRow}>
              <button
                className={`${styles.filterBtn} ${activeCategory === "all" ? styles.filterBtnActive : ""}`}
                onClick={() => setActiveCategory("all")}
                id="filter-all"
              >
                All Projects
                <span className={styles.filterCount}>{portfolio.projectCount}</span>
              </button>
              {portfolio.categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.filterBtnActive : ""}`}
                  onClick={() => setActiveCategory(cat.id)}
                  id={`filter-${cat.id}`}
                >
                  {cat.label}
                  <span className={styles.filterCount}>{cat.projectCount}</span>
                </button>
              ))}
            </div>
          )}

          {/* Loading */}
          {!portfolio && (
            <div className={styles.loading}>
              <div className={styles.loadingDot} />
              <div className={styles.loadingDot} />
              <div className={styles.loadingDot} />
            </div>
          )}

          {/* Category sections when viewing "all" */}
          {portfolio && activeCategory === "all" && (
            <div className={styles.categorySections}>
              {portfolio.categories.map((cat) => (
                <div key={cat.id} className={styles.categorySection}>
                  <div className={styles.categoryHeader}>
                    <h2 className={styles.categoryTitle}>{cat.label}</h2>
                    <span className={styles.categoryCount}>
                      {cat.projectCount} project{cat.projectCount !== 1 ? "s" : ""}
                    </span>
                    {cat.projectCount > 3 && (
                      <button
                        className={styles.categoryShowAll}
                        onClick={() => setActiveCategory(cat.id)}
                      >
                        View all →
                      </button>
                    )}
                  </div>
                  <div className={styles.projectGrid}>
                    {cat.projects.slice(0, 3).map((project) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        categoryLabel={cat.label}
                        onClick={() => setActiveProject(project)}
                        formatDate={formatDate}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Single category view */}
          {portfolio && activeCategory !== "all" && (
            <div className={styles.projectGrid}>
              {visibleProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  categoryLabel={portfolio.categories.find(c => c.id === activeCategory)?.label ?? ""}
                  onClick={() => setActiveProject(project)}
                  formatDate={formatDate}
                />
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ── Project Detail Modal ──────────────────────────────── */}
      {activeProject && (
        <div
          className={styles.modal}
          onClick={(e) => e.target === e.currentTarget && setActiveProject(null)}
          role="dialog"
          aria-modal="true"
          id="project-modal"
        >
          <div className={styles.modalInner}>
            <button className={styles.modalClose} onClick={() => setActiveProject(null)} aria-label="Close">✕</button>

            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>{activeProject.title}</h2>
              {activeProject.description && <p className={styles.modalDesc}>{activeProject.description}</p>}
              {activeProject.date && <p className={styles.modalDate}>{formatDate(activeProject.date)}</p>}
            </div>

            <div className={styles.modalGrid}>
              {activeProject.images.map((img, i) => (
                <div
                  key={img}
                  className={styles.modalThumb}
                  onClick={() => setLightbox({ project: activeProject, imgIndex: i })}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setLightbox({ project: activeProject, imgIndex: i })}
                  id={`thumb-${activeProject.id}-${i}`}
                >
                  <Image src={img} alt={`${activeProject.title} photo ${i + 1}`} fill className={styles.modalThumbPhoto} sizes="25vw" />
                  <div className={styles.modalThumbOverlay}><span className={styles.modalThumbIcon}>⊕</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Lightbox ──────────────────────────────────────────── */}
      {lightbox && (
        <div
          className={styles.lightbox}
          onClick={(e) => e.target === e.currentTarget && setLightbox(null)}
          role="dialog"
          aria-modal="true"
          id="lightbox"
        >
          <button className={styles.lightboxClose} onClick={() => setLightbox(null)} aria-label="Close">✕</button>
          {lightbox.imgIndex > 0 && (
            <button className={`${styles.lightboxNav} ${styles.lightboxPrev}`} onClick={() => setLightbox((p) => p ? { ...p, imgIndex: p.imgIndex - 1 } : p)}>‹</button>
          )}
          <div className={styles.lightboxImg}>
            <Image src={lightbox.project.images[lightbox.imgIndex]} alt={`Photo ${lightbox.imgIndex + 1}`} fill className={styles.lightboxPhoto} sizes="100vw" priority />
          </div>
          {lightbox.imgIndex < lightbox.project.images.length - 1 && (
            <button className={`${styles.lightboxNav} ${styles.lightboxNext}`} onClick={() => setLightbox((p) => p ? { ...p, imgIndex: p.imgIndex + 1 } : p)}>›</button>
          )}
          <p className={styles.lightboxCounter}>{lightbox.imgIndex + 1} / {lightbox.project.images.length}</p>
        </div>
      )}

    </main>
  );
}

/* ── ProjectCard sub-component ────────────────────────────── */
function ProjectCard({
  project,
  categoryLabel,
  onClick,
  formatDate,
}: {
  project: Project;
  categoryLabel: string;
  onClick: () => void;
  formatDate: (d: string) => string;
}) {
  return (
    <div className={styles.projectCard} onClick={onClick} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && onClick()} id={`project-${project.id}`}>
      <div className={styles.cardImg}>
        <Image src={project.cover} alt={project.title} fill className={styles.cardPhoto} sizes="(max-width: 768px) 100vw, 33vw" />
        <div className={styles.cardOverlay}><span className={styles.cardViewBtn}>View Project</span></div>
        <div className={styles.cardImgCount}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
          {project.imageCount}
        </div>
      </div>
      <div className={styles.cardInfo}>
        <span className={styles.cardCategory}>{categoryLabel}</span>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        {project.date && <p className={styles.cardDate}>{formatDate(project.date)}</p>}
      </div>
    </div>
  );
}
