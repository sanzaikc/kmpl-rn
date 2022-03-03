import React from "react";
import { View, Text, FlatList } from "react-native";

import ProductCard from "../product/ProductCard";

const randomArray = Array.apply(null, { length: 7 }).map((x) => ({
  id: Math.random(),
}));

export default function ProductList() {
  return (
    <FlatList
      data={randomArray}
      keyExtractor={({ id }) => id.toString()}
      renderItem={({ item }) => (
        <View
          style={{ width: "48.5%", marginHorizontal: 2, marginVertical: 5 }}
        >
          <ProductCard product={item} />
        </View>
      )}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: "space-between",
        paddingHorizontal: 10,
      }}
    />
  );
}
