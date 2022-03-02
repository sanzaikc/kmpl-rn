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
        <View style={{ width: "48%", marginHorizontal: 2, marginVertical: 5 }}>
          <ProductCard />
        </View>
      )}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: "space-between",
      }}
      ItemSeparatorComponent={() => (
        <View style={{ width: 16, backgroundColor: "pink" }} />
      )}
    />
  );
}
