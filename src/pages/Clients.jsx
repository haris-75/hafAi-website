import { Container } from "../components";
import { clients } from "../constants";

const Clients = () => (
  <section className="border-y border-border bg-muted text-fg">
    <Container className="py-8">
      <p className="mb-6 text-center text-sm uppercase tracking-widest text-muted-fg">
        We’ve worked with teams at
      </p>

      <div className="grid grid-cols-2 items-center gap-6 opacity-70 sm:grid-cols-3 md:grid-cols-6">
        {clients.map((c) => (
          <div
            key={c}
            className="flex items-center justify-center rounded-xl bg-card p-4 shadow-sm ring-1 ring-border transition
           hover:shadow-md hover:bg-accent"
          >
            <span className="text-sm font-semibold">{c}</span>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Clients;
