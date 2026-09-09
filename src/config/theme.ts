/**
 * Central theme/token registry.
 * Nothing in components should hardcode a hex value — always import from here.
 */

export const THEME = {
  colors: {
    primary: "#008438",
    secondary: "#F6FFF3",
    success: "#16A34A",
    warning: "#F59E0B",
    danger: "#EF4444",
    text: "#333333",
    muted: "#999999",
    background: "#FAFAFA",
    monitoringBg: "#0A0A0A",
    white: "#FFFFFF",
  },
  radius: {
    card: 20,
    button: 16,
    pill: 999,
  },
  spacing: {
    safeHorizontal: 20,
    header: 20,
    card: 16,
    section: 24,
    bottomNav: 34,
  },
  touchTarget: 44,
  typography: {
    pageTitle: { size: 24, weight: 700 },
    cardTitle: { size: 16, weight: 600 },
    mainNumber: { size: 40, weight: 700 },
    body: { size: 14, weight: 400 },
    caption: { size: 12, weight: 400 },
  },
} as const;

export type ThemeColorKey = keyof typeof THEME.colors;
