import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Button } from "react-native-paper";
import MainContext from "../contexts/MainContext";
import FloatMenu from "../components/FloatMenu";

const LoginScreen = () => {
  const state = useContext(MainContext);

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <Text>LoginScreen</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => state.setIsLoggedIn(true)}
      >
        Press me
      </Button>
      <FloatMenu />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
