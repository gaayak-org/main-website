'use client';

import { CCLogo } from "@/components/CCLogo";
import TwoToneHeading from "@/components/DualToneHeading";
import YouTubeChannelCarousel from "@/components/YouTubeChannelCarousel";
import MainLayout from "@/layouts/MainLayout";
import RadialGradientBackground from '@/layouts/backgrounds/RadialGradientBackground';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  SxProps,
  Theme,
  Typography,
  useColorScheme
} from "@mui/material";
import { styled } from '@mui/material/styles';
import Script from 'next/script';
import { ReactNode } from 'react';

// Types for reusable components
type SectionContainerProps = {
  children: ReactNode;
  sx?: SxProps<Theme>;
};

type TestimonialCardProps = {
  quote: string;
  content: string;
  name: string;
  title: string;
  image: string;
};

// Custom component for feature titles and testimonial quotes
const FeatureHeading = ({ children, ...props }: React.PropsWithChildren<any>) => (
  <Typography
    variant="h6"
    sx={(theme) => ({
      fontSize: { xs: '1.1rem', sm: '1.25rem' },
      fontWeight: 600,
      mb: 1,
      color: theme.palette.text.primary,
      ...theme.applyStyles('dark', {
        color: theme.palette.text.primary,
      })
    })}
    {...props}
  >
    {children}
  </Typography>
);

// Reusable section container component
const SectionContainer = ({ children, sx = {} }: SectionContainerProps) => (
  <Box sx={{
    width: '100%',
    mb: 8,
    ...sx
  }}>
    {children}
  </Box>
);

// Reusable testimonial card component
const TestimonialCard = ({ quote, content, name, title, image }: TestimonialCardProps) => (
  <Card sx={(theme) => ({
    maxWidth: 345,
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px',
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: theme.shadows[2],
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: theme.shadows[4],
    },
    ...theme.applyStyles('dark', {
      backgroundColor: 'rgba(13, 17, 23, 0.7)',
      border: '1px solid rgba(48, 54, 61, 0.6)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    }),
  })}>
    <CardContent sx={{
      textAlign: 'left',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      p: { xs: 2, sm: 3 },
    }}>
      <FeatureHeading sx={{ mb: 3, fontWeight: 700, height: '40px', display: 'flex', alignItems: 'center' }}>
        {quote}
      </FeatureHeading>
      <Typography variant="body2" sx={(theme) => ({
        color: theme.palette.text.secondary,
        mb: 3,
        flex: 1,
        fontSize: { xs: '0.85rem', sm: '0.875rem' },
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: { xs: 6, sm: 8 },
        ...theme.applyStyles('dark', {
          color: 'rgba(255, 255, 255, 0.7)',
        }),
      })}>
        {content}
      </Typography>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        mt: 'auto',
        flexWrap: { xs: 'wrap', sm: 'nowrap' },
        gap: { xs: 1, sm: 0 },
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          width: { xs: '100%', sm: 'auto' },
        }}>
          <Box
            component="img"
            src={image}
            sx={{
              width: { xs: 32, sm: 40 },
              height: { xs: 32, sm: 40 },
              borderRadius: '50%',
              mr: 1.5,
              flexShrink: 0,
            }}
          />
          <Box>
            <Typography variant="body2" sx={(theme) => ({
              fontWeight: 600,
              color: theme.palette.text.primary,
              fontSize: { xs: '0.8rem', sm: '0.875rem' },
              ...theme.applyStyles('dark', {
                color: 'white',
              }),
            })}>
              {name}
            </Typography>
            <Typography variant="body2" sx={(theme) => ({
              color: theme.palette.text.secondary,
              fontSize: { xs: '0.75rem', sm: '0.8rem' },
              ...theme.applyStyles('dark', {
                color: 'rgba(255, 255, 255, 0.7)',
              }),
            })}>
              {title}
            </Typography>
          </Box>
        </Box>
        <CCLogo sx={{
          height: { xs: 20, sm: 25 },
          opacity: 0.8,
          mt: { xs: 1, sm: 0 },
          ml: { xs: 'auto', sm: 0 },
          display: { xs: 'none', sm: 'block' },
        }} />
      </Box>
    </CardContent>
  </Card>
);

