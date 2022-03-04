import React from "react";
import { extendTheme, NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavigator from "./src/navigator/BottomTabNavigator";
import ProductDetailScreen from "./src/screens/ProductDetailScreen";

import routes from "./src/navigator/routes";

const Stack = createStackNavigator();

export default function App() {
  const theme = extendTheme({
    colors: {
      primary: {
        50: "#fff1f2",
        100: "#ffe4e6",
        200: "#fda4af",
        300: "#fda4af",
        400: "#fb7185",
        500: "#f43f5e",
        600: "#e11d48",
        700: "#be123c",
        800: "#9f1239",
        900: "#881337",
      },
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={routes.ROOT_STACK}
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={routes.PRODUCT_DETAIL}
            component={ProductDetailScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
