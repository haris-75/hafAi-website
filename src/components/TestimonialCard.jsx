import { Quote } from "lucide-react";

const TestimonialCard = ({ quote, author, role }) => (
  <div className="rounded-2xl border p-6 shadow-sm dark:border-neutral-800">
    <Quote className="h-6 w-6 opacity-60" />
    <p className="mt-3 text-neutral-700 dark:text-neutral-300">{quote}</p>
    <div className="mt-5">
      <div className="font-semibold">{author}</div>
      <div className="text-sm text-neutral-500">{role}</div>
    </div>
  </div>
);

export default TestimonialCard;