const storyBlocks = [
  {
    image: "/images/friends_at_home.jpg",
    text: "We’re a bunch of friends living in the land of weekday hustle and weekend adventures. One day, the corporate Gods commanded: upskill or bust!"
  },
  {
    image: "/images/girl_with_lens.png",
    text: "After hundreds of platforms, thousands of courses, countless open tabs for course comparison, and four precious weekends down the drain, we were exhausted."
  },
  {
    image: "/images/light_bulb_man.png",
    text: "Then we had a light bulb moment. No, it was not that we found the course, but a revelation - surely if we were grappling with this chaos, so were countless others!"
  },
  {
    image: "/images/light/logo.svg",
    text: "Enter CourseCorrect to rescue learners like you from the clutches of course confusion making your search for the perfect course simple and enjoyable!"
  }
]

const teamMates = [
  {
    name: "Ankur Jain",
    designation: "Co-founder and CTO",
    description: "The Tech Wizard who turns ambitious concepts into game-changing reality!",
    experience: "Ex - Meta, Flybits, Morgan Stanley, Credit Suisse",
    image: "/images/ankur.jpeg",
    profileLink: "https://iamankurj.com/tech"
  },
  {
    name: "Dhananjay More",
    designation: "Co-founder and CSO",
    description: "Growth hacker who blends business savvy with relentless drive to supercharge partnerships and alliances.",
    experience: "Ex - Google Cloud, Park+, eBay",
    image: "/images/dhananjay.jpeg",
    profileLink: "https://www.linkedin.com/in/dhananjaymore44/"
  },
  {
    name: "Dipti Nair",
    designation: "Co-founder and CMO",
    description: "Marketing expert who turns clever strategies into captivating brand magic!",
    experience: "Ex - GALE, LeoBurnett, Ogilvy, Fyule",
    image: "/images/dipti.jpeg",
    profileLink: "https://www.linkedin.com/in/dipti-nair24/"
  },
  {
    name: "Vimal Cherangattu",
    designation: "Co-founder and CEO",
    description: "Product Marketing Pro who steers CourseCorrect with a visionary roadmap!",
    experience: "Ex - Improvado, Gupshup, Apryse",
    image: "/images/vimal.jpeg",
    profileLink: "https://www.linkedin.com/in/vimal-cherangattu-30a4a420/"
  },
];

const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.05)', // Slightly increase size
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)', // Add shadow
  },
  paddingBottom: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  outline: '6px solid',
  outlineColor: 'hsla(220, 25%, 80%, 0.2)',
  border: '1px solid',
  borderColor: theme.palette.grey[200],
  boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
  ...theme.applyStyles('dark', {
    boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
    outlineColor: 'hsla(220, 20%, 42%, 0.1)',
    borderColor: theme.palette.grey[700],
  }),
}))

const StyledCardMedia = styled(CardMedia, {
  shouldForwardProp: (prop) => prop !== 'image',
})(({ theme, image }) => ({
  width: '50%',
  maxWidth: 300,
  height: 175,
  objectFit: 'contain',
  display: 'block',
  margin: '15px auto',
  backgroundSize: 'contain',
  backgroundImage: `url(${image})`,
  ...theme.applyStyles('dark', {
    backgroundImage: `url(${image?.replace('/light/', '/dark/')})`,
  })
}))

// Define the reasons to choose CourseCorrect
const whyChooseReasons = [
  {
    icon: "🚀",
    title: "Smart recommendations",
    description: "No more confusion."
  },
  {
    icon: "🔍",
    title: "In-depth reviews",
    description: "Know what's worth your time."
  },
  {
    icon: "⏳",
    title: "Less searching",
    description: "More learning. Simple."
  }
];

