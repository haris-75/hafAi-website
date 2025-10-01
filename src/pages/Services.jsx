import { ServiceCard, Container } from "../components";
import { services } from "../constants";
import { motion, useReducedMotion } from "framer-motion";
const { div: MotionDiv, p: MotionP, h2: MotionH2 } = motion;

const Services = () => {
  const prefersReducedMotion = useReducedMotion();

  const headerContainer = {
    hidden: { opacity: 0, y: 8 },
    show: prefersReducedMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  const cardsContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    show: prefersReducedMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
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
    <section id="services" className="py-16 lg:py-24 bg-bg">
      <Container>
        {/* Header */}
        <MotionDiv
          className="mx-auto max-w-2xl text-center"
          variants={headerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }} // trigger when ~35% visible
        >
          <MotionP
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-widest text-primary"
          >
            What we do
          </MotionP>

          <MotionH2
            variants={fadeUp}
            className="mt-2 text-3xl font-black text-fg sm:text-4xl"
          >
            Services tailored for growth
          </MotionH2>

          <MotionP variants={fadeUp} className="mt-3 text-muted-fg">
            Full-stack support from strategy to scale. Choose a package or
            mix-and-match.
          </MotionP>
        </MotionDiv>

        {/* Cards */}
        <MotionDiv
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={cardsContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }} // start a bit earlier for cards
        >
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              icon={service.icon}
              title={service.title}
              desc={service.desc}
              motionVariants={cardIn}
            />
          ))}
        </MotionDiv>
      </Container>
    </section>
  );
};

export default Services;
