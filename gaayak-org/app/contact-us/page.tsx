import YouTubeEmbed from "@/components/YouTubeEmbed";
import { socialLinks } from "@/config/content/social";
import MainLayout from "@/layouts/MainLayout";
import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Container, Link, Stack, Typography } from "@mui/material";

export default function ContactUs() {
  const faqItems = [{
    title: 'How does CourseCorrect.fyi’s course recommendation work?',
    description: 'Our AI engine analyzes your preferences to suggest courses that are most relevant to your needs. Whether you’re looking to upskill in data science, or get into marketing, we provide personalized recommendations tailored to your career goals.'
  }, {
    title: 'Can I trust the course reviews on CourseCorrect.fyi?',
    description: 'Yes! We authenticate all course reviews on our platform to ensure that you get genuine insights from real learners. We believe in providing transparent and honest feedback to help you make informed decisions about your learning journey.'
  }, {
    title: 'How do I compare courses on CourseCorrect.fyi?',
    description: `You can chat with our AI assistant, Cora, and ask it to compare the courses you're interested in. Cora will provide you with the pros and cons of the chosen options, helping you make a more informed choice based on your goals.`
  }, {
    title: 'What types of courses are available on CourseCorrect.fyi?',
    description: 'We offer a wide variety of courses in fields like AI, data science, business, programming, marketing and more. You’ll find options suitable for all levels.'
  }, {
    title: 'How can I purchase the courses listed on CourseCorrect.fyi?',
    description: 'Once you find a course you’re interested in, simply click on the “enroll” button to be directed to the course provider’s website, where you can purchase the course and begin learning.'
  }, {
    title: 'Is there a cost for using CourseCorrect.fyi?',
    description: 'No! Our platform is completely free to use. We earn affiliate commissions from course providers when you enroll, but you never pay extra for using our site.'
  }, {
    title: 'How can CourseCorrect.fyi help me stay ahead in AI and technology?',
    description: 'By using our personalized course recommendations and keeping up with the latest offerings in AI, data science, and tech fields, CourseCorrect.fyi helps you stay updated and advance in your career through continuous learning.'
  }]

  return (
    <MainLayout>
      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: "calc(100vh - 60px)",
          gap: 6, py: 8,
        }}
      >
        {/* Email */}
        <Container sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h4">Let's Chat!</Typography>
          <Typography variant="body1">Got questions, feedback, or just want to say hi? We’re all ears!</Typography>
          <Typography variant="body1">Whether you need help navigating CourseCorrect or want to share how much we’ve changed your life (we hope!), we’re here for it. Drop us a message, and we’ll make sure to get back to you!</Typography>
          <Typography variant="body1">Email us on <Link href="mailto:info@coursecorrect.fyi">info@coursecorrect.fyi</Link></Typography>
        </Container>

        {/* Social Media */}
        <Container sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h4">Social Media</Typography>
          <Typography variant="body1">
            We’re on <Link href={socialLinks.x.href} target="_blank" rel="noopener noreferrer">X</Link>{' '}
            and <Link href={socialLinks.linkedin.href} target="_blank" rel="noopener noreferrer">LinkedIn</Link>,
            but the real fun happens on our <Link href={socialLinks.youtube.href} target="_blank" rel="noopener noreferrer">YouTube channel</Link>!
          </Typography>
          <Typography variant="body2">
            Subscribe for no-nonsense career tips and life advice.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={4}
            sx={{
              width: '100%',
              mx: 'auto',
              px: 4,
            }}
          >
            <YouTubeEmbed videoId="Q76b4CYLq5I?si=hGYvl3zLMY5J7P1q" title="Polyworking 101: Turn Your Passions Into Profits in 2025!" />
            <YouTubeEmbed videoId="9x4aD0eBt7A?si=1b83NV_eRmb1MUk-" title="Secret Hack: How to Find Hidden Jobs on Google Like a Pro!" />
          </Stack>
        </Container>

        {/* FAQ */}
        <Container sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h4" pb={2}>FAQ</Typography>
          {faqItems && faqItems.filter(item => item.title && item.description).map((item, index) => (
            <Accordion key={`faq${index + 1}`}>
              <AccordionSummary expandIcon={<ExpandMore />} aria-controls="faq1-content" id="faq1-header">
                <Typography color="text.primary">{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.tertiary">{item.description}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Container>
    </MainLayout>
  );
}