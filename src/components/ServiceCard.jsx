import { ArrowRight } from "lucide-react";

// eslint-disable-next-line no-unused-vars
const ServiceCard = ({ icon: Icon, title, desc }) => (
  <div className="group rounded-2xl border p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800">
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 group-hover:bg-indigo-100 dark:bg-indigo-500/10">
      <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
    </div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
      {desc}
    </p>
    <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:underline">
      Learn more <ArrowRight className="h-4 w-4" />
    </button>
  </div>
);

export default ServiceCard;
