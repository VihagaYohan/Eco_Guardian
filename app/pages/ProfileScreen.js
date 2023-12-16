import React, { Component, useLayoutEffect } from "react";
import { StyleSheet, SafeAreaView, View, Text, Dimensions } from "react-native";

// components
import { UITextView, UIContainer, UIFAB } from "../components";

const ProfileScreen = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Profile",
      headerTitleVisible: false,
      headerLeft: (props) => <></>,
    });
  }, []);

  return (
    <UIContainer>
      <View style={{ flex: 1 }}>
        <UITextView text="Profile screen page" textStyle={{ color: "red" }} />

        <UIFAB onPress={() => console.log("onpress")} />
      </View>
    </UIContainer>
  );
};

const styles = StyleSheet.create({});

export default ProfileScreen;
