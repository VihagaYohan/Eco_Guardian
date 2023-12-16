import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

const UITextView = (props) => {
  return (
    <Text style={[styles.textStyle, props.textStyle]} {...props}>
      {props.text}
    </Text>
  );
};

const styles = StyleSheet.create({});

UITextView.PropTypes = {
  text: PropTypes.string.isRequired,
  textStyle: PropTypes.object,
};

export default UITextView;
