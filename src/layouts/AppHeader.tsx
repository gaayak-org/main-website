'use client';

import { AppLogo } from "@/components/AppLogo";
import HeaderNavBar from "@/components/header/HeaderNavBar";
import HeaderNavDropdown from "@/components/header/HeaderNavDropdown";
// import ThemeModeToggle from "@/components/header/ThemeModeToggle";
import { Box, Container, Stack } from "@mui/material";
import GlobalStyles from "@mui/material/GlobalStyles";
import { alpha, styled } from "@mui/material/styles";

const Header = styled('header')<{ isHomePage?: boolean }>(({ theme, isHomePage }) => [
  {
    position: 'sticky',
    top: 0,
    transition: theme.transitions.create('top'),
    zIndex: theme.zIndex.appBar,
    backgroundColor: isHomePage ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.6)',
    backdropFilter: 'blur(8px)',
    borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
  } as const,
  theme.applyStyles('dark', {
    backgroundColor: alpha(theme.palette.primaryDark[900], 0.7),
  }),
]);

const HEIGHT = 60;

interface AppHeaderProps {
  isHomePage?: boolean
}

export default function AppHeader({ isHomePage }: AppHeaderProps) {
  return (
    <Header isHomePage={isHomePage}>
      <GlobalStyles
        styles={{
          ':root': {
            '--MuiDocs-header-height': `${HEIGHT}px`,
          },
        }}
      />
      <Container sx={{ display: 'flex', alignItems: 'center', minHeight: HEIGHT }}>
        <AppLogo sx={{ height: 54, mr: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'initial' } }}>
          <HeaderNavBar />
        </Box>
        <Box sx={{ ml: 'auto' }} />
        <Stack direction="row" spacing={1}>
          {/* Theme toggle commented out – dark mode only for now */}
          {/* <ThemeModeToggle /> */}
        </Stack>
        <Box sx={{ display: { md: 'none' }, ml: 1 }}>
          <HeaderNavDropdown />
        </Box>
      </Container>
    </Header>
  );
}