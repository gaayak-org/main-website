'use client';

import Hero from '@/components/home/Hero';
import MainLayout from '@/layouts/MainLayout';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

export default function Home() {
  const theme = useTheme();

  return (
    <MainLayout isHomePage>
      <Hero />

      <Box
        component="section"
        sx={{
          backgroundColor: alpha(theme.palette.primary.main, 0.06),
          borderTop: `1px solid ${theme.palette.divider}`,
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              color: 'text.primary',
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 700,
              mb: 3,
            }}
          >
            Why gaayak.org exists
          </Typography>

          <Typography sx={{ color: 'text.secondary', mb: 3, maxWidth: 860 }}>
            I’ve always felt that the Indian education system has had this habit of telling us what to do without explaining the why behind.
          </Typography>

          <Box component="ul" sx={{ color: 'text.secondary', mb: 3, pl: 3, '& li': { mb: 1 } }}>
            <li>Giving us log tables to multiply numbers… but never explaining why adding logs works.</li>
            <li>Telling us that the area of a circle is πr² without telling where π even comes from.</li>
          </Box>

          <Typography sx={{ color: 'text.secondary', mb: 3, maxWidth: 860 }}>
            My experience with Indian singing education hasn’t been very different.
          </Typography>

          <Typography sx={{ color: 'text.secondary', mb: 3, maxWidth: 860 }}>
            There's a heavy focus on learning Swaras, Ragas, Bandish(es), Taals, ... but rarely told:
          </Typography>

          <Box component="ul" sx={{ color: 'text.secondary', mb: 3, pl: 3, '& li': { mb: 1 } }}>
            <li>What any of it actually means and why it matters</li>
            <li>How it connects to modern playback singing</li>
            <li>Whether you can still become a good singer without mastering every classical element</li>
          </Box>

          <Typography sx={{ color: 'text.secondary', mb: 3, maxWidth: 860 }}>
            And I believe singing itself, especially the modern Bollywood-style, is a combination of breathing, pitch accuracy, tone, range, agility, dynamics, and your unique style (and the classical foundations) — all working together. Excelling one while being bad at others won't make you a good singer but being good at most of them just might.
          </Typography>

          <Typography sx={{ color: 'text.secondary', mb: 3, maxWidth: 860 }}>
            Yet, most Indian singing resources I’ve found so far tend to:
          </Typography>

          <Box component="ul" sx={{ color: 'text.secondary', mb: 3, pl: 3, '& li': { mb: 1 } }}>
            <li>Skip the “what” and “why”</li>
            <li>Give vague guidance on how to improve</li>
            <li>Never define “how good is good enough”</li>
            <li>Offer feedback that’s too generic</li>
            <li>Over-focus on some skills while ignoring others</li>
          </Box>

          <Typography sx={{ color: 'text.primary', fontWeight: 700, mb: 2, maxWidth: 860 }}>
            I’m sure there are amazing, scientific vocal trainers out there — probably accessible to people who are already advanced or part of elite circles. But for the rest of us, especially late starters, the path is confusing.
          </Typography>

          <Typography sx={{ color: 'text.primary', fontWeight: 700, maxWidth: 860 }}>
            gaayak.org exists to change that.
          </Typography>

          <Typography sx={{ color: 'text.secondary', mt: 1, maxWidth: 860 }}>
            By breaking down Indian singing into clear, practical components, showing how to improve each one, and making structured, science-based training accessible to everyone. Not just the lucky few.
          </Typography>
        </Container>
      </Box>
    </MainLayout>
  );
}
