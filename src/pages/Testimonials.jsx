import { Container, TestimonialCard } from "../components";
import { motion, useReducedMotion } from "framer-motion";
const { div: MotionDiv } = motion;

const Testimonials = () => {
  const prefersReducedMotion = useReducedMotion();

  const header = {
    hidden: { opacity: 0, y: 10 },
    show: prefersReducedMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  const gridStagger = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: prefersReducedMotion
        ? {}
        : { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const cardIn = {
    hidden: { opacity: 0, y: 14, scale: 0.98 },
    show: prefersReducedMotion
      ? { opacity: 1, y: 0, scale: 1 }
      : {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.45, ease: "easeOut" },
        },
  };

  return (
    <section className="border-y border-border bg-muted py-16 lg:py-24">
      <Container>
        {/* Header */}
        <MotionDiv
          className="mx-auto max-w-2xl text-center"
          variants={header}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Social proof
          </p>
          <h2 className="mt-2 text-3xl font-black text-fg sm:text-4xl">
            What clients say
          </h2>
        </MotionDiv>

        {/* Cards */}
        <MotionDiv
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={gridStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <MotionDiv variants={cardIn}>
            <TestimonialCard
              quote="The team nailed our rebrand and web launch ahead of schedule."
              author="Alex Morgan"
              role="CMO, Flux"
            />
          </MotionDiv>

          <MotionDiv variants={cardIn}>
            <TestimonialCard
              quote="Pixel-perfect execution and excellent communication."
              author="Priya Patel"
              role="Founder, Senda"
            />
          </MotionDiv>

          <MotionDiv variants={cardIn}>
            <TestimonialCard
              quote="Traffic up 120% and signups doubled. Highly recommend!"
              author="Jonas Weber"
              role="VP Growth, Lumen"
            />
          </MotionDiv>
        </MotionDiv>
      </Container>
    </section>
  );
};

export default Testimonials;
