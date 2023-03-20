import { StyleSheet } from "react-native/types";

export const styles = (
  textColor?: any,
  textTransform?: any
) => StyleSheet.create({
  text: {
    color: textColor,
    textTransform: textTransform,
  }
});