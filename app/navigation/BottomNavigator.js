import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// navigator
import { Routes } from "./index";

// screens
import { LogsScreen, ProfileScreen, HomeScreen } from "../pages";

const Bottom = createBottomTabNavigator();

const Navigator = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Bottom.Screen name={Routes.home} component={HomeScreen} />
      <Bottom.Screen name={Routes.logs} component={LogsScreen} />

      <Bottom.Screen name={Routes.profile} component={ProfileScreen} />
    </Bottom.Navigator>
  );
};

export default Navigator;
