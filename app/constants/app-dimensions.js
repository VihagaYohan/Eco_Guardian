import React, { Component } from "react";
import { Dimensions, Platform, PixelRatio, processColor } from "react-native";
import moment from "moment";

const { width, height, fontScale } = Dimensions.get("screen");

// responsive font size
export const RFSize = (size) => {
  return size;
};

// check if device is in landscape
export const isLandscape = () => {
  return width > height;
};

// show console log
export const showConsole = (content) => {
  if (__DEV__) {
    console.log(content);
  }
};

// export get alphabet letters
export const getAlphabet = () => {
  return [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "#",
  ];
};

// normalize font size
export const normalizeFontSize = (fontSize) => {
  const scale = Dimensions.get("window").scale / 320;
  const newSize = fontSize * (scale / 2);

  if (Platform.OS == "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(fontSize)) - 2;
  }
};

export default {
  PADDING: RFSize(20),
  PADDING_LEFT: RFSize(20),
  PADDING_RIGHT: RFSize(20),
  PADDING_BOTTON: RFSize(20),
  PADDING_TOP: RFSize(20),
  MARGIN: RFSize(20),
  MARGIN_LEFT: RFSize(20),
  MARGIN_RIGHT: RFSize(20),
  MARGIN_BOTTON: RFSize(20),
  MARGIN_TOP: RFSize(20),
  CARD_BORDER_RADIUS: RFSize(10),
  TABLE_CELL_FONT_SIZE: 12,
  TABLE_TITLE_FONT_SIZE: 18,
  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: height,
  SECTION_TITLE_FONT_SIZE: 16,
  Card: {
    TITLE_SECTION_MARGIN_BOTTOM: 10,
  },
  RADIUS: RFSize(10),
  RFSize,
  isLandscape,
  showConsole,
  getAlphabet,
  normalizeFontSize,
  fontScale,
};
