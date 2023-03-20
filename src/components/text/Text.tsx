import React, { FC } from "react";
import { Button, Text, View } from "react-native";
import { styles } from "./textStyles";

interface PropTypes {
  children?: any;
  textColor?: string;
  textTransform?: any;
}

const TextComponent: FC<PropTypes> = ({
  children,
  textColor,
  textTransform
}) => {

  return (
    <Text style={styles(textColor, textTransform)}>{children}</Text>
  )
}

export default TextComponent;