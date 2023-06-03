import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { Button } from "react-native-paper";
import MainContext from "../contexts/MainContext";
import FloatMenu from "../components/FloatMenu";
import {
  DARK_MODE_BG_COLOR,
  DARK_MODE_BG_COLOR_LIGHT,
  DARK_MODE_LIGHT_COLOR,
  MAIN_COLOR,
  MAIN_COLOR_GREEN,
} from "../constant";
import { FlatList } from "react-native";

const LoginScreen = () => {
  const state = useContext(MainContext);
  const [employeeId, setEmployeeId] = useState("");
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
        <View
          style={{
            alignItems: "center",
            paddingHorizontal: 200,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                color: state.isDark ? DARK_MODE_LIGHT_COLOR : "#000",
                fontSize: 18,
                width: "30%",
              }}
            >
              АЖИЛТАНЫ ID:
            </Text>
            <TextInput
              style={{
                height: 60,
                backgroundColor: DARK_MODE_LIGHT_COLOR,
                width: "70%",
                fontSize: 24,
                paddingHorizontal: 10,
              }}
              value={employeeId}
              onChange={setEmployeeId}
              keyboardType="number-pad"
              editable={false}
            />
          </View>
          <FlatList
            bounces={false}
            columnWrapperStyle={{
              justifyContent: "space-evenly",
            }}
            contentContainerStyle={{
              marginVertical: 5,
              width: "100%",
            }}
            data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    margin: 4,
                    width: "19%",
                    height: 60,
                    backgroundColor: state.isDark
                      ? DARK_MODE_BG_COLOR_LIGHT
                      : DARK_MODE_LIGHT_COLOR,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => setEmployeeId(employeeId + item)}
                >
                  <Text
                    style={{
                      color: state.isDark
                        ? DARK_MODE_LIGHT_COLOR
                        : DARK_MODE_BG_COLOR,
                      fontSize: 18,
                    }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
            numColumns={5}
            keyExtractor={(item, index) => index}
          />
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.clearBtn}
              onPress={() =>
                setEmployeeId(employeeId?.toString()?.slice(0, -1))
              }
            >
              <Text style={styles.btnText}>АРИЛГАХ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                state.setIsLoggedIn(true);
                state.setCheckListDone(false);
              }}
              style={styles.loginBtn}
            >
              <Text style={styles.btnText}>СИСТЕМД НЭВТРЭХ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  clearBtn: {
    backgroundColor: MAIN_COLOR,
    height: 60,
    width: "48%",
    justifyContent: "center",
  },
  loginBtn: {
    backgroundColor: MAIN_COLOR_GREEN,
    height: 60,
    width: "48%",
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});
