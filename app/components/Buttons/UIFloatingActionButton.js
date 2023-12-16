import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Ionicons from "@expo/vector-icons/Ionicons";

// constants
import { COLORS } from "../../constants";

const SIZE = 50;

const UIFAB = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onPress()} style={styles.container}>
      {props.icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: COLORS.primaryColor,
    elevation: 4,
    position: "absolute",
    bottom: 60,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

UIFAB.PropTypes = {
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.element,
};

export default UIFAB;
