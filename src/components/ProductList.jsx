import { View, Text, FlatList } from "react-native";
import React from "react";

import ProductCard from "./ProductCard";

const randomArray = Array.apply(null, { length: 7 }).map((x) => ({
  id: Math.random(),
}));

export default function ProductList() {
  return (
    <FlatList
      data={randomArray}
      keyExtractor={({ id }) => id.toString()}
      renderItem={(_) => (
        <View style={{ width: "50%", marginBottom: 10, marginHorizontal: 5 }}>
          <ProductCard />
        </View>
      )}
      numColumns={2}
      columnWrapperStyle={{
        flex: 1,
        justifyContent: "space-between",
      }}
    />
  );
}
