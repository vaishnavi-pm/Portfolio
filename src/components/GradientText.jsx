const GradientText = ({
  children,
  colors = ["#06B6D4", "#8B5CF6", "#3B82F6"],
  className = "",
}) => {
  const gradientStyle = {
    background: `linear-gradient(90deg, ${colors.join(", ")})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  return (
    <h2 style={gradientStyle} className={className}>
      {children}
    </h2>
  );
};

export default GradientText;