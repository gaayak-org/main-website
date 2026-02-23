import Box from "@mui/material/Box";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

const GAAYAK_LOGO_SRC = "/images/logos/gaayak-logo-v0.png";

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
        display: 'inline-block',
        ...sx,
      }}
    >
      <Image
        src={GAAYAK_LOGO_SRC}
        alt="gaayak.org Logo"
        width={160}
        height={40}
        style={{ height: "100%", width: "auto", display: "block" }}
        priority
      />
    </Box>
  );
};

export default CCLogo;
