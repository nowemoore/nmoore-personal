import React from "react";
import styles from "./components.module.css";

import signature from "../signature.png";
import signaturelm from "../signature-lm.png";

export default function Footer({ dark }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <img
          src={dark ? signature : signaturelm}
          alt="Nowe Moore"
          className={styles.footerSignature}
        />
        <p className={styles.footerMeta}>© {new Date().getFullYear()} · London, UK</p>
      </div>
    </footer>
  );
}
