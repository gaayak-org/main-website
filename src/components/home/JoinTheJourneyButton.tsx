'use client';

import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';
import Box, { BoxProps } from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';

interface JoinTheJourneyButtonProps extends BoxProps {
  primaryLabel?: string;
  primaryUrl?: string;
  primaryOnClick?: () => void;
  secondaryLabel?: string;
  secondaryUrl?: string;
}

export default function JoinTheJourneyButton(props: JoinTheJourneyButtonProps) {
  const {
    primaryLabel = 'Get started',
    primaryUrl,
    primaryOnClick,
    secondaryLabel,
    secondaryUrl,
    ...other
  } = props;

  const primaryButton = primaryOnClick ? (
    <Button
      variant="contained"
      onClick={primaryOnClick}
      endIcon={<KeyboardArrowRightRounded />}
      sx={{ flexShrink: 0 }}
    >
      {primaryLabel}
    </Button>
  ) : primaryUrl ? (
    <Button
      href={primaryUrl}
      component={Link}
      variant="contained"
      endIcon={<KeyboardArrowRightRounded />}
      sx={{ flexShrink: 0 }}
    >
      {primaryLabel}
    </Button>
  ) : (
    <Button
      variant="contained"
      disabled
      endIcon={<KeyboardArrowRightRounded />}
      sx={{ flexShrink: 0 }}
    >
      {primaryLabel}
    </Button>
  );

  return (
    <Box
      {...other}
      sx={{
        display: 'flex',
        flexWrap: { xs: 'wrap', md: 'nowrap' },
        gap: 1.5,
        '&& > *': {
          minWidth: { xs: '100%', md: '0%' },
        },
        ...other.sx,
      }}
    >
      {primaryButton}
      {secondaryLabel && secondaryUrl && (
        <Button
          href={secondaryUrl}
          component={Link}
          variant="outlined"
          color="secondary"
          endIcon={<KeyboardArrowRightRounded />}
        >
          {secondaryLabel}
        </Button>
      )}
    </Box>
  );
}