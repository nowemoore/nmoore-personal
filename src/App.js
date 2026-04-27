import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

import styles from "./pages.module.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./views/Home";
import About from "./views/About";
import Research from "./views/Research";
import Events from "./views/Events";
import Takes from "./views/Takes";
import Contact from "./views/Contact";

import BlogPostPage from "./blog/BlogPostPage";

const SECTION_TO_PATH = {
  home: "/",
  about: "/about",
  research: "/research",
  events: "/events",
  takes: "/takes",
  contact: "/contact",
};

const SECTION_IDS = ["home", "about", "research", "events", "takes", "contact"];

function MainPage({ setActiveSection }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isNavClickRef = useRef(false);
  const navClickTimeoutRef = useRef(null);
  const urlUpdateTimeoutRef = useRef(null);

  // Get element's top position relative to document
  const getOffsetTop = useCallback((element) => {
    let offsetTop = 0;
    while (element) {
      offsetTop += element.offsetTop;
      element = element.offsetParent;
    }
    return offsetTop;
  }, []);

  // Get current section based on scroll position
  const getCurrentSection = useCallback(() => {
    const scrollY = window.scrollY + window.innerHeight / 3;

    for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
      const el = document.getElementById(SECTION_IDS[i]);
      if (el) {
        const top = getOffsetTop(el);
        if (top <= scrollY) {
          return SECTION_IDS[i];
        }
      }
    }
    return "home";
  }, [getOffsetTop]);

  // Scroll to section on initial load based on URL
  useEffect(() => {
    const PATH_TO_SECTION = Object.fromEntries(
      Object.entries(SECTION_TO_PATH).map(([k, v]) => [v, k])
    );

    const section = PATH_TO_SECTION[location.pathname];
    if (section && section !== "home") {
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) {
          isNavClickRef.current = true;
          el.scrollIntoView({ behavior: "instant" });
          setActiveSection(section);
          setTimeout(() => { isNavClickRef.current = false; }, 1000);
        }
      }, 100);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentSection = getCurrentSection();
      
      // Always update active section for visual feedback
      setActiveSection(currentSection);

      // Skip URL update during nav click animation
      if (isNavClickRef.current) return;

      // Debounce URL update
      if (urlUpdateTimeoutRef.current) clearTimeout(urlUpdateTimeoutRef.current);
      urlUpdateTimeoutRef.current = setTimeout(() => {
        const nextPath = SECTION_TO_PATH[currentSection];
        if (nextPath && location.pathname !== nextPath) {
          navigate(nextPath, { replace: true });
        }
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Run once on mount to set initial state
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (urlUpdateTimeoutRef.current) clearTimeout(urlUpdateTimeoutRef.current);
    };
  }, [getCurrentSection, setActiveSection, navigate, location.pathname]);

  // Expose nav click handler and setActiveSection to window
  useEffect(() => {
    window.handleNavClick = () => {
      isNavClickRef.current = true;
      
      if (navClickTimeoutRef.current) {
        clearTimeout(navClickTimeoutRef.current);
      }
      
      navClickTimeoutRef.current = setTimeout(() => {
        isNavClickRef.current = false;
      }, 1000);
    };
    
    window.setActiveSection = setActiveSection;
    
    return () => {
      delete window.handleNavClick;
      delete window.setActiveSection;
      if (navClickTimeoutRef.current) {
        clearTimeout(navClickTimeoutRef.current);
      }
    };
  }, [setActiveSection]);

  return (
    <>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="research"><Research /></section>
      <section id="events"><Events /></section>
      <section id="takes"><Takes /></section>
      <section id="contact">
        <Contact />
        <Footer />
      </section>
    </>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className={styles.appShell}>
      <Router>
        <Navbar activeSection={activeSection} />

        <main className={styles.main}>
          <Routes>
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route
              path="*"
              element={<MainPage setActiveSection={setActiveSection} />}
            />
          </Routes>
        </main>
      </Router>
    </div>
  );
}