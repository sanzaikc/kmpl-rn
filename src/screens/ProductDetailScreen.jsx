import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Box, Button, HStack } from "native-base";

import ProductImages from "../components/product/ProductImages";

export default function ProductDetailScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <ProductImages />
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
          ipsam consectetur molestiae quisquam nesciunt sapiente eaque, eveniet
          id provident, porro, cupiditate perspiciatis iste blanditiis velit
          harum odio ipsum. Natus iste accusantium repudiandae similique ut
          delectus enim id aliquam rem nobis laboriosam inventore porro aut
          molestiae nemo, earum iure maxime incidunt voluptate suscipit sunt
          pariatur impedit facere debitis? Excepturi atque, dolores consequatur
          nulla placeat ipsa nemo inventore veritatis quia laboriosam
          exercitationem fugit aliquam, unde sed nam iure. Rem dicta laudantium
          doloremque ipsa quas. Voluptatibus cupiditate alias quia rerum natus,
          ad neque vero, error mollitia atque corrupti iste fugiat harum eum
          possimus maxime ut. Sapiente neque voluptatibus dolore, labore ratione
          illum ab perspiciatis hic eveniet repudiandae aspernatur libero
          impedit obcaecati sequi praesentium nulla dignissimos repellendus unde
          ullam! Magni tenetur ullam rem explicabo iusto sequi, temporibus minus
          fuga accusantium at voluptatem suscipit. Consequuntur, earum. Veniam
          Sanjay
        </Text>
      </ScrollView>
      <Box bg="white" px={4} py={2} justifyContent="flex-end">
        <HStack justifyContent="flex-end">
          <Box w="50%">
            <Button colorScheme="rose">Add to Cart</Button>
          </Box>
        </HStack>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({});
