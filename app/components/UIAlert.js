import React, { Component, useState } from "react";
import { StyleSheet, Modal, View } from "react-native";
import PropTypes from "prop-types";

// components
import { UIButton, UITextView } from "../components";

// constants
import { COLORS, DIMENSION } from "../constants";

const UIAlert = (props) => {
  const [visible, setVisible] = useState(true);

  // handel model close
  const handleClose = () => {
    setVisible(false);
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <UITextView
          text={props.title.length != 0 ? props.title : "Message"}
          textStyle={{
            fontSize: 18,
            color: COLORS.backgroundColor,
            marginBottom: DIMENSION.PADDING / 2,
          }}
        />

        <UITextView
          text={
            props.message.length != 0 ? props.message : "Message description"
          }
          textStyle={styles.descriptionStyle}
        />

        <UIButton
          label="Close"
          buttonContainerStyle={styles.buttonContainerStyle}
          buttonTextStyle={styles.buttonTextStyle}
          onClick={() => handleClose()}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.navigationColor,
  },
  messageContainer: {
    width: DIMENSION.SCREEN_WIDTH - DIMENSION.MARGIN,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: DIMENSION.CARD_BORDER_RADIUS,
    backgroundColor: COLORS.white,
    padding: DIMENSION.MARGIN / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  descriptionStyle: {
    fontSize: 15,
    color: COLORS.backgroundColor,
    textAlign: "center",
    marginBottom: DIMENSION.MARGIN_BOTTON / 2,
  },
  buttonContainerStyle: {
    backgroundColor: COLORS.red.red700,
  },
  buttonTextStyle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});

UIAlert.PropTypes = {};

UIAlert.defaultProps = {
  visible: true,
};

export default UIAlert;
