'use client';

import { createTheme } from '@mui/material/styles';
import { components } from './components';
import { colorSchemes, shadows, shape, typography } from './themePrimitives';

export { DEFAULT_COLOR_MODE } from './defaultColorMode';

export const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-mui-color-scheme',
    cssVarPrefix: '',
  },
  colorSchemes,
  typography,
  shadows,
  shape,
  components,
});
