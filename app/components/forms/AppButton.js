import { View, Text } from "react-native";
import React from "react";
import colors from "../../config/color";
import AppText from "../typo/AppText";

const AppButton = ({ title, ...others }) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: colors["fire-engine-red"],
        borderRadius: 20,
        justifyContent: "center",
        padding: 25,
        alignItems: "center",
      }}
    >
      <AppText value={title} size={15} {...others} color="white" bold={false} />
    </View>
  );
};

export default AppButton;
