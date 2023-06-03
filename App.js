import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { MainStore } from "./src/contexts/MainContext";
import HomeScreenTabNavigation from "./src/navigations/HomeScreenTabNavigation";
import MainDrawerNavigation from "./src/navigations/MainDrawerNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text } from "react-native";
import HeaderContent from "./src/components/HeaderContent";
import { MenuProvider } from "react-native-popup-menu";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainStore>
          <MenuProvider>
            {/* <MainDrawerNavigation /> */}
            {/* Drawer нэмэгдэхээр бол дээрхи кодны коммент -г авах */}
            <HeaderContent />
            <HomeScreenTabNavigation />
          </MenuProvider>
        </MainStore>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
