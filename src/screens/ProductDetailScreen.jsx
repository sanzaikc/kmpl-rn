import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Box, Button, HStack, Text as NText, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";

import ProductImages from "../components/product/ProductImages";
import DetailSection from "../components/product/DetailSection";

export default function ProductDetailScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <ProductImages />
        <DetailSection>
          <VStack space={2}>
            <HStack alignItems="center" justifyContent="space-between">
              <Box
                _text={{
                  color: "rose.500",
                  fontSize: 24,
                }}
              >
                TT$ 200
              </Box>
              <TouchableOpacity>
                <Box>
                  <Ionicons name="heart-outline" size={24} color="gray" />
                </Box>
              </TouchableOpacity>
            </HStack>
            <HStack space={2}>
              <NText strikeThrough style={{ color: "gray" }}>
                TT$ 400
              </NText>
              <Box _text={{ fontWeight: 200 }}>-20%</Box>
            </HStack>
          </VStack>
        </DetailSection>
        <DetailSection name="Specifications">Very Cool Product</DetailSection>
        <DetailSection>Noice man</DetailSection>
      </ScrollView>
      <Box bg="white" px={4} py={2} justifyContent="flex-end">
        <HStack justifyContent="flex-end">
          <Box w="50%">
            <Button colorScheme="primary">Add to Cart</Button>
          </Box>
        </HStack>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({});
