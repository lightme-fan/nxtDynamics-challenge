import React, { FC } from "react";
import { Button, View } from "react-native";
import { styles } from "./buttonStyles";

interface PropTypes {
  title: string;
  accessibility: string;
  backgroundColor?: any;
  borderColor?: any;
  textColor?: any;
  textTransform?: any;
}

const ButtonComponent: FC<PropTypes> = ({
  title,
  accessibility,
  backgroundColor,
  borderColor,
  textColor,
  textTransform
}) => {
  return (
    <View
      style={
        styles(backgroundColor, borderColor, textColor, textTransform).button
      }
    >
      <Button
        title={title}
        accessibilityLabel={accessibility}
      />
    </View>
  )
}

export default ButtonComponent;