import React, { Component, useLayoutEffect, useState } from "react";
import { StyleSheet, View, Alert } from "react-native";

// components
import { UITextView, UIContainer, UIButton, UITextInput } from "../components";
import { DIMENSION } from "../constants";

// service
import {addComplaint} from '../services/ComplaintService'

const NewComplaintScreen = ({ navigation, route }) => {
  const [complainName, setComplainName] = useState();
  const [description, setDescription] = useState();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Logs",
      headerLeft: (props) => <></>,
    });
  }, []);

  const handleSaveComplain = async () => {
    try {
      if(complainName.length === 0 && description.length === 0) {
        Alert.alert('Please check the fields')
      } else {
        addComplaint({
          complain_name: complainName, 
          complain_descrip: description
        })
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <UIContainer>
      <View style={{ flex: 1, paddingVertical: DIMENSION.PADDING }}>
        <UITextInput
          placeholder="Enter complain title"
          value={complainName}
          onChangeText={(text) => setComplainName(text)}
        />

        <UITextInput
          placeholder="Enter complain description"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />

        <UIButton
          label="Add Attachments"
          onPress={() => console.log()}
          isPrimary={false}
          buttonStyle={{ marginBottom: DIMENSION.MARGIN }}
        />

        <UIButton label="Add Complain" onPress={() => handleSaveComplain()} />
      </View>
    </UIContainer>
  );
};

const styles = StyleSheet.create({});

export default NewComplaintScreen;
