import { Container, PricingCard } from "../components";

const Pricing = () => (
  <section id="pricing" className="py-16 lg:py-24">
    <Container>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
          Pricing
        </p>
        <h2 className="mt-2 text-3xl font-black sm:text-4xl">
          Simple, transparent plans
        </h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <PricingCard
          name="Starter"
          price={49}
          features={["Landing page", "Email support", "Basic analytics"]}
        />
        <PricingCard
          name="Growth"
          price={149}
          featured
          features={["Up to 5 pages", "Priority support", "Integrations"]}
        />
        <PricingCard
          name="Scale"
          price={399}
          features={[
            "Unlimited pages",
            "Dedicated team",
            "Custom integrations",
          ]}
        />
      </div>
    </Container>
  </section>
);

export default Pricing;
