import "./App.css";
import Loading from "./components/Loading";
import LoadingBarFBack from "./components/LoadingBarFBack";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import React, { lazy } from "react";

// Lazy-loaded components
const About = lazy(() => import("./components/About"));
const Tools = lazy(() => import("./components/Tools"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const TermsOfService = lazy(() => import("./components/TermsofService"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
import NotFound from "./components/NotFound"; // <-- Import your 404 page here

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const savedMode = localStorage.getItem("selectedTheme") || "dark";
    document.body.setAttribute("data-theme", savedMode);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <Header />
      <Hero />

      <Suspense fallback={<LoadingBarFBack />}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <About />
                <Tools />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />

          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
