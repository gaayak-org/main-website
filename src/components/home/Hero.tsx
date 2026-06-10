'use client';

import GradientText from '@/components/typography/GradientText';
import HeroContainer from '@/layouts/HeroContainer';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';
import JoinTheJourneyButton from './JoinTheJourneyButton';

interface HeroProps {
  onJoinClick?: () => void;
}

export default function Hero({ onJoinClick }: HeroProps) {
  const globalTheme = useTheme();
  const isMdUp = useMediaQuery(globalTheme.breakpoints.up('md'));
  const [activeIndex, setActiveIndex] = React.useState(0);

  const heroImages = [
    '/images/top-left-mic-with-waveform-on-monitor-2.webp',
    '/images/top-right-tanpura-waveform-1.webp',
    '/images/bottom-left-singer-side-profile-silhouette.webp',
    '/images/bottom-right-mixing-console-timeline-view.webp',
  ];

  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    if (isMdUp) {
      return undefined;
    }

    let timeoutId: number | undefined;
    let fadeTimeoutId: number | undefined;

    const cycle = () => {
      timeoutId = window.setTimeout(() => {
        setVisible(false);
        fadeTimeoutId = window.setTimeout(() => {
          setActiveIndex((prevActive) => (prevActive + 1) % heroImages.length);
          setVisible(true);
          cycle();
        }, 400);
      }, 4200);
    };

    cycle();

    return () => {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
      if (fadeTimeoutId !== undefined) {
        window.clearTimeout(fadeTimeoutId);
      }
    };
  }, [heroImages.length, isMdUp]);

  const renderHeroText = () => (
    <Box sx={{ textAlign: { xs: 'center', md: 'left' }, maxWidth: 500, mx: { xs: 'auto', md: 0 } }}>
      <Typography
        variant="h1"
        sx={{ mb: 1, fontSize: { xs: '2.1rem', md: '3rem' }, lineHeight: 1.05 }}
      >
        <GradientText>Your gateway to mastering Indian singing...</GradientText>
        {' and beyond.'}
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 3 }}>
        gaayak.org aims to be a practical, scientific, and holistic resource for Indian singing... and a place for creators to learn and collaborate.
      </Typography>
      <JoinTheJourneyButton
        primaryLabel="Join the Journey"
        primaryOnClick={onJoinClick}
      />
      {/* Do not delete the commented code below */}
      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1.5, opacity: 0.7 }}>
        I can only build gaayak.org if enough people find value in it. If this resonates with you, your signup genuinely helps me decide whether to keep going.
      </Typography>
    </Box>
  );

  const smallScreenCarousel = (
    <Box
      sx={(theme) => ({
        width: '100%',
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: theme.shadows[5],
        aspectRatio: '4 / 3',
        bgcolor: 'background.paper',
        position: 'relative',
      })}
    >
      <Box
        component="img"
        src={heroImages[activeIndex]}
        alt={`Hero carousel ${activeIndex + 1}`}
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.4s ease-in-out',
        }}
      />
    </Box>
  );

  return (
    <HeroContainer
      linearGradient
      left={renderHeroText()}
      small={
        <Stack spacing={3} sx={{ width: '100%' }}>
          {renderHeroText()}
          {smallScreenCarousel}
        </Stack>
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
