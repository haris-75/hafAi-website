const Stat = ({ value, label }) => (
  <div className="rounded-2xl border p-6 text-center dark:border-neutral-800">
    <div className="text-3xl font-black">{value}</div>
    <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
      {label}
    </div>
  </div>
);

export default Stat;
