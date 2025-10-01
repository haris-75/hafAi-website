import { Container, WorkCard } from "../components";

const Works = () => (
  <section id="works" className="py-16 lg:py-24 bg-bg">
    <Container>
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
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
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <WorkCard
          title="E-commerce Rebrand"
          tag="Branding"
          img="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop"
        />
        <WorkCard
          title="Fintech Web App"
          tag="Product"
          img="https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1600&auto=format&fit=crop"
        />
        <WorkCard
          title="SaaS Marketing"
          tag="Website"
          img="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
        />
      </div>
    </Container>
  </section>
);

export default Works;
