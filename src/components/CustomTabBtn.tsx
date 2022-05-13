import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import React, { FC, memo } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

const CustomTabBtn: FC<BottomTabBarButtonProps> = ({
  children,
  onPress,
}: BottomTabBarButtonProps) => (
  <TouchableOpacity style={styles.btn} onPress={onPress}>
    <View style={styles.btnChild}>{children}</View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btn: {
    top: -20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  btnChild: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#F44336",
  },
});

export default memo(CustomTabBtn);
