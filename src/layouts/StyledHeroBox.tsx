'use client';

import { Box, styled } from "@mui/material"

export const StyledHeroBox = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundRepeat: 'no-repeat',

  backgroundImage:
    `radial-gradient(ellipse 80% 50% at 50% -20%, ${theme.palette.primary.light}, transparent)`,
  ...theme.applyStyles('dark', {
    backgroundImage:
      `radial-gradient(ellipse 80% 50% at 50% -20%, ${theme.palette.primary.dark}, transparent)`,
  }),
}));

export default StyledHeroBox;