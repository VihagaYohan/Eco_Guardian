import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

// components
import { UITextView } from ".";

// constants
import { COLORS } from "../constants";

const UIHeader = (props) => {
  return (
    <View style={[styles.container]}>
      <UITextView
        text={props.title.toUpperCase()}
        textStyle={styles.titleStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    color: COLORS.white,
  },
});

UIHeader.PropTypes = {
  title: PropTypes.string.isRequired,
  titleStyle: PropTypes.object,
};

export default UIHeader;
