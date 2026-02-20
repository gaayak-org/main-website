/**
 * Single source of truth for the default color scheme.
 * Used by InitColorSchemeScript (layout, server) and ThemeProvider (client)
 * so the initial paint and hydration match — no flicker.
 */
export const DEFAULT_COLOR_MODE = 'dark' as const;

export type DefaultColorMode = typeof DEFAULT_COLOR_MODE;
