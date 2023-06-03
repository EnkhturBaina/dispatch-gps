import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import FloatMenu from "../components/FloatMenu";
import {
  DARK_MODE_BG_COLOR,
  MAIN_COLOR_GREEN,
  MAIN_COLOR_RED,
} from "../constant";
import MainContext from "../contexts/MainContext";
import { Icon } from "@rneui/base";

const HomeScreen = () => {
  const state = useContext(MainContext);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: state.isDark ? DARK_MODE_BG_COLOR : "#fff",
      }}
    >
      <FloatMenu />
      <View style={styles.mainContainer}>
        <Text style={{ color: state.isDark ? DARK_MODE_BG_COLOR : "#000" }}>
          HomeScreen
        </Text>
        <View></View>
      </View>
      <View style={styles.floatingMenuContainer}>
        <TouchableOpacity style={styles.floatinMenu}>
          <Text style={{ color: "#fff" }}>МАТЕРИАЛЫН УРСГАЛ</Text>
          <Icon
            type="entypo"
            name="resize-full-screen"
            size={25}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.verticalFloatingMenuContainer}>
        <TouchableOpacity style={styles.verticalFloatinMenu}>
          <Text style={{ color: "#fff" }}>БҮТЭЭЛТЭЙ АЖИЛЛАХ</Text>
          <Icon
            type="entypo"
            name="resize-full-screen"
            size={25}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: MAIN_COLOR_GREEN,
            marginRight: 5,
          }}
        >
          <Text style={styles.bottomBtnText}>БҮТЭЭЛИЙН БУС АЖИЛЛАХ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "#faeb61",
            marginRight: 5,
          }}
        >
          <Text style={styles.bottomBtnText}>СААТАЛ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "#79a0fc",
            marginRight: 5,
          }}
        >
          <Text style={styles.bottomBtnText}>СУЛ ЗОГСОЛТ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: MAIN_COLOR_RED,
          }}
        >
          <Text style={styles.bottomBtnText}>ЭВДРЭЛ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginLeft: 60,
    flex: 1,
    marginRight: 10,
  },
  bottomBtnText: {
    flex: 1,
    textAlign: "center",
    color: "#fff",
    textAlignVertical: "center",
  },
  floatingMenuContainer: {
    flex: 1,
    flexDirection: "row",
    height: 40,
    position: "absolute",
    bottom: 50,
    margin: 10,
  },
  floatinMenu: {
    backgroundColor: "#00b0f0",
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: "row",
    height: 40,
    position: "absolute",
    bottom: 0,
    width: "98%",
    margin: 10,
  },
  verticalFloatingMenuContainer: {
    flex: 1,
    backgroundColor: "red",
    position: "absolute",
    margin: 10,
    width: "40%",
    right: 0,
    top: 200,
    // transform: [{ rotate: "-90deg" }],
  },
  verticalFloatinMenu: {
    backgroundColor: "#ffc001",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
