import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "@rneui/base";

const FloatMenu = () => {
  return (
    <View
      style={{
        position: "absolute",
        top: 30,
        width: "5%",
        flexDirection: "column",
      }}
    >
      <TouchableOpacity style={styles.eachMenuContainer}>
        <Icon type="feather" name="power" size={30} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.eachMenuContainer}>
        <Icon type="feather" name="plus" size={30} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.eachMenuContainer}>
        <Icon type="feather" name="minus" size={30} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.eachMenuContainer}>
        <Icon type="ionicon" name="earth-outline" size={30} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.eachMenuContainer}>
        <Icon type="material-community" name="circle-half-full" size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default FloatMenu;

const styles = StyleSheet.create({
  eachMenuContainer: {
    borderWidth: 1,
    height: 50,
    justifyContent: "center",
  },
});
