import { Typography, Box } from '@mui/material';

interface TwoToneHeadingProps {
  primary: string;
  secondary: string;
  paddingTop?: number | string;
  variant?: 'primary' | 'secondary';
  inline?: boolean;
}

/**
 * A component for displaying two-tone headings with consistent styling
 * 
 * @param primary - The first part of the heading (default color)
 * @param secondary - The second part of the heading (accent color)
 * @param paddingTop - Optional top padding
 * @param variant - 'primary' for main headline, 'secondary' for section headlines (default: 'secondary')
 * @param inline - Whether the heading should be displayed inline (default: true)
 */
export default function TwoToneHeading({
  primary,
  secondary,
  paddingTop,
  variant = 'secondary',
  inline = true
}: TwoToneHeadingProps) {
  // Define styles based on variant
  const fontSize = variant === 'primary'
    ? { fontSize: 'clamp(2.5rem, 8vw, 3.5rem)' }
    : { fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' } };

  const display = inline ? 'inline' : 'block';

  return (
    <Box sx={{ textAlign: 'center', mb: variant === 'primary' ? 2 : { xs: 3, md: 4 } }}>
      <Typography
        variant={variant === 'primary' ? 'h1' : 'h2'}
        component="div"
        sx={(theme) => ({
          ...fontSize,
          fontWeight: 700,
          color: theme.palette.primary[900],
          display: display,
          pt: paddingTop,
          ...theme.applyStyles('dark', {
            color: theme.palette.primary[100],
          }),
        })}
      >
        {primary}{inline ? ' ' : ''}
      </Typography>
      <Typography
        component="div"
        variant={variant === 'primary' ? 'h1' : 'h2'}
        sx={(theme) => ({
          ...fontSize,
          fontWeight: 700,
          color: 'primary.main',
          display: display,
          ...theme.applyStyles('dark', {
            color: 'primary.light',
          }),
        })}
      >
        {secondary}
      </Typography>
    </Box>
  );
}