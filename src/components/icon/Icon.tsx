import React, { FC } from "react";
import { Button, Image, Pressable, View } from "react-native";

interface PropTypes { source: string };

const Icon: FC<PropTypes> = ({source}) => {
  return (
    <View>
      <Pressable>
        <Image source={{ uri: source }}/>
      </Pressable>
    </View>
  )
}

export default Icon;