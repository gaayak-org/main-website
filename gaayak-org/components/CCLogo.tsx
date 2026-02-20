import Box from "@mui/material/Box";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

interface CCLogoProps {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
}

export const CCLogo = ({ sx }: CCLogoProps) => {
  return (
    <Box
      component={Link}
      href="/"
      sx={{
        position: 'relative',
        display: 'inline-block',
        ...sx,
        '& .logo-light': {
          visibility: 'visible',
          opacity: 1,
        },
        '& .logo-dark': {
          visibility: 'hidden',
          opacity: 0,
          position: 'absolute',
          top: 0,
          left: 0,
        },
        '[data-mui-color-scheme="dark"] &': {
          '& .logo-light': {
            visibility: 'hidden',
            opacity: 0,
          },
          '& .logo-dark': {
            visibility: 'visible',
            opacity: 1,
          },
        },
      }}
    >
      <Image
        src="/images/logos/logo-original.svg"
        alt="CourseCorrect Logo"
        className="logo-light"
        width={160}
        height={40}
        style={{ height: "100%", width: "auto", display: "block" }}
        priority
      />
      <Image
        src="/images/logos/logo-white.svg"
        alt="CourseCorrect Logo"
        className="logo-dark"
        width={160}
        height={40}
        style={{ height: "100%", width: "auto", display: "block" }}
        priority
      />
    </Box>
  );
};

export default CCLogo;
