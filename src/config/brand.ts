// Brand Configuration - Easy to rebrand
export const BRAND = {
  name: import.meta.env.VITE_APP_NAME || 'Eikaya',
  tagline: import.meta.env.VITE_APP_TAGLINE || "East Africa's safest real estate marketplace",
  
  colors: {
    primary: import.meta.env.VITE_PRIMARY_COLOR || '#6c09f6',
    secondary: import.meta.env.VITE_SECONDARY_COLOR || '#1e293b',
    accent: import.meta.env.VITE_ACCENT_COLOR || '#22c55e',
  },
  
  api: {
    baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:8080/api/v1',
  },
} as const;
