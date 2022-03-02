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
  Text as NText,
} from "native-base";

export default function ProductCard() {
  return (
    <TouchableOpacity style={{ width: "100%" }}>
      <Box
        bg="white"
        rounded="sm"
        overflow="hidden"
        // borderColor="coolGray.200"
        // borderWidth="1"
        // _dark={{
        //   borderColor: "coolGray.600",
        //   backgroundColor: "gray.700",
        // }}
        // _light={{
        //   backgroundColor: "gray.50",
        // }}
      >
        <Box maxHeight={200} overflow="hidden">
          <AspectRatio w="100%" ratio={4 / 5}>
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
        <Box p={2}>
          <VStack space={2}>
            <Text numberOfLines={2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              doloremque non nihil est debitis illo amet impedit officia
              mollitia laboriosam!
            </Text>
            <HStack space={1.5}>
              <NText style={{ color: "red", fontSize: 12 }}>TT$</NText>
              <NText style={{ color: "red", fontSize: 18, fontWeight: "200" }}>
                200
              </NText>
              <NText
                strikeThrough
                style={{ color: "gray", fontSize: 14, fontWeight: "200" }}
              >
                400
              </NText>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </TouchableOpacity>
  );
}
