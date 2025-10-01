import { useEffect, useState } from "react";
import { Menu, X, ChevronRight, Sun, Moon } from "lucide-react";
import Container from "./Container";
import CompanyLogo from "./CompanyLogo";

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
    <header className="sticky top-0 z-50 border-b border-border bg-panel/80 backdrop-blur supports-[backdrop-filter]:bg-panel/100">
      <Container className="flex h-16 items-center justify-between">
        <a href="#">
          <CompanyLogo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-fg transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="inline-flex items-center gap-2 rounded-xl border border-border px-3 py-2 text-sm font-medium text-fg shadow-sm transition-all hover:shadow cursor-pointer"
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
            className="hidden rounded-xl bg-cta px-4 py-2 text-sm font-semibold text-cta-fg shadow hover:opacity-90 md:inline-block"
          >
            Get a Quote
          </a>

          <button
            className="rounded-xl border border-border p-2 md:hidden text-fg"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? (
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            ) : (
              <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
            )}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-border bg-bg/95 p-4 md:hidden">
          <nav className="grid gap-2">
            <a
              href="#contact"
              className="rounded-lg bg-cta px-4 py-2 text-sm font-semibold text-cta-fg"
            >
              Get a Quote
            </a>
            <div className="my-2 h-px bg-border" />
            {["Services", "Work", "About", "Pricing", "Blog", "Contact"].map(
              (label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-fg hover:bg-accent"
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
