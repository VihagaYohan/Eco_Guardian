import React, { Component, useLayoutEffect, useState } from "react";
import { StyleSheet, View, Alert } from "react-native";

// components
import { UITextView, UIContainer, UIButton, UITextInput } from "../components";
import { DIMENSION } from "../constants";

// service
import {addComplaint} from '../services/ComplaintService'

const DetailsScreen = ({ navigation, route }) => {
  const [complainName, setComplainName] = useState();
  const [description, setDescription] = useState();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Logs",
      headerLeft: (props) => <></>,
    });
  }, []);



  return (
    <UIContainer>
      <View style={{ flex: 1, paddingVertical: DIMENSION.PADDING }}>
        
      </View>
    </UIContainer>
  );
};

const styles = StyleSheet.create({});

export default DetailsScreen;
