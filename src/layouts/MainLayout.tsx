import { Box } from "@mui/material";
import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box flex={1} display="flex" flexDirection="column">
        {children}
      </Box>
    </Box>
  );
}