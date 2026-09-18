import React from "react";
import styles from "../pages.module.css";
import { CONTACTS } from "../data/work";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.contactBlock}>
        <h2 className={styles.sectionTitle}>Get in touch</h2>
        <div className={styles.contactBody}>
          <p className={styles.contactLead}>
            Always open to discussing research collaborations, community-building
            opportunities, or just connecting with fellow problem-solvers.
          </p>

          <div className={styles.contactGrid}>
            {CONTACTS.map((c) => (
              <a
                key={c.label}
                href={c.url}
                className={styles.contactIcon}
                aria-label={c.label}
                title={c.label}
                target={c.url.startsWith("http") ? "_blank" : undefined}
                rel={c.url.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <i className={c.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
