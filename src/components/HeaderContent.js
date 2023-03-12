import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext, useEffect } from "react";
import { Icon } from "@rneui/base";
import { DARK_MODE_BG_COLOR, DARK_MODE_LIGHT_COLOR } from "../constant";
import MainContext from "../contexts/MainContext";

const HeaderContent = () => {
  const state = useContext(MainContext);
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: state.isDark ? DARK_MODE_BG_COLOR : "#fff",
        justifyContent: "flex-end",
        paddingRight: "5%",
      }}
    >
      <View style={styles.stackContainer}>
        <Icon
          type="material-community"
          name="dump-truck"
          size={30}
          color={state.isDark ? DARK_MODE_LIGHT_COLOR : DARK_MODE_BG_COLOR}
        />
        <Text
          style={{
            marginLeft: 5,
            color: state.isDark ? DARK_MODE_LIGHT_COLOR : DARK_MODE_BG_COLOR,
          }}
        >
          DT 001
        </Text>
      </View>
      <View style={styles.stackContainer}>
        <Icon
          type="entypo"
          name="user"
          size={20}
          color={state.isDark ? DARK_MODE_LIGHT_COLOR : DARK_MODE_BG_COLOR}
        />
        <Text
          style={{
            marginLeft: 5,
            color: state.isDark ? DARK_MODE_LIGHT_COLOR : DARK_MODE_BG_COLOR,
          }}
        >
          БАТ-ЭРДЭНЭ ТӨМӨРСҮХ
        </Text>
      </View>
      <View style={styles.stackContainer}>
        <Icon
          type="entypo"
          name="back-in-time"
          size={25}
          color={state.isDark ? DARK_MODE_LIGHT_COLOR : DARK_MODE_BG_COLOR}
        />
        <Text
          style={{
            marginLeft: 5,
            color: state.isDark ? DARK_MODE_LIGHT_COLOR : DARK_MODE_BG_COLOR,
          }}
        >
          ӨДРИЙН ЭЭЛЖ
        </Text>
      </View>
    </View>
  );
};

export default HeaderContent;

const styles = StyleSheet.create({
  stackContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
});
