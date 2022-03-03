import { View, FlatList, Image, useWindowDimensions } from "react-native";
import { AspectRatio, Box } from "native-base";

const randomArray = Array.apply(null, { length: 3 }).map((x) => ({
  id: Math.random(),
}));

export default function ProductImages() {
  const { width, height } = useWindowDimensions();

  return (
    <FlatList
      data={randomArray}
      keyExtractor={({ id }) => id.toString()}
      renderItem={(_) => (
        <Box maxHeight={height * 0.4} width={width} overflow="hidden">
          <AspectRatio w="100%" ratio={4 / 5}>
            <Image
              source={{
                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
              }}
              alt="image"
              resizeMode="cover"
            />
          </AspectRatio>
        </Box>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={width}
      snapToAlignment="start"
    />
  );
}
