import { CheckCircle2 } from "lucide-react";

const PricingCard = ({ name, price, features, featured }) => (
  <div
    className={`relative rounded-2xl border border-border bg-card p-6 shadow-sm ${
      featured ? "ring-2 ring-primary" : ""
    }`}
  >
    {featured && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-fg shadow">
        Popular
      </span>
    )}

    <h3 className="text-lg font-bold text-fg">{name}</h3>

    <div className="mt-2 text-3xl font-black text-fg">
      ${price}
      <span className="ml-1 text-base font-medium text-muted-fg">/mo</span>
    </div>

    <ul className="mt-4 grid gap-2 text-sm">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2 text-fg">
          <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> {f}
        </li>
      ))}
    </ul>

    <a
      href="#contact"
      className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition ${
        featured
          ? "bg-primary text-primary-fg hover:opacity-90"
          : "border border-border text-fg hover:bg-accent"
      }`}
    >
      Choose plan
    </a>
  </div>
);

export default PricingCard;
