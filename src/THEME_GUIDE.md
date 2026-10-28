# Theme System Implementation Guide

## Overview
Your portfolio now has a professional, dual-theme system with light and dark modes. The theme automatically persists to localStorage and respects system preferences on first visit.

## Quick Start for Components

### 1. Import useTheme Hook
```jsx
import { useTheme } from '../context/useTheme';
```

### 2. Use in Your Component
```jsx
const MyComponent = () => {
  const { isDark, colors, toggleTheme } = useTheme();

  return (
    <div style={{ backgroundColor: colors.background, color: colors.textParagraph }}>
      <h1 style={{ color: colors.textHeading }}>Hello</h1>
      <button style={{ backgroundColor: colors.primary }}>Click Me</button>
    </div>
  );
};
```

## Available Colors

### Light Mode Colors
- **background**: `#F8FAFC` - Main background
- **card**: `#FFFFFF` - Card/surface background
- **primary**: `#2563EB` - Primary action color (Blue)
- **secondary**: `#6366F1` - Secondary color (Indigo)
- **textHeading**: `#0F172A` - Heading text
- **textParagraph**: `#475569` - Body text
- **border**: `#E2E8F0` - Border color
- **glassBg**: `rgba(255, 255, 255, 0.7)` - Glassmorphism background
- **glassBorder**: `rgba(255, 255, 255, 0.2)` - Glassmorphism border
- **hover**: `rgba(37, 99, 235, 0.05)` - Hover overlay

### Dark Mode Colors
- **background**: `#0F172A` - Main background
- **card**: `#1E293B` - Card/surface background
- **primary**: `#60A5FA` - Primary action color (Light Blue)
- **secondary**: `#818CF8` - Secondary color (Light Indigo)
- **textHeading**: `#F8FAFC` - Heading text
- **textParagraph**: `#CBD5E1` - Body text
- **border**: `#334155` - Border color
- **glassBg**: `rgba(30, 41, 59, 0.7)` - Glassmorphism background
- **glassBorder**: `rgba(51, 65, 85, 0.2)` - Glassmorphism border
- **hover**: `rgba(129, 140, 248, 0.1)` - Hover overlay

## Utility Components

Pre-built themed components are available in `ThemedComponents.jsx`:

### ThemedCard
```jsx
import { ThemedCard } from '../components/ThemedComponents';

<ThemedCard className="p-6">
  Your content here
</ThemedCard>
```

### ThemedButton
```jsx
import { ThemedButton } from '../components/ThemedComponents';

<ThemedButton variant="primary">Primary Button</ThemedButton>
<ThemedButton variant="secondary">Secondary Button</ThemedButton>
<ThemedButton variant="outline">Outline Button</ThemedButton>
```

### ThemedHeading & ThemedText
```jsx
import { ThemedHeading, ThemedText } from '../components/ThemedComponents';

<ThemedHeading level={1}>Main Title</ThemedHeading>
<ThemedText>Paragraph text</ThemedText>
```

### ThemedBadge
```jsx
import { ThemedBadge } from '../components/ThemedComponents';

<ThemedBadge variant="primary">NEW</ThemedBadge>
```

### ThemedDivider
```jsx
import { ThemedDivider } from '../components/ThemedDivider';

<ThemedDivider />
```

## Usage Examples

### Example 1: Styled Heading
```jsx
import { useTheme } from '../context/useTheme';

export const Hero = () => {
  const { colors } = useTheme();

  return (
    <h1 style={{ color: colors.textHeading, fontSize: '48px' }}>
      Welcome to My Portfolio
    </h1>
  );
};
```

### Example 2: Glassmorphism Card
```jsx
import { useTheme } from '../context/useTheme';

export const ProjectCard = ({ title, description }) => {
  const { colors } = useTheme();

  return (
    <div style={{
      backgroundColor: colors.glassBg,
      border: `1px solid ${colors.glassBorder}`,
      borderRadius: '12px',
      padding: '24px',
      backdropFilter: 'blur(16px)',
    }}>
      <h3 style={{ color: colors.primary }}>{title}</h3>
      <p style={{ color: colors.textParagraph }}>{description}</p>
    </div>
  );
};
```

### Example 3: Interactive Button with Hover
```jsx
import { useTheme } from '../context/useTheme';
import { motion } from 'framer-motion';

export const ActionButton = ({ children }) => {
  const { colors } = useTheme();

  return (
    <motion.button
      style={{
        backgroundColor: colors.primary,
        color: colors.background,
        padding: '12px 24px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
      }}
      whileHover={{
        boxShadow: `0 12px 48px ${colors.primary}40`,
        scale: 1.02,
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};
```

