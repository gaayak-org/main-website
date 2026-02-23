"use client";

// import { socialLinksOrdered } from "@/config/content/social"; // commented out – social links are CourseCorrect
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { alpha, styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CCLogo from "../components/CCLogo";

const StyledBox = styled(Box)(({ theme }) => [
  {
    backdropFilter: "blur(24px)",
    borderColor: (theme.vars || theme).palette.divider,
    borderStyle: "solid",
    backgroundImage: "none",
  },
  theme.applyStyles('dark', {
    backgroundColor: alpha(theme.palette.primaryDark[900], 0.7),
  }),
]);

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
      {"Copyright © "}
      <Link color="text.secondary" href="/">
        CourseCorrect
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {

  return (
    <StyledBox>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 4, sm: 8 },
          py: { xs: 5, sm: 7 },
          textAlign: { sm: "center", md: "left" },
        }}
      >
        {/* upper */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            gap: { xs: 4, sm: 8 },
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              minWidth: { xs: "100%", sm: "60%" },
            }}
          >
            <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
              <CCLogo
                sx={{
                  display: "flex",
                  height: 65,
                  width: "auto",
                  mr: 1,
                }}
              />

              <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
                At CourseCorrect, we&apos;re on a mission to&nbsp;
                <Typography component={"span"} sx={{ color: "text.primary" }}>simplify course discovery for ambitious learners</Typography>
                &nbsp;like you! With our comprehensive aggregation of global courses and intuitive AI
                guidance, finding your next course is a breeze!
              </Typography>
            </Box>
          </Box>

          {/* Terms, Privacy, Contact Us commented out for now */}
          {/* <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: "medium" }}>
              Company
            </Typography>
            <Link color="text.secondary" variant="body2" href="/contact-us">
              Contact
            </Link>
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: "medium" }}>
              Legal
            </Typography>
            <Link color="text.secondary" variant="body2" href="/terms">
              Terms
            </Link>
            <Link color="text.secondary" variant="body2" href="/privacy-policy">
              Privacy
            </Link>
          </Box> */}

        </Box>

        {/* lower */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: { xs: 4, sm: 8 },
            width: "100%",
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <div>
            {/* <Link color="text.secondary" variant="body2" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Typography sx={{ display: "inline", mx: 0.5, opacity: 0.5 }}>
              &nbsp;•&nbsp;
            </Typography>
            <Link color="text.secondary" variant="body2" href="/terms">
              Terms of Service
            </Link> */}
            <Copyright />
          </div>
          {/* Social media links (CourseCorrect) commented out for now */}
          {/* <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ justifyContent: "left", color: "text.secondary" }}
          >
            {socialLinksOrdered.map((social, index) => (
              <IconButton
                key={index}
                color="inherit"
                size="small"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                sx={{ alignSelf: "center" }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Stack> */}
        </Box>
      </Container>
    </StyledBox>
  );
}
