import React, { useMemo, useState } from "react";
import styles from "../pages.module.css";
import LinkLabel from "../components/LinkLabel";
import { WORK, TAGS } from "../data/work";

const PER_PAGE = 6;

export default function Projects() {
  const [tag, setTag] = useState("All");
  const [page, setPage] = useState(1);
  // Accordion: at most one entry expanded at a time, keyed by title.
  const [openTitle, setOpenTitle] = useState(null);

  const filtered = useMemo(
    () => (tag === "All" ? WORK : WORK.filter((w) => w.tags.includes(tag))),
    [tag]
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, totalPages);
  const start = (current - 1) * PER_PAGE;
  const items = filtered.slice(start, start + PER_PAGE);

  const atFirst = current === 1;
  const atLast = current === totalPages;

  const selectTag = (t) => {
    setTag(t);
    goToPage(1);
  };

  // Changing page or filter collapses whatever was open.
  const goToPage = (n) => {
    setPage(n);
    setOpenTitle(null);
  };

  const toggle = (title) => setOpenTitle((prev) => (prev === title ? null : title));

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.projectsHeader}>
        <div className={styles.sectionIntro}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <p className={styles.sectionLead}>
            <em>Believe nothing you hear and a half of what you see.</em>{" "}
            <span className={styles.attribution}>~ E. A. Poe</span>
            <br />
            Research, community work and writing, newest first. Filter by what
            you came for.
          </p>
        </div>
      </div>

      <div className={styles.filters}>
        {TAGS.map((t) => (
          <button
            key={t}
            type="button"
            className={`${styles.filterChip} ${t === tag ? styles.active : ""}`}
            onClick={() => selectTag(t)}
            aria-pressed={t === tag}
          >
            {t}
          </button>
        ))}
      </div>

      <div className={styles.workList}>
        {items.map((it) => {
          const open = openTitle === it.title;
          return (
            <article key={it.title} className={`${styles.workRow} ${open ? styles.open : ""}`}>
              <button
                type="button"
                className={styles.workHeader}
                onClick={() => toggle(it.title)}
                aria-expanded={open}
              >
                <span className={styles.titleRow}>
                  <h3 className={styles.workTitle}>{it.title}</h3>
                  {it.tags.map((t) => (
                    <span key={t} className={styles.chip}>{t}</span>
                  ))}
                </span>
                <span className={styles.workMeta}>
                  <span className={styles.workDate}>{it.date}</span>
                  <i className={`ph ph-caret-down ${styles.workChevron}`} />
                </span>
              </button>

              <div className={styles.workBody} aria-hidden={!open}>
                <div className={styles.workBodyInner}>
                  <p className={styles.workDescription}>{it.description}</p>
                  <div className={styles.links}>
                    {it.links.map((l) => (
                      <LinkLabel
                        key={l.label + l.href}
                        href={l.href}
                        label={l.label}
                        tabIndex={open ? undefined : -1}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
        {/* Keep the list the same height on short pages so the pagination doesn't jump */}
        {Array.from({ length: PER_PAGE - items.length }, (_, i) => (
          <div key={`spacer-${i}`} className={styles.workSpacer} aria-hidden="true">
            <div className={styles.workHeader}>
              <span className={styles.titleRow}>
                <h3 className={styles.workTitle}>&nbsp;</h3>
                <span className={styles.chip}>&nbsp;</span>
              </span>
              <span className={styles.workMeta}>
                <span className={styles.workDate}>&nbsp;</span>
                <i className={`ph ph-caret-down ${styles.workChevron}`} />
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        <p className={styles.count}>
          {filtered.length === 0
            ? "Nothing here yet"
            : `${start + 1} to ${start + items.length} of ${filtered.length}`}
        </p>
        <div className={styles.pageArrows}>
          <button
            type="button"
            className={styles.pageArrow}
            onClick={() => goToPage(Math.max(1, current - 1))}
            disabled={atFirst}
            aria-label="Previous page"
          >
            <i className="ph ph-caret-left" />
          </button>
          <button
            type="button"
            className={styles.pageArrow}
            onClick={() => goToPage(Math.min(totalPages, current + 1))}
            disabled={atLast}
            aria-label="Next page"
          >
            <i className="ph ph-caret-right" />
          </button>
        </div>
      </div>
    </section>
  );
}
