import { Box } from "@mui/material";
import React from 'react';
import AppHeader from "./AppHeader";
import Footer from "./Footer";
import ProductHuntFloatingBadge from "@/components/ProductHuntFloatingBadge";

interface MainLayoutProps {
  isHomePage?: boolean;
  children: React.ReactNode;
}

export default function MainLayout({ isHomePage, children }: MainLayoutProps) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <AppHeader isHomePage={isHomePage} />
      <ProductHuntFloatingBadge />
      <Box flex={1} display="flex" flexDirection="column">
        {children}
      </Box>
      <Footer />
    </Box>
  );
}