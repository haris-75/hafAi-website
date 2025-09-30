import { ArrowRight } from "lucide-react";

const WorkCard = ({ title, tag, img }) => (
  <div className="group overflow-hidden rounded-2xl border bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
    <div className="relative">
      <img
        src={img}
        alt={title}
        className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold backdrop-blur dark:bg-neutral-900/90">
        {tag}
      </span>
    </div>
    <div className="p-5">
      <h3 className="text-lg font-semibold">{title}</h3>
      <button className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:underline">
        View case study <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  </div>
);

export default WorkCard;
