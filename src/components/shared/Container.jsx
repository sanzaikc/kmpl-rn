import React from "react";
import { Box } from "native-base";

export default function Container({ children }) {
  return (
    <Box h="100%" w="100%" px="4" py="2">
      {children}
    </Box>
  );
}
