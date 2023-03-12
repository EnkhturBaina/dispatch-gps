import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import FloatMenu from "../components/FloatMenu";
import { DARK_MODE_BG_COLOR } from "../constant";
import MainContext from "../contexts/MainContext";

const HomeScreen = () => {
  const state = useContext(MainContext);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: state.isDark ? DARK_MODE_BG_COLOR : "#fff",
      }}
    >
      <Text style={{ color: state.isDark ? DARK_MODE_BG_COLOR : "#000" }}>
        HomeScreen
      </Text>
      <FloatMenu />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
