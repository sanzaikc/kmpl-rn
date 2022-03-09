import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";

import routes from "./routes";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
}
