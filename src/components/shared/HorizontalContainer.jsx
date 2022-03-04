import React from "react";
import { Box } from "native-base";

export default function HorizontalContainer({ children }) {
  return (
    <Box bg="white" p={4} mb={1}>
      {children}
    </Box>
  );
}
