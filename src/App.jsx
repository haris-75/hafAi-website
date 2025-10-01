import { useState, useEffect } from "react";

import Hero from "./pages/Hero";
import { Topbar, Navbar, Footer } from "./components";
import Clients from "./pages/Clients";
import Services from "./pages/Services";
import About from "./pages/About";
import Works from "./pages/Works";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
// import Pricing from "./pages/Pricing";
// import Blog from "./pages/Blog";

export default function App() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const el = document.documentElement; // <html>
    if (theme === "dark") el.classList.add("dark");
    else el.classList.remove("dark");
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
        {/* <Pricing />
        <Blog /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
