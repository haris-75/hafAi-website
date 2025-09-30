import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Play,
  CheckCircle2,
  Rocket,
  Palette,
  Code2,
  LineChart,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Star,
  Quote,
  Calendar,
  Sun,
  Moon,
  Sparkles,
} from "lucide-react";

// Tailwind utility: gradient text helper
const GradientText = ({ children }) => (
  <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
    {children}
  </span>
);

const Container = ({ className = "", children }) => (
  <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const Topbar = () => (
  <div className="hidden border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-900/70 dark:border-neutral-800 md:block">
    <Container className="flex items-center justify-between py-2 text-sm">
      <div className="flex items-center gap-6 text-neutral-600 dark:text-neutral-300">
        <a
          href="tel:+1234567890"
          className="flex items-center gap-2 hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          <Phone className="h-4 w-4" /> +1 (234) 567‑890
        </a>
        <a
          href="mailto:hello@agenzio.co"
          className="flex items-center gap-2 hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          <Mail className="h-4 w-4" /> hello@agenzio.co
        </a>
      </div>
      <div className="flex items-center gap-4">
        <a href="#" aria-label="Twitter" className="hover:opacity-80">
          <Twitter className="h-4 w-4" />
        </a>
        <a href="#" aria-label="Instagram" className="hover:opacity-80">
          <Instagram className="h-4 w-4" />
        </a>
        <a href="#" aria-label="Facebook" className="hover:opacity-80">
          <Facebook className="h-4 w-4" />
        </a>
        <a href="#" aria-label="Linkedin" className="hover:opacity-80">
          <Linkedin className="h-4 w-4" />
        </a>
      </div>
    </Container>
  </div>
);

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

const Hero = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-500/10" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-200/40 blur-3xl dark:bg-fuchsia-500/10" />
    </div>
    <Container className="grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 lg:py-24">
      <div>
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide text-neutral-600 shadow-sm dark:text-neutral-300 dark:border-neutral-700">
          <Sparkles className="h-3.5 w-3.5" /> Award‑winning creative agency
        </p>
        <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
          We craft <GradientText>brands</GradientText> that people remember.
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-600 dark:text-neutral-300">
          Strategy, design, and development for ambitious teams. From identity
          to web, we build delightful products that convert.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-90"
          >
            Start a Project <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="#works"
            className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold hover:shadow dark:border-neutral-700"
          >
            View Work
          </a>
        </div>
        <div className="mt-8 flex items-center gap-6 text-sm text-neutral-500 dark:text-neutral-400">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <span>Trusted by 300+ clients</span>
        </div>
      </div>
      <div className="relative">
        <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-white shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
          <img
            src="https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1600&auto=format&fit=crop"
            alt="Hero preview"
            className="h-full w-full object-cover"
          />
        </div>
        <button className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold shadow backdrop-blur hover:opacity-95 dark:bg-neutral-900/90">
          <Play className="h-4 w-4" /> Watch Reel
        </button>
      </div>
    </Container>
  </section>
);

const Clients = () => (
  <section className="border-y bg-neutral-50 dark:bg-neutral-900/40 dark:border-neutral-800">
    <Container className="py-8">
      <p className="mb-6 text-center text-sm uppercase tracking-widest text-neutral-500">
        We’ve worked with teams at
      </p>
      <div className="grid grid-cols-2 items-center gap-6 opacity-70 sm:grid-cols-3 md:grid-cols-6">
        {["Shopify", "Notion", "Figma", "Framer", "Stripe", "GitHub"].map(
          (c) => (
            <div
              key={c}
              className="flex items-center justify-center rounded-xl bg-white p-4 shadow-sm ring-1 ring-neutral-100 dark:bg-neutral-900 dark:ring-neutral-800"
            >
              <span className="text-sm font-semibold">{c}</span>
            </div>
          )
        )}
      </div>
    </Container>
  </section>
);

const ServiceCard = ({ icon: Icon, title, desc }) => (
  <div className="group rounded-2xl border p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800">
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 group-hover:bg-indigo-100 dark:bg-indigo-500/10">
      <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
    </div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
      {desc}
    </p>
    <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:underline">
      Learn more <ArrowRight className="h-4 w-4" />
    </button>
  </div>
);

const Services = () => (
  <section id="services" className="py-16 lg:py-24">
    <Container>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
          What we do
        </p>
        <h2 className="mt-2 text-3xl font-black sm:text-4xl">
          Services tailored for growth
        </h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">
          Full‑stack support from strategy to scale. Choose a package or
          mix‑and‑match.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <ServiceCard
          icon={Rocket}
          title="Brand Strategy"
          desc="Positioning, messaging, and identity systems that resonate."
        />
        <ServiceCard
          icon={Palette}
          title="UI/UX Design"
          desc="Human‑centered design for web and mobile products."
        />
        <ServiceCard
          icon={Code2}
          title="Web Development"
          desc="High‑performance sites & apps with modern stacks."
        />
        <ServiceCard
          icon={LineChart}
          title="Growth & Analytics"
          desc="Data‑driven funnels, SEO, and conversion optimization."
        />
      </div>
    </Container>
  </section>
);

