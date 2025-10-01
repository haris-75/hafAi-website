import { ArrowRight, Calendar } from "lucide-react";

const BlogCard = ({ title, date, img }) => (
  <a
    href="#"
    className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
  >
    <img src={img} alt="Blog" className="h-48 w-full object-cover" />

    <div className="p-5">
      <div className="flex items-center gap-2 text-xs text-muted-fg">
        <Calendar className="h-4 w-4" />
        {date}
      </div>

      <h3 className="mt-2 text-lg font-semibold text-fg group-hover:underline">
        {title}
      </h3>

      <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">
        Read article <ArrowRight className="h-4 w-4" />
      </span>
    </div>
  </a>
);

export default BlogCard;
