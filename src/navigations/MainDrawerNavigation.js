import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useContext } from "react";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import HomeScreenTabNavigation from "./HomeScreenTabNavigation";
import MainContext from "../contexts/MainContext";
import SplashScreen from "../screens/SplashScreen";
import { LoginStackNavigator } from "./MainStackNavigation";
import { Icon } from "@rneui/base";
import {
  DARK_MODE_BG_COLOR,
  DARK_MODE_BG_COLOR_LIGHT,
  MAIN_COLOR_GRAY,
  MAIN_COLOR_GREEN,
} from "../constant";
import vehicle from "../../assets/vehicle.png";

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
        <SafeAreaView
          style={{
            flex: 1,
            margin: 3,
          }}
        >
          <DrawerItemList {...props} />
          <View style={styles.headerTitle}>
            <Text style={{ color: "#fff", fontSize: 16 }}>
              СОНГОГДСОН ТӨЛӨВ
            </Text>
            <Icon
              type="entypo"
              name="resize-full-screen"
              size={25}
              color="#fff"
            />
          </View>
          <View
            style={{
              alignItems: "center",
              padding: 10,
              backgroundColor: state.isDark ? DARK_MODE_BG_COLOR : "#fff",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                color: state.isDark ? "#fff" : DARK_MODE_BG_COLOR,
              }}
            >
              00:00:43
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              backgroundColor: MAIN_COLOR_GRAY,
            }}
          >
            <Image source={vehicle} style={{ width: 60, height: 60 }} />
            <Text style={{ color: "#79a0fc" }}>АЧААЛАГДАХ /СЭЛГЭЭ ХИЙХ/</Text>
          </TouchableOpacity>
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 5,
              backgroundColor: MAIN_COLOR_GREEN,
              marginTop: 3,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>
              БҮТЭЭЛТЭЙ АЖИЛЛАХ
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              backgroundColor: MAIN_COLOR_GRAY,
              marginTop: 3,
            }}
          >
            <Image source={vehicle} style={{ width: 60, height: 60 }} />
            <Text style={{ color: "#79a0fc" }}>АЧААЛАГДАХ /СЭЛГЭЭ ХИЙХ/</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              backgroundColor: MAIN_COLOR_GRAY,
              marginTop: 3,
            }}
          >
            <Image source={vehicle} style={{ width: 60, height: 60 }} />
            <Text style={{ color: MAIN_COLOR_GREEN }}>
              АЧААТАЙ ЧИГЛЭЛД ТЭЭВЭРЛЭХ
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              backgroundColor: MAIN_COLOR_GRAY,
              marginTop: 3,
            }}
          >
            <Image source={vehicle} style={{ width: 60, height: 60 }} />
            <Text style={{ color: MAIN_COLOR_GREEN }}>
              АЧАА БУУЛГАХ /СЭЛГЭЭ ХИЙХ/
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              backgroundColor: MAIN_COLOR_GRAY,
              marginTop: 3,
            }}
          >
            <Image source={vehicle} style={{ width: 60, height: 60 }} />
            <Text style={{ color: MAIN_COLOR_GREEN }}>ХООСОН БУЦАХ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              backgroundColor: MAIN_COLOR_GRAY,
              marginTop: 3,
            }}
          >
            <Image source={vehicle} style={{ width: 60, height: 60 }} />
            <Text style={{ color: MAIN_COLOR_GREEN }}>
              АЧИЛТ ХИЙЛГЭХЭЭР ХҮЛЭЭХ
            </Text>
          </TouchableOpacity>
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
          drawerPosition: "right",
          drawerStyle: {
            width: "30%",
          },
          drawerItemStyle: {
            marginBottom: 0,
          },
          drawerLabelStyle: {},
          swipeEdgeWidth: 0,
        }}
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

const styles = StyleSheet.create({
  headerTitle: {
    backgroundColor: "#ffc001",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
