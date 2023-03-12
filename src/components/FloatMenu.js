import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext, useEffect } from "react";
import { Icon } from "@rneui/base";
import { DARK_MODE_BG_COLOR, DARK_MODE_LIGHT_COLOR } from "../constant";
import MainContext from "../contexts/MainContext";

const FloatMenu = () => {
  const state = useContext(MainContext);

  return (
    <View
      style={{
        position: "absolute",
        top: 30,
        width: "5%",
        flexDirection: "column",
        backgroundColor: state.isDark ? DARK_MODE_BG_COLOR : "#fff",
        zIndex: 999,
      }}
    >
      <TouchableOpacity style={styles.eachMenuContainer}>
        <Icon
          type="feather"
          name="power"
          size={30}
          color={state.isDark ? DARK_MODE_LIGHT_COLOR : DARK_MODE_BG_COLOR}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.eachMenuContainer}>
        <Icon
          type="feather"
          name="plus"
          size={30}
          color={state.isDark ? DARK_MODE_LIGHT_COLOR : DARK_MODE_BG_COLOR}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.eachMenuContainer}>
        <Icon
          type="feather"
          name="minus"
          size={30}
          color={state.isDark ? DARK_MODE_LIGHT_COLOR : DARK_MODE_BG_COLOR}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.eachMenuContainer}>
        <Icon
          type="ionicon"
          name="earth-outline"
          size={30}
          color={state.isDark ? DARK_MODE_LIGHT_COLOR : DARK_MODE_BG_COLOR}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.eachMenuContainer}
        onPress={() => state.setIsDark(!state.isDark)}
      >
        <Icon
          type="material-community"
          name="circle-half-full"
          size={30}
          color={state.isDark ? DARK_MODE_LIGHT_COLOR : DARK_MODE_BG_COLOR}
        />
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
