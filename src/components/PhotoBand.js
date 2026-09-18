import React from "react";
import styles from "./components.module.css";

// Full-width photo strip between sections. The image is pinned
// (background-attachment: fixed) so the page scrolls over it.
export default function PhotoBand({ image, topOnly = false }) {
  return (
    <div
      className={`${styles.band} ${topOnly ? styles.bandTopOnly : ""}`}
      style={{ backgroundImage: `url(${image})` }}
      role="presentation"
    />
  );
}
