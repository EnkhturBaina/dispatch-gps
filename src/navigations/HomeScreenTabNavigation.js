import { StyleSheet, Text, Platform } from "react-native";
import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreenStackNavigator,
  LoginStackNavigator,
} from "./MainStackNavigation";
import MainContext from "../contexts/MainContext";
import { MAIN_COLOR } from "../constant";
import SplashScreen from "../screens/SplashScreen";
import { Icon } from "@rneui/base";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();
const HomeScreenTabNavigation = () => {
  const state = useContext(MainContext);
  if (state.isLoading) {
    // Апп ачааллах бүрт SplashScreen харуулах
    return <SplashScreen />;
  } else if (!state.isLoading && !state.isLoggedIn) {
    // Нэвтрээгүй үед
    return <LoginStackNavigator />;
  } else {
    return (
      <HomeScreenStackNavigator />
      // <Tab.Navigator
      //   screenOptions={{
      //     tabBarLabelPosition: "below-icon",
      //     headerShown: false,
      //     tabBarStyle: {
      //       position: "absolute",
      //       backgroundColor: "black",
      //       borderTopStartRadius: 25,
      //       borderTopEndRadius: 25,
      //       paddingTop: 5,
      //       height: Platform.OS == "ios" ? 70 : 60,
      //       paddingBottom: 20,
      //     },
      //   }}
      // >
      //   <Tab.Screen
      //     name="HomeTab"
      //     component={HomeScreenStackNavigator}
      //     options={{
      //       tabBarIcon: ({ focused }) => {
      //         return (
      //           <Icon
      //             name="home"
      //             type="font-awesome"
      //             size={20}
      //             color={focused ? MAIN_COLOR : "#fff"}
      //           />
      //         );
      //       },
      //       tabBarLabel: ({ focused }) => {
      //         return (
      //           <Text
      //             style={{
      //               // fontFamily: focused ? FONT_FAMILY_BOLD : FONT_FAMILY_LIGHT,
      //               color: focused ? MAIN_COLOR : "#fff",
      //             }}
      //           >
      //             Нүүр
      //           </Text>
      //         );
      //       },
      //     }}
      //   />
      //   <Tab.Screen
      //     name="ProfileTab"
      //     component={LoginStackNavigator}
      //     options={{
      //       tabBarIcon: ({ focused }) => {
      //         return (
      //           <Icon
      //             name="user"
      //             type="font-awesome"
      //             size={20}
      //             color={focused ? MAIN_COLOR : "#fff"}
      //           />
      //         );
      //       },
      //       tabBarLabel: ({ focused }) => {
      //         return (
      //           <Text
      //             style={{
      //               // fontFamily: focused ? FONT_FAMILY_BOLD : FONT_FAMILY_LIGHT,
      //               color: focused ? MAIN_COLOR : "#fff",
      //             }}
      //           >
      //             Профайл
      //           </Text>
      //         );
      //       },
      //     }}
      //   />
      // </Tab.Navigator>
    );
  }
};

export default HomeScreenTabNavigation;

const styles = StyleSheet.create({});
