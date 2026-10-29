import { useTheme } from '../context/useTheme';

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
