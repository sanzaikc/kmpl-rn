import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { Box, HStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

import HorizontalContainer from "../shared/HorizontalContainer";

import routes from "../../navigator/routes";

export default function CartItem() {
  const navigation = useNavigation();

  return (
    <HorizontalContainer>
      <HStack>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.PRODUCT_DETAIL)}
        >
          <Box h={20} w={20} rounded="sm" overflow="hidden">
            <Image
              source={{
                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
              }}
              alt="Cart Item"
              resizeMode="cover"
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </Box>
        </TouchableOpacity>
      </HStack>
    </HorizontalContainer>
  );
}
