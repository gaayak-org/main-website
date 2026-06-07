'use client';

import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { alpha } from '@mui/material/styles';

interface HeroContainerProps {
  left: React.ReactElement<unknown>;
  linearGradient?: boolean;
  right: React.ReactElement<unknown>;
  rightSx?: BoxProps['sx'];
  small?: React.ReactElement<unknown>;
}

export default function HeroContainer(props: HeroContainerProps) {
  const {
    left,
    linearGradient,
    right,
    rightSx,
    small,
  } = props;
  const frame = React.useRef<HTMLDivElement>(null);

  const renderRightWrapper = (sx?: BoxProps['sx']) => (
    <Box
      ref={frame}
      aria-hidden="true"
      sx={[
        (theme) => ({
          width: '100%',
          maxWidth: 920,
          minHeight: { xs: 'auto', md: 520 },
          height: '100%',
          maxHeight: { md: 700, xl: 850 },
          borderBottomLeftRadius: 12,
          transition: 'max-height 0.3s',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          px: (theme) => theme.spacing(4),
          py: 0,
          borderLeft: '1px solid',
          borderColor: (theme.vars || theme).palette.divider,
          ...(linearGradient && {
            background: `radial-gradient(farthest-corner circle at 0% 0%, ${(theme.vars || theme).palette.grey[50]
              } 0%, ${(theme.vars || theme).palette.primary.light} 100%)`,
          }),
        }),
        (theme) =>
          theme.applyStyles('dark', {
            background: (theme.vars || theme).palette.primaryDark[900],
            borderColor: (theme.vars || theme).palette.primaryDark[700],
            ...(linearGradient && {
              background: `radial-gradient(farthest-corner circle at 0% 0%, ${alpha(
                theme.palette.primary.dark,
                0.2,
              )} 0%, ${(theme.vars || theme).palette.primaryDark[900]} 100%)`,
            }),
          }),
        ...(Array.isArray(sx) ? sx : [sx]),
        ...(Array.isArray(rightSx) ? rightSx : [rightSx]),
      ]}
    >
      {right}
    </Box>
  );

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Container
        sx={{
          pt: 0,
          minHeight: { xs: 'auto', md: 500 },
          height: { md: 'calc(100vh - 120px)' },
          maxHeight: { md: 700, xl: 850 },
          transition: '0.3s',
        }}
      >
        <Grid
          container
          sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'stretch', flexWrap: 'nowrap', height: '85%', mx: 'auto' }}
        >
          <Grid
            sx={{ display: 'flex', alignItems: 'center', height: '100%' }}
            size={{
              md: 5,
              lg: 6,
            }}
          >
            {left}
          </Grid>
          <Grid
            sx={{ height: '100%', maxHeight: '100%', display: { xs: 'none', md: 'initial' } }}
            size={{
              md: 5,
              lg: 6,
            }}
          >
            {renderRightWrapper()}
          </Grid>
        </Grid>
        <Box sx={{ display: { xs: 'block', md: 'none' }, width: '100%', pt: 4, pb: 4, px: 2 }}>
          {props.small}
        </Box>
      </Container>
    </Box>
  );
}