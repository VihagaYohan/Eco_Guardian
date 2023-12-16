import React, { Component } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  View,
  Modal,
  Dimensions,
} from "react-native";
import PropTypes from "prop-types";

// constants
import { COLORS, DIMENSION } from "../constants";

const UILoader = (props) => {
  return (
    <Modal
      visible={props.visible}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <View style={styles.modalContainer}>
        <ActivityIndicator size="large" color={COLORS.blue.blue800} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    padding: DIMENSION.PADDING,
    justifyContent: "center",
    alignItems: "center",
  },
});

UILoader.PropTypes = {
  visible: PropTypes.bool.isRequired,
};

export default UILoader;
