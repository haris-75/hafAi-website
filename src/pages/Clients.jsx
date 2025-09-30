import { Container } from "../components";

const Clients = () => (
  <section className="border-y bg-neutral-50 dark:bg-neutral-900/40 dark:border-neutral-800">
    <Container className="py-8">
      <p className="mb-6 text-center text-sm uppercase tracking-widest text-neutral-500">
        We’ve worked with teams at
      </p>
      <div className="grid grid-cols-2 items-center gap-6 opacity-70 sm:grid-cols-3 md:grid-cols-6">
        {["Shopify", "Notion", "Figma", "Framer", "Stripe", "GitHub"].map(
          (c) => (
            <div
              key={c}
              className="flex items-center justify-center rounded-xl bg-white p-4 shadow-sm ring-1 ring-neutral-100 dark:bg-neutral-900 dark:ring-neutral-800"
            >
              <span className="text-sm font-semibold">{c}</span>
            </div>
          )
        )}
      </div>
    </Container>
  </section>
);

export default Clients;
