import React, { Component, useLayoutEffect, useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import moment from "moment";

// components
import { UITextView, UIContainer, UIButton, UITextInput } from "../components";
import { COLORS, DIMENSION, STYLES } from "../constants";

// service
import { addComplaint } from "../services/ComplaintService";

const DetailsScreen = ({ navigation, route }) => {
  const [complainName, setComplainName] = useState();
  const [description, setDescription] = useState();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Complain Details",
      headerLeft: (props) => <></>,
      headerShown:true
    });
  }, []);

  return (
    <UIContainer>
      <View style={{ flex: 1, paddingVertical: DIMENSION.PADDING }}>
        <View style={[STYLES.flexRow, { justifyContent: "space-between" }]}>
          <UITextView
            text={`Reported Date: ${moment("2023-01-01T12:00:00").format(
              "DD/MMM/YYYY"
            )}`}
            textStyle={{ fontSize: 15, color: COLORS.red.red400 }}
          />

          <UITextView
            text={`Priority: HIGH`}
            textStyle={{
              fontSize: 15,
              color: COLORS.red.red400,
              fontWeight: "bold",
            }}
          />
        </View>

        <UITextView
          text="Sample complain title"
          textStyle={{ fontSize: 18, fontWeight: "bold" }}
        />

        <UITextView
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          textStyle={{ fontSize: 18, marginVertical: DIMENSION.MARGIN }}
        />

        <UITextView
          text={`Curent Status: On-going Investigation`}
          textStyle={{
            fontSize: 15,
            color: COLORS.blue.blue400,
            fontWeight: "bold",
          }}
        />
      </View>
    </UIContainer>
  );
};

const styles = StyleSheet.create({});

export default DetailsScreen;
