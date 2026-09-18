import React, { useMemo, useState } from "react";
import styles from "../pages.module.css";
import { LISTS } from "../data/lists";

export default function Lists() {
  const [openList, setOpenList] = useState("books");

  // Deal the lists into two columns by index parity.
  const columns = useMemo(() => {
    const cols = [[], []];
    LISTS.forEach((l, i) => cols[i % 2].push(l));
    return cols;
  }, []);

  const toggle = (id) => setOpenList((prev) => (prev === id ? null : id));

  return (
    <section id="lists" className={styles.listsSection}>
      <div className={styles.section}>
        <div className={styles.sectionIntro} style={{ marginBottom: "2.5rem" }}>
          <h2 className={styles.sectionTitle}>Lists</h2>
          <p className={styles.sectionLead} style={{ maxWidth: "34rem" }}>
            Here are some of my faves. Format inspired by Gavin.
          </p>
        </div>

        <div className={styles.listsGrid}>
          {columns.map((col, ci) => (
            <div key={ci} className={styles.listsCol}>
              {col.map((list) => {
                const open = openList === list.id;
                return (
                  <div key={list.id} className={styles.listItem}>
                    <button
                      type="button"
                      className={styles.listHeader}
                      onClick={() => toggle(list.id)}
                      aria-expanded={open}
                    >
                      <span className={styles.listTitleWrap}>
                        <i className={list.icon} />
                        <span className={styles.listTitle}>{list.title}</span>
                      </span>
                      <i
                        className={`ph ph-caret-down ${styles.listChevron} ${
                          open ? styles.open : ""
                        }`}
                      />
                    </button>

                    <div
                      className={styles.listBody}
                      style={{ maxHeight: open ? `${list.items.length * 3.5 + 2}rem` : 0 }}
                    >
                      <ul className={styles.listItems}>
                        {list.items.map((item, idx) => (
                          <li key={idx}>
                            <i className="ph ph-asterisk" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
