import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Button } from "react-native-paper";
import MainContext from "../contexts/MainContext";

const LoginScreen = () => {
  const state = useContext(MainContext);

  return (
    <View>
      <Text>LoginScreen</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => state.setIsLoggedIn(true)}
      >
        Press me
      </Button>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
