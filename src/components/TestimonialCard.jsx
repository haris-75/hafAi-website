import { Quote } from "lucide-react";

const TestimonialCard = ({ quote, author, role }) => (
  <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
    <Quote className="h-6 w-6 text-muted-fg" />
    <p className="mt-3 text-fg/80">{quote}</p>

    <div className="mt-5">
      <div className="font-semibold text-fg">{author}</div>
      <div className="text-sm text-muted-fg">{role}</div>
    </div>
  </div>
);

export default TestimonialCard;
