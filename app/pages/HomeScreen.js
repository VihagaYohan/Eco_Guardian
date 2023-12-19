import React, { Component, useLayoutEffect, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";

// components
import { UITextView, UIContainer, UIFAB } from "../components";

// data
import complains from "../data/complain";

const HomeScreen = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Home",
      headerLeft: (props) => <></>,
    });
  }, []);

  useEffect(() => {
    console.log(complains);
  }, []);

  // render UI
  const ComplainItem = (complain) => {
    return <TouchableOpacity></TouchableOpacity>;
  };

  return (
    <UIContainer>
      <View style={{ flex: 1 }}>
        <UITextView text="Hello, " textStyle={{ color: "red" }} />

        <UIFAB onPress={() => console.log("onpress")} />
      </View>
    </UIContainer>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
