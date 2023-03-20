import React, { FC } from "react";
import { View } from "react-native";
import { styles } from "./listItemStyles";

interface PropTypes {
  padding?: number;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  textTransform?: string;
  children?: any;
}

const ListItem: FC<PropTypes> = ({
  padding,
  backgroundColor,
  borderColor,
  textColor,
  textTransform,
  children
}) => {
  return (
    <View
      style={
        styles(padding, backgroundColor, borderColor, textColor, textTransform).item
      }
    >
      {children}
    </View>
  )
}

export default ListItem;