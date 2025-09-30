const GradientText = ({ children }) => (
  <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
    {children}
  </span>
);

export default GradientText;
