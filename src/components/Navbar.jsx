import Container from "./Container";

import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, Sun, Moon } from "lucide-react";

const Navbar = ({ onToggleTheme, theme }) => {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#works", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#pricing", label: "Pricing" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const onScroll = () => setOpen(false);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-900/70 dark:border-neutral-800">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-bold tracking-tight"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm">
            A
          </span>
          Agenzio
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium shadow-sm hover:shadow transition-all dark:border-neutral-700"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
            <span className="hidden sm:inline">
              {theme === "dark" ? "Light" : "Dark"} Mode
            </span>
          </button>
          <a
            href="#contact"
            className="hidden rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90 dark:bg-white dark:text-neutral-900 md:inline-block"
          >
            Get a Quote
          </a>
          <button
            className="rounded-xl border p-2 md:hidden dark:border-neutral-700"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>
      {/* Mobile menu */}
      {open && (
        <div className="border-t bg-white/95 p-4 dark:bg-neutral-900/95 dark:border-neutral-800 md:hidden">
          <nav className="grid gap-2">
            <a
              href="#contact"
              className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-neutral-900"
            >
              Get a Quote
            </a>
            <div className="h-px bg-neutral-200 dark:bg-neutral-800 my-2" />
            {["Services", "Work", "About", "Pricing", "Blog", "Contact"].map(
              (label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  {label}
                  <ChevronRight className="h-4 w-4" />
                </a>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