### Example 4: Section with Theme-Aware Background
```jsx
import { useTheme } from '../context/useTheme';

export const Section = ({ children }) => {
  const { isDark, colors } = useTheme();

  return (
    <section style={{
      backgroundColor: isDark ? 'rgba(30, 41, 59, 0.3)' : 'rgba(37, 99, 235, 0.02)',
      padding: '80px 20px',
    }}>
      {children}
    </section>
  );
};
```

## CSS Classes

### Global CSS Variables
All theme colors are available as CSS variables in your stylesheets:

```css
body {
  background-color: var(--bg-primary);
  color: var(--text-paragraph);
}

h1, h2, h3, h4, h5, h6 {
  color: var(--text-heading);
}

button {
  background-color: var(--color-primary);
}

.card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(16px);
}
```

### Glassmorphism Class
Apply the `.glassmorphism` class to any element for automatic theme-aware glassmorphism styling:

```jsx
<div className="glassmorphism rounded-xl p-6">
  Premium card with glassmorphism effect
</div>
```

## Theme Toggle Button

The theme toggle is automatically included in your App.jsx. It appears as a floating button in the top-right corner and:
- Displays FiSun icon in light mode
- Displays FiMoon icon in dark mode
- Smoothly rotates icons (300ms)
- Uses glassmorphism styling
- Automatically updates localStorage
- Is fully accessible with keyboard support

## localStorage Integration

Theme preference is automatically saved:
```javascript
// Saved key: 'theme-preference'
// Values: 'light' or 'dark'
localStorage.getItem('theme-preference'); // 'dark' or 'light'
```

To manually reset theme to system preference:
```javascript
localStorage.removeItem('theme-preference');
```

## Animations & Transitions

All theme transitions use:
- **Duration**: 300ms
- **Timing**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Properties**: background-color, color, border-color, box-shadow

## Accessibility Features

✓ Respects `prefers-reduced-motion` media query  
✓ High contrast mode support  
✓ Keyboard accessible theme toggle  
✓ ARIA labels on interactive elements  
✓ Proper color contrast ratios (AAA compliant)

## Component Update Checklist

When updating existing components to use the theme:

- [ ] Import `useTheme` hook
- [ ] Extract `colors` and `isDark` from hook
- [ ] Replace hardcoded colors with `colors.colorName`
- [ ] Update background colors to use `colors.glassBg` for cards
- [ ] Update text colors to use `colors.textHeading` and `colors.textParagraph`
- [ ] Replace border colors with `colors.border`
- [ ] Update hover states with appropriate color overlays
- [ ] Test in both light and dark modes
- [ ] Verify transitions are smooth (300ms)

## Example: Complete Component Migration

### Before (Static Dark Theme)
```jsx
export const Skills = () => {
  return (
    <section className="py-20 bg-gray-900/30">
      <h2 className="text-white text-4xl mb-12">Skills</h2>
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
        <p className="text-gray-300">JavaScript</p>
      </div>
    </section>
  );
};
```

### After (Theme-Aware)
```jsx
import { useTheme } from '../context/useTheme';
import { ThemedHeading, ThemedCard } from './ThemedComponents';

export const Skills = () => {
  const { isDark, colors } = useTheme();

  return (
    <section style={{
      backgroundColor: isDark ? 'rgba(30, 41, 59, 0.3)' : 'rgba(37, 99, 235, 0.02)',
      padding: '80px 20px',
    }}>
      <ThemedHeading level={2} className="mb-12">Skills</ThemedHeading>
      <ThemedCard className="p-6">
        <p style={{ color: colors.primary }}>JavaScript</p>
      </ThemedCard>
    </section>
  );
};
```

## Troubleshooting

**Theme not persisting?**
- Check browser's localStorage is enabled
- Verify ThemeProvider wraps entire app in main.jsx

**Colors not updating?**
- Ensure component uses `useTheme()` hook
- Check that colors are used in style prop or CSS variables

**Icons not showing?**
- Verify react-icons is installed: `npm install react-icons`
- Ensure FiSun and FiMoon are imported from 'react-icons/fi'

**Transitions stuttering?**
- Remove conflicting transition rules
- Ensure only specific properties transition (avoid `all`)

## Need Help?

Refer to:
- [useTheme.js](../context/useTheme.js) - Hook implementation
- [ThemeContext.jsx](../context/ThemeContext.jsx) - Context provider
- [theme.css](../styles/theme.css) - Global styles
- [ThemeComponents.jsx](./ThemedComponents.jsx) - Pre-built components
- [Navbar.jsx](./Navbar.jsx) - Complete theme integration example
