import React, { useRef, useState } from "react";
import styles from "../pages.module.css";
import LinkLabel from "../components/LinkLabel";
import { CURRENTLY } from "../data/work";

export default function Home() {
  const [speaking, setSpeaking] = useState(false);
  const timeoutRef = useRef(null);

  // Play the recording; fall back to speech synthesis if it's missing.
  const playName = () => {
    if (speaking) return;
    setSpeaking(true);

    const done = () => {
      clearTimeout(timeoutRef.current);
      setSpeaking(false);
    };
    timeoutRef.current = setTimeout(done, 2500);

    const speak = () => {
      const synth = window.speechSynthesis;
      if (!synth) return done();
      synth.cancel();
      const u = new SpeechSynthesisUtterance("no maw");
      const gb = synth.getVoices().find((v) => /en-GB/i.test(v.lang));
      if (gb) u.voice = gb;
      u.lang = "en-GB";
      u.rate = 0.85;
      u.onend = done;
      u.onerror = done;
      synth.speak(u);
    };

    const audio = new Audio(`${process.env.PUBLIC_URL}/audio/nowe-moore.mp3`);
    audio.onended = done;
    audio.onerror = speak;
    audio.play().catch(speak);
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroGrid}>
        <div className={styles.heroIntro}>
          <h1 className={styles.heroName}>Nowe Moore</h1>

          <div className={styles.pronounce}>
            <p className={styles.ipa}>/nəʊ mɔː/</p>
            <button
              type="button"
              className={`${styles.speaker} ${speaking ? styles.speaking : ""}`}
              onClick={playName}
              aria-label="Hear how to pronounce Nowe Moore"
              title="Hear it"
            >
              <i className={speaking ? "ph ph-speaker-high" : "ph ph-speaker-low"} />
            </button>
          </div>

          <p className={styles.tagline}>Safer AI Futures  · Smarter Communities</p>
          <p className={styles.meta}>London, UK</p>

          <p className={styles.about}>
            Curious about the mind, human and artificial. I'm specifically
            interested in decision-making systems: what environments enable
            and break decision-making processes as we know them, and to what
            extent AI inherits human heuristics of "good choice". In addition
            to safe AI, I contribute to a range of activities that help build
            smarter and more productive communities: from creating pop-science
            content and courses to organising larger events across the
            academic community and beyond.
          </p>
        </div>

        <div className={styles.currently}>
          <div className={styles.currentlyLabel}>
            <span className={styles.dot} />
            <span>Hot Goss</span>
          </div>

          {CURRENTLY.map((t) => (
            <div key={t.title} className={styles.thread}>
              <div className={styles.threadHead}>
                <div className={styles.titleRow}>
                  <span className={styles.threadTitle}>{t.title}</span>
                  <span className={styles.chip}>{t.status}</span>
                </div>
                <span className={styles.workDate}>{t.date}</span>
              </div>
              <p className={styles.threadText}>{t.text}</p>
              {t.links.length > 0 && (
                <div className={styles.links}>
                  {t.links.map((l) => (
                    <LinkLabel key={l.href} href={l.href} label={l.label} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <a href="#projects" className={styles.scrollInvite} aria-label="Scroll to projects">
        <span className={styles.hairline} />
        <span className={styles.carets}>
          <i className="ph ph-caret-down" />
          <i className="ph ph-caret-down" />
          <i className="ph ph-caret-down" />
        </span>
        <span className={styles.hairline} />
      </a>
    </section>
  );
}
