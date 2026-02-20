'use client';

import GetStartedButton from '@/components/home/GetStartedButton';
import GradientText from '@/components/typography/GradientText';
import HeroContainer from '@/layouts/HeroContainer';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';

export default function Hero() {
  const globalTheme = useTheme();
  const isMdUp = useMediaQuery(globalTheme.breakpoints.up('md'));

  return (
    <HeroContainer
      linearGradient
      left={
        <Box sx={{ textAlign: { xs: 'center', md: 'left' }, maxWidth: 500 }}>
          <Typography
            variant="h1"
            sx={{ mb: 1, fontSize: { xs: '2.5rem', md: '3rem' } }}
          >
            <GradientText>Your gateway to mastering Indian singing</GradientText>
            {' — and beyond.'}
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 3 }}>
            gaayak.org aims to be a practical, scientific, and holistic resource for Indian singing — and a hub for budding singers, producers, videographers, and songwriters to learn, connect, and collaborate on projects.
          </Typography>
          <GetStartedButton
            primaryLabel="Claim your spot"
            primaryUrl="/contact-us"
          />
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1.5 }}>
            First 500 members enjoy 6 months free.
          </Typography>
        </Box>
      }
      rightSx={{
        p: 4,
        ml: 2,
        minWidth: 2000,
        overflow: 'hidden',
        '& > div': {
          width: 360,
          display: 'inline-flex',
          verticalAlign: 'top',
          '&:nth-of-type(2)': {
            width: { xl: 400 },
          },
        },
      }}
      right={
        <React.Fragment>
          {isMdUp && (
            <Stack spacing={3} useFlexGap>
              {/* Placeholder for showcase components - you can add your own here */}
              <Box
                sx={{
                  width: 360,
                  height: 280,
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                {/* Add your showcase components here */}
              </Box>
            </Stack>
          )}
        </React.Fragment>
      }
    />
  );
}
