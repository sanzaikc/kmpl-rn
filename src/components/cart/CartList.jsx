import React from "react";
import { FlatList, View, ScrollView } from "react-native";
import { Box, Button, Flex, HStack, Input, VStack } from "native-base";

import CartItem from "./CartItem";

const cartListFooterComponent = () => (
  <Box px={4} py={2} bg="white">
    <HStack space={2}>
      <View style={{ flexGrow: 1 }}>
        <Input placeholder="Enter coupon code" />
      </View>
      <Button colorScheme="primary" variant="outline" size="sm" px={4}>
        Apply Coupon
      </Button>
    </HStack>
  </Box>
);

export default function CartList() {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={[1, 2, 3]}
        keyExtractor={(item) => item.toString()}
        renderItem={(_) => <CartItem />}
        ListFooterComponent={cartListFooterComponent}
      />
      <Box px={4} py={2} bg="white">
        <HStack alignItems="flex-end" justifyContent="space-between">
          <HStack space={2}>
            <Box
              _text={{
                color: "coolGray.500",
              }}
            >
              Total:
            </Box>
            <Box
              _text={{
                color: "rose.600",
              }}
            >
              TT$ 00.00
            </Box>
          </HStack>
          <Button colorScheme="primary" px={4}>
            Checkout
          </Button>
        </HStack>
      </Box>
    </View>
  );
}
