'use client';

import { Subscriptions } from '@mui/icons-material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import YouTubeEmbed from './YouTubeEmbed';

interface YouTubeVideo {
  id: string;
  title: string;
}

interface YouTubeChannelCarouselProps {
  title?: string;
}

// Hardcoded video data
const VIDEOS_TO_SHOW: YouTubeVideo[] = [
  {
    id: 'mS0mVQcV_kw',
    title: 'Boost Your Career in 2025 with These Top 5 Certifications!'
  },
  {
    id: '2tYnxMSyE_Y',
    title: '5 Passive Income Skills That Pay You While You Sleep (Even in 2025!)'
  },
  {
    id: 'Lk8PJ1Wa7bo',
    title: 'Is Paying for Courses in 2025 Still Worth It?'
  },
  {
    id: 'SQJ-u0jUdeY',
    title: '5 Job Offers in 4 Weeks: Her AI Job Hunt Strategy (You Can Copy This)'
  },
  {
    id: 'Q76b4CYLq5I',
    title: 'Polyworking 101: Turn Your Passions Into Profits in 2025!'
  },
  {
    id: 'SDKDFMs2DNI',
    title: 'This Trick Helped Me Learn New Skills With a Full-Time Job'
  },
  {
    id: 'ehnr19cVxCA',
    title: 'You’re Learning Wrong! The 15-Minute Rule That Changes Everything'
  },
  {
    id: '9b5Hm2pIrp8',
    title: 'Laid Off? Here’s How to Bounce Back Stronger Than Ever!'
  }
];

export default function YouTubeChannelCarousel({ title }: YouTubeChannelCarouselProps) {
  const [videos] = useState<YouTubeVideo[]>(VIDEOS_TO_SHOW);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Number of videos to show at once
  const itemsPerRow = 3;
  const visibleVideos = videos.slice(currentVideoIndex, currentVideoIndex + itemsPerRow);

  const handlePrevious = () => {
    setCurrentVideoIndex((prev) => (prev === 0 ? Math.max(0, videos.length - itemsPerRow) : Math.max(0, prev - itemsPerRow)));
  };

  const handleNext = () => {
    setCurrentVideoIndex((prev) => (prev + itemsPerRow >= videos.length ? 0 : prev + itemsPerRow));
  };

  return (
    <Box sx={{ width: '100%' }}>
      {title && (
        <Box
          component="a"
          href="https://www.youtube.com/@CourseCorrectfyi"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            mb: 3,
            textDecoration: 'none',
            color: 'primary.main',
            '&:hover': {
              textDecoration: 'underline',
            },
            cursor: 'pointer'
          }}
        >
          <Subscriptions color="error" />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
            }}
          >
            {title}
          </Typography>
        </Box>
      )}

      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%'
      }}>
        <IconButton
          onClick={handlePrevious}
          sx={{
            color: 'primary.main',
            display: { xs: 'none', sm: 'flex' },
            mr: 1
          }}
          disabled={videos.length <= itemsPerRow}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        <Box sx={{
          display: 'flex',
          flex: 1,
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
          justifyContent: 'space-between'
        }}>
          {visibleVideos.map((video) => (
            <Box
              key={video.id}
              sx={{
                flex: { xs: '1 1 100%', sm: '1 1 calc(33.333% - 16px)' },
                minWidth: 0 // Prevents flex items from overflowing
              }}
            >
              <Box sx={(theme) => ({
                borderRadius: 1,
                overflow: 'hidden',
                boxShadow: theme.shadows[2],
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.shadows[4],
                },
                ...theme.applyStyles('dark', {
                  backgroundColor: 'rgba(13, 17, 23, 0.7)',
                  border: '1px solid rgba(48, 54, 61, 0.6)',
                }),
              })}>
                <YouTubeEmbed videoId={video.id} title={video.title} />
                <Box sx={{ p: 1.5 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 500,
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      lineHeight: 1.3,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      height: { xs: 40, sm: 52 }
                    }}
                  >
                    {video.title}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        <IconButton
          onClick={handleNext}
          sx={{
            color: 'primary.main',
            display: { xs: 'none', sm: 'flex' },
            ml: 1
          }}
          disabled={videos.length <= itemsPerRow}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      {/* Mobile navigation buttons */}
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          justifyContent: 'center',
          mt: 2,
          gap: 2
        }}
      >
        <IconButton
          onClick={handlePrevious}
          sx={{ color: 'primary.main' }}
          disabled={videos.length <= itemsPerRow}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{ color: 'primary.main' }}
          disabled={videos.length <= itemsPerRow}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}