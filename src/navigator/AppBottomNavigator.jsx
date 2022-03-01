import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import CartScreen from "../screens/CartScreen";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";

import routes from "./routes";

const Tab = createBottomTabNavigator();

export default function AppBottomNavigator() {
  return (
    <Tab.Navigator
      // initialRouteName={routes.AUTH_STACK}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "red",
      }}
    >
      <Tab.Screen
        name={routes.HOME_STACK}
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.CART}
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cart-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.AUTH_STACK}
        component={AuthStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
