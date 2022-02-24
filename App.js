import React from "react";
import { NativeBaseProvider } from "native-base";

import { NavigationContainer } from "@react-navigation/native";
import AppBottomNavigator from "./src/navigator/AppBottomNavigator";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AppBottomNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
