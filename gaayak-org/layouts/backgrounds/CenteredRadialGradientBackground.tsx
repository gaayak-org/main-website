'use client';

import { Box, styled } from "@mui/material";

/**
 * Centered radial gradient background that fades from primary color to background
 * Commonly used for auth pages and centered forms
 */
export const CenteredRadialGradientBackground = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '100%',
  position: 'relative',
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage: `radial-gradient(ellipse at 50% 50%, ${(theme.vars || theme).palette.primary[50]}, ${(theme.vars || theme).palette.background.default})`,
    backgroundRepeat: 'no-repeat',
    ...theme.applyDarkStyles({
      backgroundImage: `radial-gradient(ellipse at 50% 50%, ${(theme.vars || theme).palette.primary[900]}, ${(theme.vars || theme).palette.primaryDark[900]})`,
    }),
  },
}));

export default CenteredRadialGradientBackground;
