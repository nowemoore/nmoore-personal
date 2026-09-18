import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import styles from "./pages.module.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PhotoBand from "./components/PhotoBand";

import Home from "./views/Home";
import Projects from "./views/Projects";
import Lists from "./views/Lists";
import Contact from "./views/Contact";

import BlogPostPage from "./blog/BlogPostPage";

const THEME_KEY = "nowemoore-theme";

function MainPage() {
  const { hash, key } = useLocation();

  // Scroll to the anchored section whenever the hash changes (nav clicks,
  // deep links, or coming back from a blog post).
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    const id = hash.slice(1);
    // Wait a frame so the sections exist after a route change.
    const raf = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    });
    return () => cancelAnimationFrame(raf);
  }, [hash, key]);

  return (
    <>
      <Home />
      <PhotoBand image={`${process.env.PUBLIC_URL}/images/aboutme.jpg`} />
      <Projects />
      <PhotoBand image={`${process.env.PUBLIC_URL}/images/neural.jpg`} topOnly />
      <Lists />
      <Contact />
    </>
  );
}

export default function App() {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem(THEME_KEY) === "dark";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    try {
      localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
    } catch {
      /* storage unavailable — theme just won't persist */
    }
  }, [dark]);

  return (
    <div className={styles.appShell}>
      <Router>
        <Navbar dark={dark} onToggleTheme={() => setDark((d) => !d)} />
        <main>
          <Routes>
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="*" element={<MainPage />} />
          </Routes>
        </main>
        <Footer dark={dark} />
      </Router>
    </div>
  );
}
