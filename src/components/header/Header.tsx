import React, { FC } from "react";
import { Button, Image, SafeAreaView, Text, View } from "react-native";
import { styles } from "./headerStyles";

interface PropTypes { title: string }

const Header: FC<PropTypes> = ({ title }) => {
  const { container, logo, heading } = styles
  return (
    <SafeAreaView style={container}>
      <View>
        <Image
          style={logo}
          source={{ uri: "https://www.nxtdynamics.com/wp-content/uploads/2023/01/2-1.png"}}
        />
      </View>
      <View>
        <Text style={heading}>{title}</Text>
      </View>
    </SafeAreaView>
  )
}

export default Header;