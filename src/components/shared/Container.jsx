import React from "react";
import { Box } from "native-base";

export default function Container({ children }) {
  return (
    <Box h="100%" w="90%" px="4" py="2">
      {children}
    </Box>
  );
}
