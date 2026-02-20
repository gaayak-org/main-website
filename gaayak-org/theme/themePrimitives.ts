import { alpha, createTheme, Shadows } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface ColorRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  interface PaletteColor extends ColorRange { }

  interface Palette {
    baseShadow: string;
    primaryDark: ColorRange;
  }

  interface PaletteOptions {
    primaryDark?: ColorRange;
  }
}

const defaultTheme = createTheme();

// 🟤 Earth & Clay color scheme (Default)
export const earthClayBrand = {
  50: 'hsl(30, 20%, 97%)',   // #F5F0EC
  100: 'hsl(30, 25%, 92%)',
  200: 'hsl(30, 35%, 85%)',
  300: 'hsl(30, 40%, 75%)',
  400: 'hsl(30, 50%, 65%)',  // #D4A373 (Accent)
  500: 'hsl(30, 45%, 55%)',  // #A98467 (CTA)
  600: 'hsl(30, 40%, 45%)',
  700: 'hsl(30, 35%, 35%)',
  800: 'hsl(30, 30%, 25%)',
  900: 'hsl(30, 25%, 15%)',
};

// 🌾 Sunset & Wheat color scheme
export const sunsetWheatBrand = {
  50: 'hsl(35, 100%, 98%)',   // #FFF8F0
  100: 'hsl(25, 90%, 95%)',
  200: 'hsl(25, 85%, 88%)',
  300: 'hsl(25, 80%, 75%)',
  400: 'hsl(25, 85%, 68%)',   // #F4A261
  500: 'hsl(10, 75%, 61%)',   // #E76F51
  600: 'hsl(10, 70%, 52%)',
  700: 'hsl(10, 65%, 42%)',
  800: 'hsl(195, 35%, 25%)',  // #264653
  900: 'hsl(195, 40%, 18%)',
};

// 🧡 Peach & Sage color scheme
export const peachSageBrand = {
  50: 'hsl(40, 60%, 96%)',   // #FAF3E0
  100: 'hsl(85, 30%, 92%)',
  200: 'hsl(85, 28%, 80%)',
  300: 'hsl(85, 26%, 70%)',
  400: 'hsl(85, 18%, 60%)',  // #A3B18A
  500: 'hsl(10, 100%, 80%)', // #FFB4A2
  600: 'hsl(10, 90%, 70%)',
  700: 'hsl(10, 80%, 60%)',
  800: 'hsl(0, 0%, 23%)',    // #3A3A3A
  900: 'hsl(0, 0%, 18%)',
};

// Active Brand Selection (change this to switch schemes: earthClayBrand | sunsetWheatBrand | peachSageBrand)
export const brand = earthClayBrand;

// Gray scale (warmed up slightly to match earthy tones)
export const gray = {
  50: 'hsl(30, 10%, 98%)',
  100: 'hsl(30, 5%, 94%)',
  200: 'hsl(30, 5%, 88%)',
  300: 'hsl(30, 5%, 80%)',
  400: 'hsl(30, 5%, 65%)',
  500: 'hsl(30, 5%, 42%)',
  600: 'hsl(30, 5%, 35%)',
  700: 'hsl(30, 5%, 25%)',
  800: 'hsl(30, 5%, 10%)',
  900: 'hsl(30, 5%, 5%)',
};

// primaryDark: used by header/layout in dark mode (same as gray for consistency)
export const primaryDark = gray;

// Semantic colors
export const green = {
  50: 'hsl(120, 80%, 98%)',
  100: 'hsl(120, 75%, 94%)',
  200: 'hsl(120, 75%, 87%)',
  300: 'hsl(120, 61%, 77%)',
  400: 'hsl(120, 44%, 53%)',
  500: 'hsl(120, 59%, 30%)',
  600: 'hsl(120, 70%, 25%)',
  700: 'hsl(120, 75%, 16%)',
  800: 'hsl(120, 84%, 10%)',
  900: 'hsl(120, 87%, 6%)',
};

export const orange = {
  50: 'hsl(45, 100%, 97%)',
  100: 'hsl(45, 92%, 90%)',
  200: 'hsl(45, 94%, 80%)',
  300: 'hsl(45, 90%, 65%)',
  400: 'hsl(45, 90%, 40%)',
  500: 'hsl(45, 90%, 35%)',
  600: 'hsl(45, 91%, 25%)',
  700: 'hsl(45, 94%, 20%)',
  800: 'hsl(45, 95%, 16%)',
  900: 'hsl(45, 93%, 12%)',
};

