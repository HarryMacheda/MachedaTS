import React, { ReactNode } from "react";
import { Box, Container } from "@mui/material";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

export default MainLayout;
