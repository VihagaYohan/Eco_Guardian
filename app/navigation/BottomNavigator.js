import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// navigator
import { Routes } from "./index";

// screens
import { LogsScreen, ProfileScreen, HomeScreen } from "../pages";

// constants
import { ICONS, COLORS } from "../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Bottom = createBottomTabNavigator();

const Navigator = () => {
  return (
    <Bottom.Navigator
      initialRouteName={Routes.home}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primaryColor,
        tabBarInactiveTintColor: COLORS.grey.grey300,
      }}
    >
      <Bottom.Screen
        name={Routes.home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ICONS.Entypo name="home" size={size} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
      {/* <Bottom.Screen name={Routes.logs} component={LogsScreen} /> */}

      <Bottom.Screen
        name={Routes.profile}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ICONS.Entypo name="user" size={size} color={color} />
          ),
          tabBarLabel: "Profile",
        }}
      />
    </Bottom.Navigator>
  );
};

export default Navigator;
