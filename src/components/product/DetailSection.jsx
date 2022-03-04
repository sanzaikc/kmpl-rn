import React from "react";
import { Box, HStack } from "native-base";

import HorizontalContainer from "../shared/HorizontalContainer";

export default function DetailSection({ children, name }) {
  return (
    <HorizontalContainer>
      <HStack space={6} alignItems="flex-start">
        {name && (
          <Box
            _text={{
              fontWeight: 200,
              color: "coolGray.500",
            }}
          >
            {name}
          </Box>
        )}
        <Box flex={1}>{children}</Box>
      </HStack>
    </HorizontalContainer>
  );
}
