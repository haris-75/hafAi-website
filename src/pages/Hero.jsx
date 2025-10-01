import { Sparkles, ArrowRight, Star, Play } from "lucide-react";
import { Container, GradientText } from "../components";
import { motion, useReducedMotion } from "framer-motion";
const {
  div: MotionDiv,
  p: MotionP,
  h1: MotionH1,
  button: MotionButton,
} = motion;

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  // Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { staggerChildren: 0.12, delayChildren: 0.15, duration: 0.3 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    show: prefersReducedMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: prefersReducedMotion
      ? { opacity: 1 }
      : { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const imageReveal = {
    hidden: { opacity: 0, scale: 0.98 },
    show: prefersReducedMotion
      ? { opacity: 1, scale: 1 }
      : {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.6, ease: "easeOut" },
        },
  };

  return (
    <section className="relative overflow-hidden bg-bg">
      {/* background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-soft/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-highlight-soft/40 blur-3xl" />
      </div>

      <Container className="grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 lg:py-24">
        {/* Left column */}
        <MotionDiv
          variants={container}
          initial="hidden"
          animate="show" // runs once on first mount
        >
          <MotionP
            variants={fadeUp}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium tracking-wide text-muted-fg shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5" /> Award-winning creative agency
          </MotionP>

          <MotionH1
            variants={fadeUp}
            className="text-4xl font-black leading-tight text-fg sm:text-5xl lg:text-6xl"
          >
            We build intelligent <GradientText>systems</GradientText> that
            scale.
          </MotionH1>

          <MotionP variants={fadeUp} className="mt-4 max-w-2xl text-muted-fg">
            From chatbots to full-stack apps, we deliver AI-driven solutions
            that automate, optimize, and grow your business.
          </MotionP>

          <MotionDiv
            variants={fadeUp}
            className="mt-6 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-fg shadow hover:opacity-90"
            >
              Start a Project <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#works"
              className="inline-flex items-center justify-center rounded-xl border border-border px-5 py-3 text-sm font-semibold text-fg hover:shadow"
            >
              View Work
            </a>
          </MotionDiv>

          <MotionDiv
            variants={fadeIn}
            className="mt-8 flex items-center gap-6 text-sm text-muted-fg"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-warning text-warning" />
              ))}
            </div>
            <span>Trusted by 300+ clients</span>
          </MotionDiv>
        </MotionDiv>

        {/* Right column (image + CTA) */}
        <MotionDiv
          className="relative"
          variants={imageReveal}
          initial="hidden"
          animate="show"
        >
          <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
            <img
              src="/hero.svg"
              alt="Hero preview"
              className="h-full w-full object-cover"
            />
          </div>

          <MotionButton
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full bg-card/90 px-4 py-2 text-sm font-semibold text-fg shadow backdrop-blur hover:opacity-95 cursor-pointer"
          >
            <Play className="h-4 w-4" /> Watch Reel
          </MotionButton>
        </MotionDiv>
      </Container>
    </section>
  );
};

export default Hero;
