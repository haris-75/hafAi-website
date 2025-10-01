const GradientText = ({ children }) => (
  <span className="bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to bg-clip-text text-transparent">
    {children}
  </span>
);

export default GradientText;
