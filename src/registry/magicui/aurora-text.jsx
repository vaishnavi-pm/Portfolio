const AuroraText = ({ children, className = "" }) => {
  return (
    <span
      className={`aurora-text ${className}`}
      style={{
        background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7)',
        backgroundSize: '400% 400%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        animation: 'aurora 3s ease-in-out infinite',
      }}
    >
      {children}
    </span>
  );
};

export { AuroraText };