const Stat = ({ value, label }) => (
  <div className="rounded-2xl border p-6 text-center dark:border-neutral-800">
    <div className="text-3xl font-black">{value}</div>
    <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
      {label}
    </div>
  </div>
);

const About = () => (
  <section
    id="about"
    className="border-y bg-neutral-50 py-16 dark:bg-neutral-900/40 dark:border-neutral-800 lg:py-24"
  >
    <Container className="grid items-center gap-12 md:grid-cols-2">
      <div>
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
          alt="Team"
          className="aspect-video w-full rounded-2xl object-cover shadow"
        />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
          About us
        </p>
        <h2 className="mt-2 text-3xl font-black sm:text-4xl">
          A team of makers and doers
        </h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">
          We’re a distributed crew of designers, engineers, and strategists. We
          move fast, sweat details, and deliver business results.
        </p>
        <ul className="mt-4 grid gap-3">
          {[
            "Dedicated project lead",
            "Weekly demos & reports",
            "Design system deliverables",
            "Lighthouse‑optimized builds",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-indigo-600" /> {item}
            </li>
          ))}
        </ul>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Stat value="300+" label="Projects" />
          <Stat value="98%" label="Satisfaction" />
          <Stat value="7 yrs" label="Experience" />
          <Stat value="24/7" label="Support" />
        </div>
      </div>
    </Container>
  </section>
);

const WorkCard = ({ title, tag, img }) => (
  <div className="group overflow-hidden rounded-2xl border bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
    <div className="relative">
      <img
        src={img}
        alt={title}
        className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold backdrop-blur dark:bg-neutral-900/90">
        {tag}
      </span>
    </div>
    <div className="p-5">
      <h3 className="text-lg font-semibold">{title}</h3>
      <button className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:underline">
        View case study <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  </div>
);

const Works = () => (
  <section id="works" className="py-16 lg:py-24">
    <Container>
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
            Portfolio
          </p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl">Recent work</h2>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold hover:shadow dark:border-neutral-700"
        >
          All Projects
        </a>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <WorkCard
          title="E‑commerce Rebrand"
          tag="Branding"
          img="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop"
        />
        <WorkCard
          title="Fintech Web App"
          tag="Product"
          img="https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1600&auto=format&fit=crop"
        />
        <WorkCard
          title="SaaS Marketing"
          tag="Website"
          img="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
        />
      </div>
    </Container>
  </section>
);

const Testimonial = ({ quote, author, role }) => (
  <div className="rounded-2xl border p-6 shadow-sm dark:border-neutral-800">
    <Quote className="h-6 w-6 opacity-60" />
    <p className="mt-3 text-neutral-700 dark:text-neutral-300">{quote}</p>
    <div className="mt-5">
      <div className="font-semibold">{author}</div>
      <div className="text-sm text-neutral-500">{role}</div>
    </div>
  </div>
);

const Testimonials = () => (
  <section className="border-y bg-neutral-50 py-16 dark:bg-neutral-900/40 dark:border-neutral-800 lg:py-24">
    <Container>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
          Social proof
        </p>
        <h2 className="mt-2 text-3xl font-black sm:text-4xl">
          What clients say
        </h2>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Testimonial
          quote="The team nailed our rebrand and web launch ahead of schedule."
          author="Alex Morgan"
          role="CMO, Flux"
        />
        <Testimonial
          quote="Pixel‑perfect execution and excellent communication."
          author="Priya Patel"
          role="Founder, Senda"
        />
        <Testimonial
          quote="Traffic up 120% and signups doubled. Highly recommend!"
          author="Jonas Weber"
          role="VP Growth, Lumen"
        />
      </div>
    </Container>
  </section>
);

