import { ArrowRight, Play, Star, Sparkles } from "lucide-react";
import { GradientText, Container } from "../components";

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

export default Hero;