export const red = {
  50: 'hsl(0, 100%, 97%)',
  100: 'hsl(0, 92%, 90%)',
  200: 'hsl(0, 94%, 80%)',
  300: 'hsl(0, 90%, 65%)',
  400: 'hsl(0, 90%, 40%)',
  500: 'hsl(0, 90%, 30%)',
  600: 'hsl(0, 91%, 25%)',
  700: 'hsl(0, 94%, 18%)',
  800: 'hsl(0, 95%, 12%)',
  900: 'hsl(0, 93%, 6%)',
};

// Color schemes (light & dark)
export const colorSchemes = {
  light: {
    palette: {
      primary: {
        light: brand[200],
        main: brand[400],
        dark: brand[700],
        contrastText: brand[50],
      },
      info: {
        light: brand[100],
        main: brand[300],
        dark: brand[600],
        contrastText: gray[50],
      },
      warning: {
        light: orange[300],
        main: orange[400],
        dark: orange[800],
      },
      error: {
        light: red[300],
        main: red[400],
        dark: red[800],
      },
      success: {
        light: green[300],
        main: green[400],
        dark: green[800],
      },
      grey: {
        ...gray,
      },
      primaryDark: {
        ...primaryDark,
      },
      divider: alpha(gray[300], 0.4),
      background: {
        default: brand[50],
        paper: '#ffffff',
      },
      text: {
        primary: gray[800],
        secondary: gray[600],
        warning: orange[400],
      },
      action: {
        hover: alpha(brand[200], 0.2),
        selected: alpha(brand[200], 0.3),
      },
      baseShadow:
        'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px',
    },
  },
  dark: {
    palette: {
      primary: {
        contrastText: brand[50],
        light: brand[300],
        main: brand[400],
        dark: brand[700],
      },
      info: {
        contrastText: brand[300],
        light: brand[500],
        main: brand[700],
        dark: brand[900],
      },
      warning: {
        light: orange[400],
        main: orange[500],
        dark: orange[700],
      },
      error: {
        light: red[400],
        main: red[500],
        dark: red[700],
      },
      success: {
        light: green[400],
        main: green[500],
        dark: green[700],
      },
      grey: {
        ...gray,
      },
      primaryDark: {
        ...primaryDark,
      },
      divider: alpha(gray[700], 0.6),
      background: {
        default: gray[900],
        paper: gray[800],
      },
      text: {
        primary: 'hsl(0, 0%, 100%)',
        secondary: gray[400],
      },
      action: {
        hover: alpha(gray[600], 0.2),
        selected: alpha(gray[600], 0.3),
      },
      baseShadow:
        'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px',
    },
  },
};

// Typography
export const typography = {
  fontFamily: 'Inter, sans-serif',
  h1: {
    fontSize: defaultTheme.typography.pxToRem(48),
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: -0.5,
  },
  h2: {
    fontSize: defaultTheme.typography.pxToRem(36),
    fontWeight: 600,
    lineHeight: 1.2,
  },
  h3: {
    fontSize: defaultTheme.typography.pxToRem(30),
    lineHeight: 1.2,
  },
  h4: {
    fontSize: defaultTheme.typography.pxToRem(24),
    fontWeight: 600,
    lineHeight: 1.5,
  },
  h5: {
    fontSize: defaultTheme.typography.pxToRem(20),
    fontWeight: 600,
  },
  h6: {
    fontSize: defaultTheme.typography.pxToRem(18),
    fontWeight: 600,
  },
  subtitle1: {
    fontSize: defaultTheme.typography.pxToRem(18),
  },
  subtitle2: {
    fontSize: defaultTheme.typography.pxToRem(14),
    fontWeight: 500,
  },
  body1: {
    fontSize: defaultTheme.typography.pxToRem(16),
  },
  body2: {
    fontSize: defaultTheme.typography.pxToRem(14),
    fontWeight: 400,
  },
  caption: {
    fontSize: defaultTheme.typography.pxToRem(12),
    fontWeight: 400,
  },
};

// Shape
export const shape = {
  borderRadius: 8,
};

// Shadows
const customShadows: Shadows = [...defaultTheme.shadows];
customShadows[1] = 'var(--palette-baseShadow)';
export const shadows = customShadows;
