import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { DARK_MODE_BG_COLOR } from "../constant";
import FloatMenu from "../components/FloatMenu";
import MainContext from "../contexts/MainContext";

const CheckListScreen = (props) => {
  const state = useContext(MainContext);
  return (
    <>
      <FloatMenu />
      <View
        style={{
          backgroundColor: state.isDark ? DARK_MODE_BG_COLOR : "#fff",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => props.navigation.navigate("HomeScreen")}
        >
          <Text>СИСТЕМД НЭВТРЭХ</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CheckListScreen;

const styles = StyleSheet.create({});
