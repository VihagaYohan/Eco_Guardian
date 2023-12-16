import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";

// constants
import { COLORS, DIMENSION } from "../constants";

const UIContainer = (props) => {
  return (
    <SafeAreaView style={[styles.container, props.containerStyle]}>
      <StatusBar
        backgroundColor={COLORS.backgroundColor}
        barStyle="light-content"
      />

      <View style={{ ...styles.innerParent, ...props.innerContainerStyle }}>
        {props.children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pageBackground,
  },
  innerParent: {
    flex: 1,
    paddingHorizontal: DIMENSION.PADDING,
  },
});

UIContainer.PropTypes = {
  children: PropTypes.element.isRequired,
};

export default UIContainer;
