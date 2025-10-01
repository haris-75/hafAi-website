import { ArrowRight } from "lucide-react";

const WorkCard = ({ title, tag, img }) => (
  <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
    <div className="relative">
      <img
        src={img}
        alt={title}
        className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <span className="absolute left-3 top-3 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-fg backdrop-blur">
        {tag}
      </span>
    </div>

    <div className="p-5">
      <h3 className="text-lg font-semibold text-fg">{title}</h3>
      <button className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
        View case study <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  </div>
);

export default WorkCard;
