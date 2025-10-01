import CompanyLogo from "./CompanyLogo";
import Container from "./Container";
import { motion, useReducedMotion } from "framer-motion";
const { div: MotionDiv } = motion;

const Footer = () => {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    show: prefersReducedMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: prefersReducedMotion
        ? {}
        : { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  return (
    <footer className="border-t border-border bg-bg">
      <Container className="py-10">
        {/* Top grid */}
        <MotionDiv
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Brand */}
          <MotionDiv variants={fadeUp}>
            <a href="#">
              <CompanyLogo />
            </a>
            <p className="mt-3 text-sm text-muted-fg">
              Creative partner for fast-moving teams.
            </p>
          </MotionDiv>

          {/* Company */}
          <MotionDiv variants={fadeUp}>
            <h4 className="text-sm font-semibold text-fg">Company</h4>
            <ul className="mt-3 grid gap-2 text-sm text-muted-fg">
              <li>
                <a
                  href="#about"
                  className="hover:underline text-fg/90 hover:text-fg"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#works"
                  className="hover:underline text-fg/90 hover:text-fg"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="hover:underline text-fg/90 hover:text-fg"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:underline text-fg/90 hover:text-fg"
                >
                  Contact
                </a>
              </li>
            </ul>
          </MotionDiv>

          {/* Services */}
          <MotionDiv variants={fadeUp}>
            <h4 className="text-sm font-semibold text-fg">Services</h4>
            <ul className="mt-3 grid gap-2 text-sm text-muted-fg">
              <li>Brand Strategy</li>
              <li>UI/UX Design</li>
              <li>Web Development</li>
              <li>Growth & Analytics</li>
            </ul>
          </MotionDiv>

          {/* Newsletter */}
          <MotionDiv variants={fadeUp}>
            <h4 className="text-sm font-semibold text-fg">Newsletter</h4>
            <p className="mt-3 text-sm text-muted-fg">
              Get monthly insights and updates.
            </p>
            <div className="mt-3 flex items-center gap-2">
              <input
                className="w-full rounded-xl border border-border bg-accent px-3 py-2 text-sm text-fg placeholder:text-muted-fg/70 outline-none transition focus:ring-2 focus:ring-primary"
                placeholder="you@company.com"
              />
              <button className="rounded-xl bg-cta px-4 py-2 text-sm font-semibold text-cta-fg">
                Join
              </button>
            </div>
          </MotionDiv>
        </MotionDiv>

        {/* Bottom bar */}
        <MotionDiv
          className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-fg md:flex-row"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p>© {new Date().getFullYear()} Agenzio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline hover:text-fg">
              Privacy
            </a>
            <a href="#" className="hover:underline hover:text-fg">
              Terms
            </a>
            <a href="#" className="hover:underline hover:text-fg">
              Cookies
            </a>
          </div>
        </MotionDiv>
      </Container>
    </footer>
  );
};

export default Footer;