const PriceCard = ({ name, price, features, featured }) => (
  <div
    className={`relative rounded-2xl border p-6 shadow-sm ${
      featured ? "ring-2 ring-indigo-500" : ""
    } dark:border-neutral-800`}
  >
    {featured && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow">
        Popular
      </span>
    )}
    <h3 className="text-lg font-bold">{name}</h3>
    <div className="mt-2 text-3xl font-black">
      ${price}
      <span className="text-base font-medium text-neutral-500">/mo</span>
    </div>
    <ul className="mt-4 grid gap-2 text-sm">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-5 w-5 text-indigo-600" /> {f}
        </li>
      ))}
    </ul>
    <a
      href="#contact"
      className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold ${
        featured ? "bg-indigo-600 text-white" : "border dark:border-neutral-700"
      }`}
    >
      Choose plan
    </a>
  </div>
);

const Pricing = () => (
  <section id="pricing" className="py-16 lg:py-24">
    <Container>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
          Pricing
        </p>
        <h2 className="mt-2 text-3xl font-black sm:text-4xl">
          Simple, transparent plans
        </h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <PriceCard
          name="Starter"
          price={49}
          features={["Landing page", "Email support", "Basic analytics"]}
        />
        <PriceCard
          name="Growth"
          price={149}
          featured
          features={["Up to 5 pages", "Priority support", "Integrations"]}
        />
        <PriceCard
          name="Scale"
          price={399}
          features={[
            "Unlimited pages",
            "Dedicated team",
            "Custom integrations",
          ]}
        />
      </div>
    </Container>
  </section>
);

const BlogCard = ({ title, date, img }) => (
  <a
    href="#"
    className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
  >
    <img src={img} alt="Blog" className="h-48 w-full object-cover" />
    <div className="p-5">
      <div className="flex items-center gap-2 text-xs text-neutral-500">
        <Calendar className="h-4 w-4" />
        {date}
      </div>
      <h3 className="mt-2 text-lg font-semibold group-hover:underline">
        {title}
      </h3>
      <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600">
        Read article <ArrowRight className="h-4 w-4" />
      </span>
    </div>
  </a>
);

const Blog = () => (
  <section
    id="blog"
    className="border-y bg-neutral-50 py-16 dark:bg-neutral-900/40 dark:border-neutral-800 lg:py-24"
  >
    <Container>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
          Resources
        </p>
        <h2 className="mt-2 text-3xl font-black sm:text-4xl">
          Insights & stories
        </h2>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <BlogCard
          title="Design systems that scale"
          date="Sep 10, 2025"
          img="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop"
        />
        <BlogCard
          title="From MVP to product‑market fit"
          date="Aug 26, 2025"
          img="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
        />
        <BlogCard
          title="Core Web Vitals in 2025"
          date="Aug 2, 2025"
          img="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop"
        />
      </div>
    </Container>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-16 lg:py-24">
    <Container className="grid items-center gap-12 md:grid-cols-2">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
          Get in touch
        </p>
        <h2 className="mt-2 text-3xl font-black sm:text-4xl">
          Let’s build something great
        </h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">
          Tell us about your goals and we’ll craft a plan that fits. We
          typically respond within one business day.
        </p>
        <div className="mt-6 grid gap-4 text-sm">
          <a
            href="mailto:hello@agenzio.co"
            className="inline-flex items-center gap-2"
          >
            <Mail className="h-4 w-4" /> hello@agenzio.co
          </a>
          <a href="tel:+1234567890" className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4" /> +1 (234) 567‑890
          </a>
          <div className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4" /> 123 Creative Ave, Remote
          </div>
        </div>
      </div>
      <form className="rounded-2xl border bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium">Name</label>
            <input
              className="rounded-xl border px-3 py-2 outline-none transition focus:ring-2 focus:ring-indigo-500 dark:border-neutral-700 dark:bg-neutral-950"
              placeholder="Jane Doe"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="rounded-xl border px-3 py-2 outline-none transition focus:ring-2 focus:ring-indigo-500 dark:border-neutral-700 dark:bg-neutral-950"
              placeholder="jane@company.com"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Budget</label>
            <select className="rounded-xl border px-3 py-2 outline-none transition focus:ring-2 focus:ring-indigo-500 dark:border-neutral-700 dark:bg-neutral-950">
              <option>Under $5k</option>
              <option>$5k – $15k</option>
              <option>$15k – $50k</option>
              <option>$50k+</option>
            </select>
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Message</label>
            <textarea
              rows={4}
              className="rounded-xl border px-3 py-2 outline-none transition focus:ring-2 focus:ring-indigo-500 dark:border-neutral-700 dark:bg-neutral-950"
              placeholder="Tell us about your project..."
            />
          </div>
          <button className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90">
            Send message
          </button>
        </div>
      </form>
    </Container>
  </section>
);

const Footer = () => (
  <footer className="border-t bg-white dark:bg-neutral-900 dark:border-neutral-800">
    <Container className="py-10">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#" className="flex items-center gap-2 text-lg font-bold">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-white">
              A
            </span>
            Agenzio
          </a>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
            Creative partner for fast‑moving teams.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Company</h4>
          <ul className="mt-3 grid gap-2 text-sm text-neutral-600 dark:text-neutral-300">
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#works" className="hover:underline">
                Work
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Services</h4>
          <ul className="mt-3 grid gap-2 text-sm text-neutral-600 dark:text-neutral-300">
            <li>Brand Strategy</li>
            <li>UI/UX Design</li>
            <li>Web Development</li>
            <li>Growth & Analytics</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Newsletter</h4>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
            Get monthly insights and updates.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <input
              className="w-full rounded-xl border px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:border-neutral-700 dark:bg-neutral-950"
              placeholder="you@company.com"
            />
            <button className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-neutral-900">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-6 text-sm text-neutral-500 dark:border-neutral-800 md:flex-row">
        <p>© {new Date().getFullYear()} Agenzio. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </Container>
  </footer>
);

export default function Home() {
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
