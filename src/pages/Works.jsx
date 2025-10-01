import { Container, WorkCard } from "../components";
import { motion, useReducedMotion } from "framer-motion";
const { div: MotionDiv } = motion;

const Works = () => {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    show: prefersReducedMotion
      ? { opacity: 1, y: 0 }
      : {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: "easeOut" },
        },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: prefersReducedMotion
        ? {}
        : { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const cardIn = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
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
    <section id="works" className="py-16 lg:py-24 bg-bg">
      <Container>
        {/* Header */}
        <MotionDiv
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Portfolio
            </p>
            <h2 className="mt-2 text-3xl font-black text-fg sm:text-4xl">
              Recent work
            </h2>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-semibold text-fg hover:shadow"
          >
            All Projects
          </a>
        </MotionDiv>

        {/* Cards */}
        <MotionDiv
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <MotionDiv variants={cardIn}>
            <WorkCard
              title="E-commerce Rebrand"
              tag="Branding"
              img="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop"
            />
          </MotionDiv>

          <MotionDiv variants={cardIn}>
            <WorkCard
              title="Fintech Web App"
              tag="Product"
              img="https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1600&auto=format&fit=crop"
            />
          </MotionDiv>

          <MotionDiv variants={cardIn}>
            <WorkCard
              title="SaaS Marketing"
              tag="Website"
              img="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
            />
          </MotionDiv>
        </MotionDiv>
      </Container>
    </section>
  );
};

export default Works;
