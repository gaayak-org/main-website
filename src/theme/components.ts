import { alpha, Components, Theme } from '@mui/material/styles';
import { brand, gray } from './themePrimitives';

export const components: Components<Theme> = {
  MuiButtonBase: {
    defaultProps: {
      disableTouchRipple: true,
      disableRipple: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        boxSizing: 'border-box',
        transition: 'all 100ms ease-in',
        '&:focus-visible': {
          outline: `3px solid ${alpha(theme.palette.primary.main, 0.5)}`,
          outlineOffset: '2px',
        },
      }),
    },
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: 'none',
        borderRadius: (theme.vars || theme).shape.borderRadius,
        textTransform: 'none',
        variants: [
          {
            props: { size: 'small' },
            style: {
              height: '2.25rem',
              padding: '8px 12px',
              fontSize: '0.9375rem',
            },
          },
          {
            props: { size: 'medium' },
            style: {
              height: '2.5rem',
              padding: '10px 16px',
            },
          },
          {
            props: {
              color: 'primary',
              variant: 'contained',
            },
            style: {
              color: 'white',
              backgroundColor: gray[900],
              backgroundImage: `linear-gradient(to bottom, ${gray[700]}, ${gray[800]})`,
              boxShadow: `inset 0 1px 0 ${gray[600]}, inset 0 -1px 0 1px hsl(220, 0%, 0%)`,
              border: `1px solid ${gray[700]}`,
              '&:hover': {
                backgroundImage: 'none',
                backgroundColor: gray[700],
                boxShadow: 'none',
              },
              '&:active': {
                backgroundColor: gray[800],
              },
              ...theme.applyStyles('dark', {
                color: 'black',
                backgroundColor: gray[50],
                backgroundImage: `linear-gradient(to bottom, ${gray[100]}, ${gray[50]})`,
                boxShadow: 'inset 0 -1px 0  hsl(220, 30%, 80%)',
                border: `1px solid ${gray[50]}`,
                '&:hover': {
                  backgroundImage: 'none',
                  backgroundColor: gray[300],
                  boxShadow: 'none',
                },
                '&:active': {
                  backgroundColor: gray[400],
                },
              }),
            },
          },
          {
            props: {
              variant: 'text',
            },
            style: {
              color: gray[600],
              '&:hover': {
                backgroundColor: gray[100],
              },
              '&:active': {
                backgroundColor: gray[200],
              },
              ...theme.applyStyles('dark', {
                color: gray[50],
                '&:hover': {
                  backgroundColor: gray[700],
                },
                '&:active': {
                  backgroundColor: alpha(gray[700], 0.7),
                },
              }),
            },
          },
          {
            props: {
              color: 'info',
              variant: 'text',
            },
            style: {
              color: (theme.vars || theme).palette.text.primary,
              '&:hover': {
                backgroundColor: (theme.vars || theme).palette.action.hover,
                color: (theme.vars || theme).palette.text.primary,
              },
              '&:active': {
                backgroundColor: (theme.vars || theme).palette.action.selected,
              },
            },
          },
          {
            props: {
              color: 'primary',
              variant: 'text',
            },
            style: {
              color: (theme.vars || theme).palette.primary.main,
              '&:hover': {
                backgroundColor: alpha(brand[100], 0.5),
                color: brand[700],
              },
              '&:active': {
                backgroundColor: alpha(brand[200], 0.7),
              },
              ...theme.applyStyles('dark', {
                color: brand[100],
                '&:hover': {
                  backgroundColor: alpha(brand[900], 0.5),
                  color: brand[50],
                },
                '&:active': {
                  backgroundColor: alpha(brand[900], 0.3),
                },
              }),
            },
          },
        ],
      }),
    },
  },
};
