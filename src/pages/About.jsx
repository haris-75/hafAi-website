import { CheckCircle2 } from "lucide-react";
import { Container, Stat } from "../components";
import { aboutSectionDetails } from "../constants";
import { motion, useReducedMotion } from "framer-motion";
const {
  div: MotionDiv,
  p: MotionP,
  h2: MotionH2,
  ul: MotionUl,
  li: MotionLi,
} = motion;

const About = () => {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
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

  return (
    <section
      id="about"
      className="border-y border-border bg-muted py-16 lg:py-24"
    >
      <Container>
        <div className="flex md:flex-row flex-col gap-8">
          {/* Image */}
          <MotionDiv
            className="flex"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
              alt="Team"
              className="aspect-video w-full rounded-2xl object-cover shadow"
            />
          </MotionDiv>

          {/* Text + list */}
          <MotionDiv
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <MotionP
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-widest text-primary"
            >
              About us
            </MotionP>

            <MotionH2
              variants={fadeUp}
              className="mt-2 text-3xl font-black text-fg sm:text-4xl"
            >
              Innovators in AI & Engineering
            </MotionH2>

            <MotionP variants={fadeUp} className="mt-3 text-muted-fg">
              We’re a distributed crew of AI specialists, full-stack developers,
              and automation experts. From chatbots to enterprise-grade web
              apps, we design, build, and deploy intelligent systems that
              transform businesses.
            </MotionP>

            <MotionUl variants={staggerContainer} className="mt-4 grid gap-3">
              {aboutSectionDetails.map((item, i) => (
                <MotionLi
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3 text-sm text-fg"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />{" "}
                  {item}
                </MotionLi>
              ))}
            </MotionUl>
          </MotionDiv>
        </div>

        {/* Stats */}
        <MotionDiv
          className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <MotionDiv variants={fadeUp}>
            <Stat value="300+" label="Projects" />
          </MotionDiv>
          <MotionDiv variants={fadeUp}>
            <Stat value="98%" label="Satisfaction" />
          </MotionDiv>
          <MotionDiv variants={fadeUp}>
            <Stat value="7 yrs" label="Experience" />
          </MotionDiv>
          <MotionDiv variants={fadeUp}>
            <Stat value="24/7" label="Support" />
          </MotionDiv>
        </MotionDiv>
      </Container>
    </section>
  );
};

export default About;
