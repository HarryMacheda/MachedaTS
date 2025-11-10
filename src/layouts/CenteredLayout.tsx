import React, { ReactNode } from "react";
import { Box, Container } from "@mui/material";

interface CenteredLayoutProps {
  children: ReactNode;
}

const CenteredLayout: React.FC<CenteredLayoutProps> = ({ children }) => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      {children}
    </Container>
  );
};

export default CenteredLayout;
