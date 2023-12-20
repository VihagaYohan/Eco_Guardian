import React, { Component, useLayoutEffect, useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import moment from "moment";
import DropDownPicker from "react-native-dropdown-picker";

// components
import { UITextView, UIContainer, UIButton, UITextInput } from "../components";
import { COLORS, DIMENSION, STYLES } from "../constants";

// service
import { addComplaint } from "../services/ComplaintService";

const EditScreen = ({ navigation, route }) => {
  const [complainName, setComplainName] = useState();
  const [description, setDescription] = useState();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Department of Wild Life", value: "d1" },
    { label: "Ministry of Environment", value: "d2" },
  ]);
  const [statusItems, setStatusItems] = useState([
    { label: "LOW", value: "d1" },
    { label: "MIDIEM", value: "d2" },
    { label: "HIGH", value: "d2" },
    { label: "CRITICAL", value: "d2" },
  ]);
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Update Complaint",
      headerLeft: (props) => <></>,
      headerShown: true,
    });
  }, []);

  return (
    <UIContainer>
      <View style={{ flex: 1, paddingVertical: DIMENSION.PADDING }}>
        <UITextInput
          placeholder="Enter complain title"
          value="Sample complaint title"
          onChangeText={(text) => setComplainName(text)}
        />

        <UITextInput
          placeholder="Enter complain title"
          value="Sample complaint description"
          onChangeText={(text) => setComplainName(text)}
        />

        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />

        <View style={{height: 10}}></View>

        <DropDownPicker
          open={open}
          value={value}
          items={statusItems}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setStatusItems}
        />

        <UIButton
        label="Update"
        onPress={() => console.log('')}
        buttonStyle={{marginVertical: 10}}/>
      </View>
    </UIContainer>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
