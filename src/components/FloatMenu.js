import { Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import React, { useContext, useEffect } from "react";
import { Icon } from "@rneui/base";
import { DARK_MODE_BG_COLOR, DARK_MODE_LIGHT_COLOR } from "../constant";
import MainContext from "../contexts/MainContext";

const FloatMenu = () => {
  const state = useContext(MainContext);

  const styles = {
    eachMenuContainer: {
      borderWidth: 1,
      height: 50,
      justifyContent: "center",
      borderColor: state.isDark ? DARK_MODE_LIGHT_COLOR : DARK_MODE_BG_COLOR,
    },
  };
  return (
    <View
      style={{
        position: "absolute",
        top: 30,
        width: 50,
        flexDirection: "column",
        backgroundColor: state.isDark ? DARK_MODE_BG_COLOR : "#fff",
      }}
    >
      <TouchableOpacity
        style={styles.eachMenuContainer}
        onPress={() => state.setIsLoggedIn(false)}
      >
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
          name="earth"
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
