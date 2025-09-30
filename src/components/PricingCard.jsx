import { CheckCircle2 } from "lucide-react";

const PricingCard = ({ name, price, features, featured }) => (
  <div
    className={`relative rounded-2xl border p-6 shadow-sm ${
      featured ? "ring-2 ring-indigo-500" : ""
    } dark:border-neutral-800`}
  >
    {featured && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow">
        Popular
      </span>
    )}
    <h3 className="text-lg font-bold">{name}</h3>
    <div className="mt-2 text-3xl font-black">
      ${price}
      <span className="text-base font-medium text-neutral-500">/mo</span>
    </div>
    <ul className="mt-4 grid gap-2 text-sm">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-5 w-5 text-indigo-600" /> {f}
        </li>
      ))}
    </ul>
    <a
      href="#contact"
      className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold ${
        featured ? "bg-indigo-600 text-white" : "border dark:border-neutral-700"
      }`}
    >
      Choose plan
    </a>
  </div>
);

export default PricingCard;