// Testimonials data
const testimonials = [
  {
    quote: "Saved me so much time.",
    content: "I used to waste hours trying to figure out what course was right for me. There are literally thousands to choose from! CourseCorrect made it easy. The AI shortlisted what I needed and I got started. I'm in the middle of the course and so far, I think it was a great choice.",
    name: "Rachel P.",
    title: "Marketing Analyst",
    image: "/images/testimonial/Rachel.jpg"
  },
  {
    quote: "Made the process so much easier.",
    content: "I didn't know where to start when I wanted to learn something new. Plus I always thought certificates are just good to have. CourseCorrect helped me pick a course that works well with my busy schedule and the certificate I gained is what helped me land my promotion.",
    name: "Jason L.",
    title: "Aspiring Data Analyst",
    image: "/images/testimonial/Jason.jpg"
  },
  {
    quote: "Made my life easier, that's all I'll say.",
    content: "I needed a course, didn't know which one. CourseCorrect picked one for me. I took it. It was good. 10/10 would use again.",
    name: "Mike D.",
    title: "IT Specialist",
    image: "/images/testimonial/Mike.jpg"
  },
  {
    quote: "I didn't know where to start. Now I do.",
    content: "There are too many courses out there, and I kept putting off upskilling because I was never sure about taking a course, like - how do you even know if it's worth your time and money? CourseCorrect pointed me in the right direction with extensive reviews and helped me shortlist stuff, and I actually finished a course for once.",
    name: "Saarthak.",
    title: "Project Manager",
    image: "/images/testimonial/Sarthak.jpg"
  },
  {
    quote: "Finally felt confident hitting ‘Enroll.’",
    content: "I’ve always been a bit skeptical of online courses—so many overpromise and underdeliver. CourseCorrect didn’t just dump options on me, it actually explained why a course would suit my goals. I felt like I had a smart friend guiding me.",
    name: "Anjali M.",
    title: "UX Designer",
    image: "/images/testimonial/Anjali.jpg"
  },
  {
    quote: "Took me from indecisive to done.",
    content: "I used to open five tabs, read reviews, get overwhelmed, and close everything. CourseCorrect gave me one recommendation that made sense. Took the course. No regrets.",
    name: "Kevin R.",
    title: "Career Switcher (Finance → Product Management)",
    image: "/images/testimonial/Kevin.jpg"
  }
];

