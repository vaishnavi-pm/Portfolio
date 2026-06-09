import React from 'react';
import { MailIcon } from 'lucide-react';
import { useTheme } from '../context/useTheme';

export default function HeroDock() {
  const { colors } = useTheme();
  const items = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vaishnavi-pm-/',
      svg: (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.45 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/_.vai.shu._',
      svg: (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5zM17.75 6a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/vaishnavi-pm',
      svg: (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.96 3.22 9.16 7.69 10.64.56.1.77-.24.77-.54 0-.27-.01-1-.02-1.96-3.13.68-3.79-1.51-3.79-1.51-.51-1.3-1.25-1.65-1.25-1.65-1.02-.69.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1.01 1.73 2.65 1.23 3.29.94.1-.74.39-1.23.71-1.51-2.5-.28-5.12-1.25-5.12-5.57 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.12 1.16a10.8 10.8 0 0 1 2.84-.38c.96 0 1.93.13 2.84.38 2.17-1.46 3.12-1.16 3.12-1.16.61 1.54.23 2.68.11 2.96.72.79 1.16 1.8 1.16 3.03 0 4.33-2.63 5.29-5.13 5.57.4.35.75 1.03.75 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.2.65.78.54 4.47-1.48 7.68-5.68 7.68-10.64C23.25 5.48 18.27.5 12 .5z" />
        </svg>
      ),
    },
    {
      name: 'Email',
      href: 'mailto:vaishpm15@gmail.com',
      svg: <MailIcon className="w-4 h-4" />,
    },
  ];

  return (
    <div className="mt-4 flex items-center justify-center gap-3">
      {items.map((it) => (
        <a
          key={it.name}
          href={it.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={it.name}
          className="inline-flex items-center justify-center w-9 h-9 rounded-full border transition-colors"
          style={{
            borderColor: colors.border,
            color: colors.textParagraph,
            background: 'transparent',
          }}
        >
          <span style={{ color: colors.primary }} className="flex items-center justify-center">
            {it.svg}
          </span>
        </a>
      ))}
    </div>
  );
}
