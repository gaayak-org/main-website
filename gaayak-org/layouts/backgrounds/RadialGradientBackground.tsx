'use client';

import { Box, styled } from "@mui/material";

/**
 * Radial gradient background that fades from primary color to transparent/background
 * Commonly used for hero sections and centered content pages
 */
export const RadialGradientBackground = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -20%, ${theme.palette.primary[100]}, transparent)`,
  ...theme.applyDarkStyles({
    backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -20%, ${theme.palette.primary[700]}, transparent)`,
  }),
}));

export default RadialGradientBackground;
