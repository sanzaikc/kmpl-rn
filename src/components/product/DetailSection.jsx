import { Box, HStack } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Container from "../shared/Container";

export default function DetailSection({ children, name }) {
  return (
    <Box bg="white" p={4} mb={1}>
      <HStack space={6} alignItems="center">
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
    </Box>
  );
}

const styles = StyleSheet.create({});
