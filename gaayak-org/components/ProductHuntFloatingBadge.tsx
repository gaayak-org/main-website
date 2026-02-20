'use client';

import CloseIcon from '@mui/icons-material/Close';
import { Box, Fade, IconButton, Link, Tooltip } from '@mui/material';
import { useEffect, useState } from 'react';

// Custom P icon component to match ProductHunt branding
const ProductHuntPIcon = () => (
  <Box
    sx={{
      width: 32,
      height: 32,
      borderRadius: '50%',
      backgroundColor: '#da552f', // ProductHunt orange color
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: '18px',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }}
  >
    P
  </Box>
);

export default function ProductHuntFloatingBadge() {
  const [visible, setVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Check if user has previously hidden the badge
    const hidden = localStorage.getItem('ph-badge-hidden') === 'true';
    setIsHidden(hidden);

    // Show after a shorter delay (1 second instead of 2)
    if (!hidden) {
      const timer = setTimeout(() => setVisible(true), 250);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleHide = () => {
    setVisible(false);
    setIsHidden(true);
    localStorage.setItem('ph-badge-hidden', 'true');
  };

  const handleShow = () => {
    setVisible(true);
    setIsHidden(false);
    localStorage.setItem('ph-badge-hidden', 'false');
  };

  if (isHidden) {
    return (
      <Box
        sx={{
          position: 'fixed',
          top: 80, // Below the header (header height is 60px + margin)
          right: 20,
          zIndex: 999, // Just below header z-index to avoid conflicts
        }}
      >
        <Tooltip title="Show Product Hunt badge">
          <IconButton
            onClick={handleShow}
            sx={{
              backgroundColor: 'transparent',
              padding: 0,
              width: 48,
              height: 48,
              '&:hover': {
                backgroundColor: 'rgba(218, 85, 47, 0.1)',
                transform: 'scale(1.05)',
              },
              transition: 'all 0.2s ease-in-out',
              boxShadow: 3,
              borderRadius: '50%',
            }}
          >
            <ProductHuntPIcon />
          </IconButton>
        </Tooltip>
      </Box>
    );
  }

  return (
    <Fade in={visible} timeout={1000}>
      <Box
        sx={{
          position: 'fixed',
          top: 80, // Below the header (header height is 60px + margin)
          right: 20,
          zIndex: 999, // Just below header z-index to avoid conflicts
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: 6,
          },
          transition: 'all 0.2s ease-in-out',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: 3,
        }}
      >
        {/* Hide button */}
        <IconButton
          onClick={handleHide}
          sx={{
            position: 'absolute',
            top: -2,
            right: -2,
            backgroundColor: 'background.paper',
            color: 'text.secondary',
            width: 22,
            height: 22,
            minWidth: 'unset',
            boxShadow: 2,
            opacity: 0.75,
            '&:hover': {
              backgroundColor: 'error.main',
              color: 'white',
            },
            transition: 'all 0.2s ease-in-out',
          }}
        >
          <CloseIcon sx={{ fontSize: 14 }} />
        </IconButton>

        <Link
          href="https://www.producthunt.com/products/coursecorrect?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_source=badge-coursecorrect"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ display: 'block' }}
        >
          <Box
            sx={{
              // width: 250, // Increased to original size
              height: 54,  // Increased to original size
              display: 'block',
            }}
            component="img"
            src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=990661&theme=neutral&period=daily&t=1754723011395"
            alt="CourseCorrect - AI course matchmaker for real career impact | Product Hunt"
          />
        </Link>
      </Box>
    </Fade>
  );
}
