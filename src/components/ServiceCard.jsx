import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
const { div: MotionDiv } = motion;

// eslint-disable-next-line no-unused-vars
const ServiceCard = ({ icon: Icon, title, desc, motionVariants }) => (
  <MotionDiv
    variants={motionVariants}
    className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
  >
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft/20 transition-colors group-hover:bg-brand-soft/30">
      <Icon className="h-6 w-6 text-primary" />
    </div>

    <h3 className="text-lg font-semibold text-fg">{title}</h3>
    <p className="mt-2 text-sm text-muted-fg">{desc}</p>

    <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
      Learn more <ArrowRight className="h-4 w-4" />
    </button>
  </MotionDiv>
);

export default ServiceCard;
