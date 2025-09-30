import { Container, TestimonialCard } from "../components";

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
        <TestimonialCard
          quote="The team nailed our rebrand and web launch ahead of schedule."
          author="Alex Morgan"
          role="CMO, Flux"
        />
        <TestimonialCard
          quote="Pixel‑perfect execution and excellent communication."
          author="Priya Patel"
          role="Founder, Senda"
        />
        <TestimonialCard
          quote="Traffic up 120% and signups doubled. Highly recommend!"
          author="Jonas Weber"
          role="VP Growth, Lumen"
        />
      </div>
    </Container>
  </section>
);

export default Testimonials;
