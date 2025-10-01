const Stat = ({ value, label }) => (
  <div className="rounded-2xl border border-border bg-card p-6 text-center">
    <div className="text-3xl font-black text-fg">{value}</div>
    <div className="mt-1 text-sm text-muted-fg">{label}</div>
  </div>
);

export default Stat;
