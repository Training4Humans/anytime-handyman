#!/usr/bin/env node
/**
 * generate-portfolio.js
 * ─────────────────────────────────────────────────────────────
 * Two-level folder structure:
 *
 *   public/projects/
 *     [category]/              ← category folder (e.g. "fence", "epoxy", "deck")
 *       [project-name]/        ← individual project folder
 *         image1.jpg
 *         image2.jpg
 *         project.json         ← optional project metadata
 *       [another-project]/
 *         ...
 *     [another-category]/
 *       ...
 *
 * Outputs: public/portfolio.json
 *
 * Usage:
 *   node scripts/generate-portfolio.js
 *   npm run portfolio
 *
 * Adding a new project:
 *   1. Inside public/projects/, find or create a category folder
 *      (e.g. "fence", "epoxy", "deck", "interior", "pool")
 *   2. Inside that category, create a project folder
 *      (e.g. "backyard-fence-2024", "garage-epoxy-march")
 *   3. Drop images into that project folder
 *   4. Optionally add project.json with metadata (see schema below)
 *   5. Run: npm run portfolio
 *
 * project.json schema (all optional):
 *   {
 *     "title":       "Cedar Fence Stain & Seal",
 *     "description": "Full stain and seal of 200ft cedar privacy fence.",
 *     "date":        "2024-03",
 *     "coverIndex":  0,
 *     "tags":        ["fence", "staining", "cedar"],
 *     "techniques":  ["Pressure washing", "Oil-based stain application", "Sealing"]
 *   }
 *
 * category.json (place in the category folder, all optional):
 *   {
 *     "label": "Fencing",
 *     "order": 1
 *   }
 */

const fs   = require("fs");
const path = require("path");

const PROJECTS_DIR = path.join(__dirname, "..", "public", "projects");
const OUTPUT_FILE  = path.join(__dirname, "..", "public", "portfolio.json");
const IMAGE_EXTS   = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

// ── Helpers ──────────────────────────────────────────────────

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function titleFromSlug(slug) {
  return slug
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function readJson(filePath) {
  try { return JSON.parse(fs.readFileSync(filePath, "utf8")); }
  catch { return {}; }
}

function getImages(dir) {
  return fs
    .readdirSync(dir)
    .filter((f) => IMAGE_EXTS.has(path.extname(f).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

// ── Main ─────────────────────────────────────────────────────

if (!fs.existsSync(PROJECTS_DIR)) {
  fs.mkdirSync(PROJECTS_DIR, { recursive: true });
  console.log("📁  Created public/projects/");
}

// Scan category folders (top-level)
const categoryFolders = fs
  .readdirSync(PROJECTS_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .sort((a, b) => a.name.localeCompare(b.name));

const categories = [];
let totalProjects = 0;
let totalImages   = 0;

for (const catDir of categoryFolders) {
  const catPath   = path.join(PROJECTS_DIR, catDir.name);
  const catMeta   = fs.existsSync(path.join(catPath, "category.json"))
    ? readJson(path.join(catPath, "category.json"))
    : {};

  const catLabel  = catMeta.label ?? titleFromSlug(catDir.name);
  const catOrder  = catMeta.order ?? 99;

  // Scan project folders (second level)
  const projectFolders = fs
    .readdirSync(catPath, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name));

  if (projectFolders.length === 0) {
    console.warn(`⚠️   Category "${catDir.name}" has no project subfolders — skipping`);
    continue;
  }

  const projects = [];

  for (const projDir of projectFolders) {
    const projPath  = path.join(catPath, projDir.name);
    const meta      = fs.existsSync(path.join(projPath, "project.json"))
      ? readJson(path.join(projPath, "project.json"))
      : {};

    const diskImages = getImages(projPath);

    if (diskImages.length === 0) {
      console.warn(`  ⚠️  No images in ${catDir.name}/${projDir.name} — skipping`);
      continue;
    }

    // Detect role from filename suffix:
    //   001_deck_a.jpg  → after  (shown first, eligible as cover)
    //   002_deck_b.jpg  → before (never the cover, shown at end)
    //   anything else   → after  (default)
    function roleFromFilename(filename) {
      const base = path.basename(filename, path.extname(filename)).toLowerCase();
      if (base.endsWith("_b")) return "before";
      return "after";
    }

    const imageList = diskImages
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((f) => ({ file: f, isBefore: roleFromFilename(f) === "before" }));

    // If manifest is present, use it to override order/role (power-user escape hatch)
    let finalList = imageList;
    if (Array.isArray(meta.images) && meta.images.length > 0) {
      const manifestFiles = new Set(meta.images.map((e) => e.file));
      const manifestList  = meta.images
        .filter((e) => diskImages.includes(e.file))
        .map((e) => ({ file: e.file, isBefore: e.role === "before" }));
      const extras = imageList.filter((e) => !manifestFiles.has(e.file));
      finalList = [...manifestList, ...extras];
    }

    // Cover = first after image
    const coverFile = (finalList.find((e) => !e.isBefore) ?? finalList[0]).file;

    const project = {
      id:            `${slugify(catDir.name)}--${slugify(projDir.name)}`,
      slug:          projDir.name,
      title:         meta.title         ?? titleFromSlug(projDir.name),
      description:   meta.description   ?? "",
      date:          meta.date          ?? "",
      location:      meta.location      ?? "",
      tags:          meta.tags          ?? [],
      techniques:    meta.techniques    ?? [],
      materials:     meta.materials     ?? [],
      imagePosition: meta.imagePosition ?? "center",
      cover:         `/projects/${catDir.name}/${projDir.name}/${coverFile}`,
      images:        finalList.map((e) => ({
        src:      `/projects/${catDir.name}/${projDir.name}/${e.file}`,
        isBefore: e.isBefore,
      })),
      imageCount:    finalList.length,
    };

    projects.push(project);
    totalImages += finalList.length;
    const beforeCount = finalList.filter((e) => e.isBefore).length;
    const beforeNote  = beforeCount > 0 ? `, ${beforeCount} before` : "";
    console.log(`  ✓  [${catLabel}] ${project.title}  (${project.imageCount} photo${project.imageCount !== 1 ? "s" : ""}${beforeNote})`);
  }

  if (projects.length === 0) continue;

  // Sort projects by date desc, then title
  projects.sort((a, b) => {
    if (a.date && b.date) return b.date.localeCompare(a.date);
    if (a.date) return -1;
    if (b.date) return 1;
    return a.title.localeCompare(b.title);
  });

  categories.push({
    id:           slugify(catDir.name),
    slug:         catDir.name,
    label:        catLabel,
    order:        catOrder,
    projectCount: projects.length,
    projects,
  });

  totalProjects += projects.length;
}

// Sort categories by order, then label
categories.sort((a, b) => a.order - b.order || a.label.localeCompare(b.label));

const output = {
  generated:     new Date().toISOString(),
  categoryCount: categories.length,
  projectCount:  totalProjects,
  imageCount:    totalImages,
  categories,
};

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));
console.log(`\n✅  portfolio.json — ${categories.length} categories, ${totalProjects} projects, ${totalImages} photos`);
