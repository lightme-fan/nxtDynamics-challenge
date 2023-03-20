import { StyleSheet } from "react-native/types";

export const styles = (
  backgroundColor?: any,
  borderColor?: any,
  textColor?: any,
  textTransform?: any,
) => StyleSheet.create({
  button: {
    borderRadius: 8,
    borderWidth: 1.3,
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    color: textColor,
    textTransform: textTransform,
  }
});