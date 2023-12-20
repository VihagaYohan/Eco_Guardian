import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

// constants
import { DIMENSION, COLORS } from "../../constants";

// components
import { UITextView } from "../index";

const UIButton = (props) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonStyle,
        props.buttonStyle,
        {
          backgroundColor: props.isPrimary
            ? COLORS.primaryColor
            : "rgba(102,187,106, 0.8)",
        },
      ]}
      onPress={() => props.onPress()}
      {...props}
    >
      <UITextView
        text={props.label}
        textStyle={[styles.labelStyle, props.labelStyle]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: DIMENSION.SCREEN_WIDTH - DIMENSION.MARGIN * 2,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primaryColor,
    paddingVertical: DIMENSION.RFSize(18) * DIMENSION.fontScale,
  },
  labelStyle: {
    fontSize: 17,
    color: COLORS.white,
    fontWeight: "bold",
  },
});

UIButton.PropTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  isPrimary: PropTypes.bool.isRequired,
  buttonStyle: PropTypes.object,
  labelStyle: PropTypes.object,
};

UIButton.defaultProps = {
  isPrimary: true,
};

export default UIButton;
