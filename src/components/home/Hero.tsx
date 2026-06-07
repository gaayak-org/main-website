'use client';

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

  const heroImages = [
    '/images/top-left-mic-with-waveform-on-monitor-2.webp',
    '/images/top-right-tanpura-waveform-1.webp',
    '/images/bottom-left-singer-side-profile-silhouette.webp',
    '/images/bottom-right-mixing-console-timeline-view.webp',
  ];

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
            gaayak.org aims to be a practical, scientific, and holistic resource for Indian singing — and a place for creators to learn and collaborate.
          </Typography>
          {/* Contact Us CTA commented out for now */}
          {/* <GetStartedButton
            primaryLabel="Claim your spot"
            primaryUrl="/contact-us"
          />
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1.5 }}>
            First 500 members enjoy 6 months free.
          </Typography> */}
        </Box>
      }
      rightSx={{
        p: 4,
        ml: 2,
        overflow: 'hidden',
        width: '100%',
      }}
      right={
        <React.Fragment>
          {isMdUp && (
            <Stack spacing={3} useFlexGap sx={{ width: '100%' }}>
              <Box
                sx={{
                  width: '100%',
                  maxWidth: 760,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                  gap: 2,
                }}
              >
                {heroImages.map((src, index) => (
                  <Box
                    key={src}
                    sx={{
                      borderRadius: 3,
                      overflow: 'hidden',
                      aspectRatio: '1 / 1',
                      position: 'relative',
                      bgcolor: 'background.paper',
                      boxShadow: (theme) =>
                        `0 18px 40px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(15, 23, 42, 0.12)'}`,
                    }}
                  >
                    <Box
                      component="img"
                      src={src}
                      alt={`Hero image ${index + 1}`}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Stack>
          )}
        </React.Fragment>
      }
    />
  );
}
