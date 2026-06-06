'use client';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { DEFAULT_COLOR_MODE, theme } from './theme';

export default function BrandingThemeProvider(props: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme} defaultMode={DEFAULT_COLOR_MODE}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}
