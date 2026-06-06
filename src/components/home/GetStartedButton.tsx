'use client';

import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';
import Box, { BoxProps } from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';

interface GetStartedButtonsProps extends BoxProps {
  primaryLabel?: string;
  primaryUrl: string;
  secondaryLabel?: string;
  secondaryUrl?: string;
}

export default function GetStartedButton(props: GetStartedButtonsProps) {
  const {
    primaryLabel = 'Get started',
    primaryUrl,
    secondaryLabel,
    secondaryUrl,
    ...other
  } = props;

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
      <Button
        href={primaryUrl}
        component={Link}
        variant="contained"
        endIcon={<KeyboardArrowRightRounded />}
        sx={{ flexShrink: 0 }}
      >
        {primaryLabel}
      </Button>
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