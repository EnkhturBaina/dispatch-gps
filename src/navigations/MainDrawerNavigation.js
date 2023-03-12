import { ScrollView, StyleSheet, SafeAreaView, View, Text } from "react-native";
import React, { useContext } from "react";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import HomeScreenTabNavigation from "./HomeScreenTabNavigation";
import MainContext from "../contexts/MainContext";
import SplashScreen from "../screens/SplashScreen";
import { LoginStackNavigator } from "./MainStackNavigation";

const Drawer = createDrawerNavigator();

const MainDrawerNavigation = () => {
  const state = useContext(MainContext);

  function CustomDrawerContent(props) {
    return (
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <SafeAreaView>
          <DrawerItemList {...props} />
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text>Menu</Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }

  if (state.isLoading) {
    return <SplashScreen />;
  } else {
    return (
      <Drawer.Navigator
        initialRouteName={state.isLoggedIn ? "HomeNav" : "Login"}
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            width: "100%",
          },
          drawerItemStyle: {
            marginBottom: 0,
          },
          drawerLabelStyle: {},
        }}
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        {!state.isLoggedIn ? (
          <Drawer.Screen
            name="Login"
            options={{
              drawerItemStyle: { height: 0 },
              title: "Нэвтрэх",
            }}
            component={LoginStackNavigator}
          />
        ) : (
          <>
            <Drawer.Screen
              name="HomeNav"
              component={HomeScreenTabNavigation}
              options={{
                drawerItemStyle: { height: 0 },
                title: "",
              }}
            />
          </>
        )}
      </Drawer.Navigator>
    );
  }
};

export default MainDrawerNavigation;

const styles = StyleSheet.create({});