export default function AboutUs() {
  const { mode } = useColorScheme();

  return (
    <MainLayout>
      <Script
        src="https://widgets.sociablekit.com/youtube-channel-videos/widget.js"
        strategy="lazyOnload"
        defer
      />
      <RadialGradientBackground
        flex={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
            py: 8,
          }}
        >
          {/* Hero Section with Headline and Subheadline */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <TwoToneHeading
              primary="Too many courses, too little time?"
              secondary="We've got you."
              variant="primary"
              inline={false}
            />

            <Typography
              variant="body1"
              sx={(theme) => ({
                fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.2rem' },
                fontWeight: 600,
                color: theme.palette.text.secondary,
                maxWidth: '800px',
                mx: 'auto',
                mt: 4,
                ...theme.applyStyles('dark', {
                  color: theme.palette.text.secondary,
                }),
              })}
            >
              With AI on your side, skip the guesswork and confidently choose the right course—fast.
            </Typography>
          </Box>

          <Divider />

          {/* Why Choose CourseCorrect Section */}
          <SectionContainer>
            <Box sx={{ mb: 8 }}>
              <TwoToneHeading
                primary="Why choose"
                secondary="CourseCorrect?"
              />
            </Box>

            <Box sx={{
              maxWidth: '1200px',
              mx: 'auto',
              px: { xs: 2, md: 0 },
              mt: 4
            }}>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 3 }}>
                {whyChooseReasons.map((reason, index) => (
                  <Box key={`reason-${index}`} sx={(theme) => ({
                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(30, 40, 50, 0.8)' : 'background.paper',
                    borderRadius: 2,
                    p: 3,
                    height: '100%',
                    boxShadow: theme.palette.mode === 'dark' ? '0 8px 16px rgba(0, 0, 0, 0.3)' : 3,
                    display: 'flex',
                    flexDirection: 'column',
                    mb: { xs: 2, md: 0 },
                  })}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                      <Typography sx={{ fontSize: '1.8rem' }}>
                        {reason.icon}
                      </Typography>
                    </Box>
                    <FeatureHeading sx={{ textAlign: 'center', mb: 1, fontWeight: 700 }}>
                      {reason.title}
                    </FeatureHeading>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        textAlign: 'center',
                        fontSize: { xs: '0.875rem', sm: '0.875rem' }
                      }}
                    >
                      {reason.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </SectionContainer>

          {/* Our Story Section */}
          <SectionContainer>
            <TwoToneHeading
              primary="Our"
              secondary="Story"
            />

            <Grid container spacing={2} pt={4} justifyContent='center' alignItems='center' gap={4}>
              {storyBlocks.map((block, index) => (
                <Grid key={`story` + index}>
                  <StyledCard sx={{
                    maxWidth: 345,
                  }}>
                    <StyledCardMedia image={block.image} />
                    <CardContent sx={{ height: 100, textAlign: 'center' }}>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {block.text}
                      </Typography>
                    </CardContent>
                  </StyledCard>
                </Grid>
              ))}
            </Grid>
          </SectionContainer>

          {/* Meet The Team Section */}
          <SectionContainer>
            <TwoToneHeading primary="Meet The" secondary="Team" paddingTop={6} />


            <Grid container spacing={2} pt={4} justifyContent='center' alignItems='center' gap={4}>
              {teamMates.map((teamMate, index) => (
                <Grid key={`story` + index}>
                  <CardActionArea href={teamMate.profileLink} target="_blank">
                    <StyledCard sx={{
                      maxWidth: 345,
                    }}>
                      <CardMedia
                        component="img" title={teamMate.name}
                        sx={{
                          width: '50%', maxWidth: 300, height: 175,
                          objectFit: 'contain', display: 'block',
                          marginTop: '35px', marginBottom: '15px', marginX: 'auto'
                        }}
                        image={teamMate.image}
                      />

                      <CardContent sx={{
                        height: 200,
                        textAlign: 'center'
                      }}>
                        <Typography gutterBottom variant="h5" height={32}>
                          {teamMate.name}
                        </Typography>

                        <Typography gutterBottom sx={{ color: 'text.secondary' }}>
                          {teamMate.designation}
                        </Typography>

                        <Typography gutterBottom variant="body2" height={62}>
                          {teamMate.description}
                        </Typography>

                        <Typography gutterBottom variant="body2" sx={{ color: 'text.secondary' }}>
                          {teamMate.experience}
                        </Typography>
                      </CardContent>
                    </StyledCard>
                  </CardActionArea>
                </Grid>
              ))}
            </Grid>
          </SectionContainer>

          {/* YouTube Section */}
          <SectionContainer sx={{
            textAlign: 'center'
          }}>
            <TwoToneHeading
              primary="Follow us on"
              secondary="YouTube"
            />

            <Typography
              variant="body1"
              sx={(theme) => ({
                fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.2rem' },
                fontWeight: 400,
                mb: { xs: 3, md: 4 },
                maxWidth: '800px',
                mx: 'auto',
                color: theme.palette.text.secondary,
                ...theme.applyStyles('dark', {
                  color: theme.palette.text.secondary,
                }),
              })}
            >
              For smart, no-BS career and life advice!
            </Typography>

            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              px: { xs: 0, sm: 2 },
            }}>
              <Box sx={(theme) => ({
                width: '100%',
                maxWidth: '1200px',
                borderRadius: { xs: 1, sm: 2 },
                overflow: 'hidden',
                boxShadow: { xs: 2, md: 4 },
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: { xs: 'none', md: 'scale(1.02)' },
                  boxShadow: { xs: 2, md: '0 12px 24px rgba(0, 0, 0, 0.2)' },
                },
                ...theme.applyStyles('dark', {
                  backgroundColor: 'rgba(13, 17, 23, 0.7)',
                }),
              })}>
                <YouTubeChannelCarousel title="CourseCorrect on YouTube" />
              </Box>
            </Box>
          </SectionContainer>

          {/* Testimonials Section */}
          <SectionContainer sx={{
            textAlign: 'center'
          }}>
            <TwoToneHeading
              primary="Real Learners,"
              secondary="Real Wins"
            />

            <Typography
              variant="body1"
              sx={(theme) => ({
                fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.2rem' },
                fontWeight: 400,
                mb: { xs: 3, md: 4 },
                maxWidth: '800px',
                mx: 'auto',
                color: theme.palette.text.secondary,
                ...theme.applyStyles('dark', {
                  color: theme.palette.text.secondary,
                }),
              })}
            >
              See what our customers say about our product
            </Typography>

            <Grid container spacing={2} pt={4} justifyContent='center' alignItems='stretch' gap={2}>
              {testimonials.map((testimonial, index) => (
                <Grid key={`testimonial-${index}`}>
                  <TestimonialCard
                    quote={testimonial.quote}
                    content={testimonial.content}
                    name={testimonial.name}
                    title={testimonial.title}
                    image={testimonial.image}
                  />
                </Grid>
              ))}
            </Grid>
          </SectionContainer>

        </Container>
      </RadialGradientBackground>
    </MainLayout>
  );
}
