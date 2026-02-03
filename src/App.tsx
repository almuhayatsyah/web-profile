import React from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Portfolio from "./components/sections/Portfolio";

// ...existing code...

import Skills from "./components/sections/Skills";


function App() {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );
  // ...existing code...

  React.useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // ...existing code...

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // ...existing code...

  return (
    <div className="App min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
