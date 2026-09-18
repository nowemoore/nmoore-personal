import React from "react";
import { Link } from "react-router-dom";
import styles from "./components.module.css";

import signature from "../signature.png";
import signaturelm from "../signature-lm.png";

const NAV_ITEMS = [
  { id: "projects", label: "Projects" },
  { id: "lists", label: "Lists" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ dark, onToggleTheme }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link to="/#home" className={styles.brand} aria-label="Back to top">
          <img
            src={dark ? signature : signaturelm}
            alt="Nowe Moore"
            className={styles.navSignature}
          />
        </Link>

        <nav className={styles.nav}>
          {NAV_ITEMS.map(({ id, label }) => (
            <Link key={id} to={`/#${id}`} className={styles.navLink}>
              {label}
            </Link>
          ))}

          <button
            type="button"
            className={styles.themeToggle}
            onClick={onToggleTheme}
            aria-label="Toggle colour scheme"
            aria-pressed={dark}
          >
            <span className={`${styles.toggleRail} ${dark ? styles.dark : ""}`}>
              <span className={styles.toggleKnob}>{dark ? "月" : "日"}</span>
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
