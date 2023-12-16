import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ViewStyle,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

// constants
import { COLORS } from "../constants";

const UIHeaderBack = (props) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{ width: Platform.OS == "ios" ? 100 : 50 }}
    >
      <Ionicons
        name={Platform.OS == "ios" ? "arrow-back-ios" : "arrow-back"}
        color={COLORS.white}
        size={24}
      />
    </TouchableOpacity>
  );
};

export default UIHeaderBack;
