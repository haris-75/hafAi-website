import { CheckCircle2 } from "lucide-react";
import { Container, Stat } from "../components";

const About = () => (
  <section
    id="about"
    className="border-y border-border bg-muted py-16 lg:py-24"
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
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          About us
        </p>

        <h2 className="mt-2 text-3xl font-black text-fg sm:text-4xl">
          A team of makers and doers
        </h2>

        <p className="mt-3 text-muted-fg">
          We’re a distributed crew of designers, engineers, and strategists. We
          move fast, sweat details, and deliver business results.
        </p>

        <ul className="mt-4 grid gap-3">
          {[
            "Dedicated project lead",
            "Weekly demos & reports",
            "Design system deliverables",
            "Lighthouse-optimized builds",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-fg">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> {item}
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

export default About;
