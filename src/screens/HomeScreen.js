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
import { useState } from "react";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from "react-native-popup-menu";

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
      <View style={styles.mainContainer}></View>
      <View style={styles.floatingMenuContainer}>
        <Menu renderer={renderers.Popover}>
          <MenuTrigger style={styles.floatinMenu}>
            <Text style={{ color: "#fff" }}>МАТЕРИАЛЫН УРСГАЛ</Text>
            <Icon
              type="entypo"
              name="resize-full-screen"
              size={25}
              color="#fff"
            />
          </MenuTrigger>
          <MenuOptions
            style={{
              backgroundColor: state.isDark ? DARK_MODE_BG_COLOR : "#fff",
            }}
          >
            <MenuOption
              onSelect={() => alert(`Save`)}
              text="(W2) Ул, хана цэвэрлэх"
              customStyles={{
                optionText: { color: MAIN_COLOR_GREEN },
              }}
            />
          </MenuOptions>
        </Menu>
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
        <Menu renderer={renderers.Popover} style={{ flex: 1 }}>
          <MenuTrigger
            style={{
              backgroundColor: MAIN_COLOR_GREEN,
              marginRight: 5,
              height: 40,
            }}
          >
            <Text style={styles.bottomBtnText}>БҮТЭЭЛИЙН БУС АЖИЛЛАХ</Text>
          </MenuTrigger>
          <MenuOptions
            style={{
              backgroundColor: state.isDark ? DARK_MODE_BG_COLOR : "#fff",
            }}
          >
            <MenuOption
              onSelect={() => alert(`Save`)}
              text="(W2) Ул, хана цэвэрлэх"
              customStyles={{
                optionText: { color: MAIN_COLOR_GREEN },
              }}
            />
          </MenuOptions>
        </Menu>
        <Menu renderer={renderers.Popover} style={{ flex: 1 }}>
          <MenuTrigger
            style={{
              backgroundColor: "#faeb61",
              marginRight: 5,
              height: 40,
            }}
          >
            <Text style={styles.bottomBtnText}>СААТАЛ</Text>
          </MenuTrigger>
          <MenuOptions
            style={{
              backgroundColor: state.isDark ? DARK_MODE_BG_COLOR : "#fff",
            }}
          >
            <MenuOption
              onSelect={() => alert(`Save`)}
              text="(W2) Ул, хана цэвэрлэх"
              customStyles={{
                optionText: { color: MAIN_COLOR_GREEN },
              }}
            />
          </MenuOptions>
        </Menu>
        <Menu renderer={renderers.Popover} style={{ flex: 1 }}>
          <MenuTrigger
            style={{
              backgroundColor: "#79a0fc",
              marginRight: 5,
              height: 40,
            }}
          >
            <Text style={styles.bottomBtnText}>СУЛ ЗОГСОЛТ</Text>
          </MenuTrigger>
          <MenuOptions
            style={{
              backgroundColor: state.isDark ? DARK_MODE_BG_COLOR : "#fff",
            }}
          >
            <MenuOption
              onSelect={() => alert(`Save`)}
              text="(W2) Ул, хана цэвэрлэх"
              customStyles={{
                optionText: { color: MAIN_COLOR_GREEN },
              }}
            />
          </MenuOptions>
        </Menu>
        <Menu renderer={renderers.Popover} style={{ flex: 1 }}>
          <MenuTrigger
            style={{
              backgroundColor: MAIN_COLOR_RED,
              marginRight: 5,
              height: 40,
            }}
          >
            <Text style={styles.bottomBtnText}>ЭВДРЭЛ</Text>
          </MenuTrigger>
          <MenuOptions
            style={{
              backgroundColor: state.isDark ? DARK_MODE_BG_COLOR : "#fff",
            }}
          >
            <MenuOption
              onSelect={() => alert(`Save`)}
              text="(W2) Ул, хана цэвэрлэх"
              customStyles={{
                optionText: { color: MAIN_COLOR_GREEN },
              }}
            />
          </MenuOptions>
        </Menu>
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
    justifyContent: "space-between",
    width: "98%",
  },
  floatinMenu: {
    backgroundColor: "#00b0f0",
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 40,
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
  verticalFloatinMenu: {
    backgroundColor: "#ffc001",
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
