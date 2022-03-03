import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavigator from "./src/navigator/BottomTabNavigator";
import ProductDetailScreen from "./src/screens/ProductDetailScreen";

import routes from "./src/navigator/routes";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
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
