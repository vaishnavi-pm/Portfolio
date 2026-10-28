import { useTheme } from '../context/useTheme';

/**
 * Themed Card Component - Professional Glassmorphism Card
 * Usage: <ThemedCard>Your content</ThemedCard>
 */
export const ThemedCard = ({ children, className = '', style = {} }) => {
  const { colors } = useTheme();

  return (
    <div
      className={`glassmorphism rounded-xl p-6 ${className}`}
      style={{
        backgroundColor: colors.glassBg,
        borderColor: colors.glassBorder,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/**
 * Themed Button Component - Primary Style
 * Usage: <ThemedButton>Click me</ThemedButton>
 */
export const ThemedButton = ({ children, onClick, variant = 'primary', disabled = false, className = '', ...props }) => {
  const { colors } = useTheme();

  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return {
          backgroundColor: colors.secondary,
          color: colors.background,
          borderColor: colors.secondary,
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: colors.primary,
          border: `1px solid ${colors.primary}`,
        };
      default: // primary
        return {
          backgroundColor: colors.primary,
          color: colors.background,
          borderColor: colors.primary,
        };
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${className}`}
      style={{
        ...getVariantStyles(),
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * Themed Badge Component
 * Usage: <ThemedBadge>NEW</ThemedBadge>
 */
export const ThemedBadge = ({ children, variant = 'primary' }) => {
  const { colors } = useTheme();

  const getVariantStyles = () => {
    const styles = {
      primary: {
        backgroundColor: `${colors.primary}20`,
        color: colors.primary,
        borderColor: `${colors.primary}40`,
      },
      secondary: {
        backgroundColor: `${colors.secondary}20`,
        color: colors.secondary,
        borderColor: `${colors.secondary}40`,
      },
    };
    return styles[variant] || styles.primary;
  };

  return (
    <span
      className="px-3 py-1 rounded-full text-xs font-semibold border"
      style={getVariantStyles()}
    >
      {children}
    </span>
  );
};

/**
 * Themed Heading Component
 * Usage: <ThemedHeading level={1}>Title</ThemedHeading>
 */
export const ThemedHeading = ({ level = 1, children, className = '' }) => {
  const { colors } = useTheme();
  const Tag = `h${level}`;

  const sizeClasses = {
    1: 'text-4xl',
    2: 'text-3xl',
    3: 'text-2xl',
    4: 'text-xl',
    5: 'text-lg',
    6: 'text-base',
  };

  return (
    <Tag
      className={`font-bold ${sizeClasses[level]} ${className}`}
      style={{
        color: colors.textHeading,
      }}
    >
      {children}
    </Tag>
  );
};

/**
 * Themed Text Component
 * Usage: <ThemedText>Paragraph text</ThemedText>
 */
export const ThemedText = ({ children, variant = 'paragraph', className = '' }) => {
  const { colors } = useTheme();

  const color = variant === 'muted' ? colors.textParagraph : colors.textParagraph;

  return (
    <p
      className={`${className}`}
      style={{
        color,
      }}
    >
      {children}
    </p>
  );
};

/**
 * Themed Divider Component
 * Usage: <ThemedDivider />
 */
export const ThemedDivider = ({ vertical = false, className = '' }) => {
  const { colors } = useTheme();

  return (
    <div
      className={vertical ? `h-full w-px ${className}` : `w-full h-px ${className}`}
      style={{
        backgroundColor: colors.border,
      }}
    />
  );
};

/**
 * Get theme colors hook alternative
 * Usage: const themeStyle = useThemedStyles();
 */
export const useThemedStyles = () => {
  const { colors } = useTheme();

  return {
    card: {
      backgroundColor: colors.glassBg,
      borderColor: colors.glassBorder,
      color: colors.textParagraph,
    },
    heading: {
      color: colors.textHeading,
    },
    button: {
      backgroundColor: colors.primary,
      color: colors.background,
    },
    buttonSecondary: {
      backgroundColor: colors.secondary,
      color: colors.background,
    },
    border: {
      borderColor: colors.border,
    },
    text: {
      color: colors.textParagraph,
    },
  };
};
