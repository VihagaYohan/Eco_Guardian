import React, { Component } from "react";
import { StyleSheet, SafeAreaView, View, Text, Dimensions } from "react-native";

// components
import { UITextView } from "../components";

const HomeScreen = () => {
  return (
    <View>
      <UITextView text="Home screen page" textStyle={{ color: "red" }} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
