import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import {
  HomeScreenStackNavigator,
  LoginStackNavigator,
} from "./MainStackNavigation";
import MainContext from "../contexts/MainContext";
import SplashScreen from "../screens/SplashScreen";
import CheckListScreen from "../screens/CheckListScreen";

const HomeScreenTabNavigation = () => {
  const state = useContext(MainContext);
  if (state.isLoading) {
    // Апп ачааллах бүрт SplashScreen харуулах
    return <SplashScreen />;
  } else if (!state.isLoading && !state.isLoggedIn) {
    // Нэвтрээгүй үед
    return <LoginStackNavigator />;
  } else if (!state.isLoading && state.isLoggedIn && !state.checkListDone) {
    // Checklist false үед
    return <CheckListScreen />;
  } else {
    return <HomeScreenStackNavigator />;
  }
};

export default HomeScreenTabNavigation;

const styles = StyleSheet.create({});
