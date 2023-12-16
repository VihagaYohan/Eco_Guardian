import React, { Component, useLayoutEffect } from "react";
import { StyleSheet, SafeAreaView, View, Text, Dimensions } from "react-native";

// components
import { UITextView, UIContainer, UIFAB } from "../components";

const HomeScreen = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Home",
      headerLeft: (props) => <></>,
    });
  }, []);

  return (
    <UIContainer>
      <View style={{ flex: 1 }}>
        <UITextView text="Home screen page" textStyle={{ color: "red" }} />

        <UIFAB onPress={() => console.log("onpress")} />
      </View>
    </UIContainer>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
