import React, { useEffect, useState } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Portfolio from "./components/sections/Portfolio";

import { ClipLoader } from "react-spinners";
import Skills from "./components/sections/Skills";

import DigitalServices from "./components/sections/DigitalServices";

function App() {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    // Simulasi loading, ganti sesuai kebutuhan (misal: fetch data)
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-200 z-50">
        <ClipLoader color="#7c3aed" size={72} />
        <div className="mt-8 text-xl font-semibold text-blue-700 animate-pulse tracking-wide">
          Almuhayatsyah Portfolio...
        </div>
      </div>
    );
  }

  return (
    <div className="App min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <DigitalServices />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
