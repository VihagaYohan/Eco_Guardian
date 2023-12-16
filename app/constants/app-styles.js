import { StyleSheet } from "react-native";

// constants
import { COLORS } from "./index";

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
  },
  shadow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default styles;
