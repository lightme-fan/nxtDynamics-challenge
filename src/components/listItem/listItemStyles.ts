import { StyleSheet } from "react-native/types";

export const styles = (
    padding?: number,
    backgroundColor?: string,
    borderColor?: string,
    textColor?: string,
    textTransform?: string,
) => StyleSheet.create({
  item: {
    borderRadius: 8,
    padding: padding,
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    color: textColor,
    textTransform: textTransform,
  }
});