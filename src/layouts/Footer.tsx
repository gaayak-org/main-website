"use client";

// import { socialLinksOrdered } from "@/config/content/social"; // commented out – social links are CourseCorrect
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { alpha, styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

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
      {"© "}
      {new Date().getFullYear()}
      {" gaayak.org. All rights reserved."}
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
          textAlign: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, alignItems: "center" }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Made with love in Toronto
          </Typography>
          {/* <Link
            href="mailto:hello@gaayak.org"
            color="text.secondary"
            variant="body2"
            sx={{ textDecoration: "underline" }}
          >
            hello@gaayak.org
          </Link> */}
        </Box>

        <Copyright />
      </Container>
    </StyledBox>
  );
}
