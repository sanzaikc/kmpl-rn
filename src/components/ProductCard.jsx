import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

import {
  VStack,
  Box,
  Divider,
  AspectRatio,
  Stack,
  Heading,
  HStack,
  Center,
} from "native-base";

export default function ProductCard() {
  return (
    <TouchableOpacity>
      <Box
        bg="white"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _light={{
          backgroundColor: "gray.50",
        }}
      >
        <Box>
          <AspectRatio w="100%" ratio={3 / 2}>
            <Image
              source={{
                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
              }}
              alt="image"
            />
          </AspectRatio>
          <Center
            bg="rose.500"
            _dark={{
              bg: "violet.400",
            }}
            position="absolute"
            top="1"
            right="1"
            rounded="sm"
          >
            <Box
              px={2}
              py={0.5}
              _text={{
                color: "warmGray.50",
                fontWeight: "700",
                fontSize: "xs",
              }}
            >
              Sale
            </Box>
          </Center>
        </Box>
        <Box p={1}>
          <Text>Product Name</Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
}
