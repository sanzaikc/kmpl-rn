import React from "react";
import { View, FlatList, Image, useWindowDimensions, Text } from "react-native";
import { AspectRatio, Box, Center, HStack } from "native-base";

const randomArray = Array.apply(null, { length: 10 }).map((x) => ({
  id: Math.random(),
}));

export default function ProductImages() {
  const { width, height } = useWindowDimensions();
  const [pagination, setPagination] = React.useState(1);

  return (
    <Center>
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
        scrollEventThrottle={16}
        onMomentumScrollEnd={(event) => {
          const index = Math.floor(
            event.nativeEvent.contentOffset.x /
              event.nativeEvent.layoutMeasurement.width
          );
          setPagination(index + 1);
        }}
        disableIntervalMomentum={true}
      />
      <Box position="absolute" bottom={2} bg="gray.800" px={2} rounded="full">
        <HStack>
          <Text style={{ color: "lightgray", fontSize: 14 }}>
            {pagination}/{randomArray.length}
          </Text>
        </HStack>
      </Box>
    </Center>
  );
}
