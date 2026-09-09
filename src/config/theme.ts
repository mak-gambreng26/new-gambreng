/**
 * Central theme/token registry.
 * Nothing in components should hardcode a hex value — always import from here.
 */

export const THEME = {
  colors: {
    primary: "#0A6B45",
    secondary: "#EDF7EF",
    surface: "#FFFFFF",
    surfaceSoft: "#F8FCF8",
    borderSoft: "#DDEBE0",
    success: "#2E9D68",
    warning: "#B9852E",
    danger: "#C65B5B",
    text: "#18372B",
    muted: "#6E8379",
    background: "#F3F8F2",
    monitoringBg: "#0A0A0A",
    white: "#FFFFFF",
  },
  radius: {
    card: 22,
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
