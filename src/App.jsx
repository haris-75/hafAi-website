import { useState, useEffect } from "react";

import Hero from "./pages/Hero";
import { Topbar, Navbar, Footer } from "./components";
import Clients from "./pages/Clients";
import Services from "./pages/Services";
import About from "./pages/About";
import Works from "./pages/Works";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";

export default function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-white">
      <Topbar />
      <Navbar
        onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
        theme={theme}
      />
      <main>
        <Hero />
        <Clients />
        <Services />
        <About />
        <Works />
        <Testimonials />
        <Pricing />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
