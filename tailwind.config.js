/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      bg: "rgb(var(--bg))",
      fg: "rgb(var(--fg))",
      panel: "rgb(var(--panel))",
      card: "rgb(var(--card))",

      border: "rgb(var(--border))",
      muted: "rgb(var(--muted))",
      "muted-fg": "rgb(var(--muted-foreground))",
      accent: "rgb(var(--accent))",

      primary: "rgb(var(--primary))",
      "primary-fg": "rgb(var(--primary-foreground))",
      cta: "rgb(var(--cta))",
      "cta-fg": "rgb(var(--cta-foreground))",

      warning: "rgb(var(--warning))",

      "brand-soft": "rgb(var(--brand-soft))",
      "highlight-soft": "rgb(var(--highlight-soft))",

      "gradient-from": "rgb(var(--gradient-from))",
      "gradient-via": "rgb(var(--gradient-via))",
      "gradient-to": "rgb(var(--gradient-to))",
    },
  },
};
export const darkMode = "class";
export const plugins = [];
