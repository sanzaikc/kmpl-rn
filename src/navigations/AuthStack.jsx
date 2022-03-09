import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignInScreeen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";

import routes from "./routes";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={routes.SIGN_IN} component={SignInScreeen} />
      <Stack.Screen name={routes.SIGN_UP} component={SignUpScreen} />
    </Stack.Navigator>
  );
}
