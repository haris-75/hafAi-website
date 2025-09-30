import { ServiceCard, Container } from "../components";
import { Rocket, Palette, Code2, LineChart } from "lucide-react";

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

export default Services;
