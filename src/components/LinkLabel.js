import React from "react";
import { Link } from "react-router-dom";
import styles from "./components.module.css";

// Small uppercase link with a leading link glyph. Blog links stay in the
// router; everything else (external URLs, PDFs, images) opens in a new tab.
export default function LinkLabel({ href, label, tabIndex }) {
  if (href.startsWith("/blog/")) {
    return (
      <Link to={href} className={styles.linkLabel} tabIndex={tabIndex}>
        <i className="ph ph-link" />
        {label}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={styles.linkLabel}
      tabIndex={tabIndex}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="ph ph-link" />
      {label}
    </a>
  );
}
