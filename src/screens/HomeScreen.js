import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";
import FloatMenu from "../components/FloatMenu";

const HomeScreen = () => {
  let colorScheme = useColorScheme();

  if (colorScheme === "dark") {
    // render some dark thing
    console.log("DARK");
  } else {
    console.log("LIGHT");
    // render some light thing
  }
  return (
    <View>
      <Text>HomeScreen</Text>
      <FloatMenu />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
