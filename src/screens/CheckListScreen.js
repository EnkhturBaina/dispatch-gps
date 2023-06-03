import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext, useState } from "react";
import { DARK_MODE_BG_COLOR } from "../constant";
import FloatMenu from "../components/FloatMenu";
import MainContext from "../contexts/MainContext";
import { MAIN_COLOR_GREEN } from "../constant";
import { MAIN_COLOR_RED } from "../constant";
import { DARK_MODE_BG_COLOR_LIGHT } from "../constant";
import { DARK_MODE_LIGHT_COLOR } from "../constant";

const CheckListScreen = (props) => {
  const state = useContext(MainContext);

  const [selectedPage, setSelectedPage] = useState(1);

  const data = [
    {
      key: 1,
      label: "КАБИН - АНХААРУУЛАХ БОЛОН ҮЙЛДЛИЙН ГЭРЛҮҮД",
      isChecked: false,
    },
    {
      key: 2,
      label: "КАБИН - ХЯНАХ САМБАР БОЛОН ЗААГЧУУД",
      isChecked: false,
    },
    {
      key: 3,
      label: "КАБИН - БҮХ УДИРДЛАГУУДЫН АЖИЛЛАГАА, ПЕДАЛИУД",
      isChecked: false,
    },
    {
      key: 4,
      label: "КАБИН - ГЭРЭЛҮҮД БОЛОН ДУУТ ДОХИО",
      isChecked: false,
    },
    {
      key: 5,
      label: "КАБИН - ШИЛ АРЧИГЧ, РЕЗИН",
      isChecked: false,
    },
    {
      key: 6,
      label: "КАБИН – КАБИНЫ ГАДНА ХЭСЭГ, КАБИНЫ ЛАП",
      isChecked: false,
    },
    {
      key: 7,
      label: "КАБИН – РАДИО СТАНЦ",
      isChecked: false,
    },
    {
      key: 8,
      label: "КАБИН – СУУДАЛ, СУУДЛЫН БҮС, КАБИНЫ ДОТОРХ БҮРДЭЛ",
      isChecked: false,
    },
    {
      key: 9,
      label: "КАБИН – ГАЛЫН ХОРНЫ БҮРДЭЛ, БЭХЭЛГЭЭ, СУУРЬ",
      isChecked: false,
    },
    {
      key: 10,
      label: "КАБИН – КУНДАКТОРЫН ТҮЛХҮҮР, АЖИЛЛАГАА",
      isChecked: false,
    },
    {
      key: 11,
      label: "ХӨДӨЛГҮҮР – ХӨДӨЛГҮҮРИЙН ТОСНЫ ТҮВШИН, ГООЖИЛТ",
      isChecked: false,
    },
    {
      key: 12,
      label: "ХӨДӨЛГҮҮР – ХӨДӨЛГҮҮРИЙН САПУНЫ ТАГ, ШҮБ",
      isChecked: false,
    },
    {
      key: 12,
      label: "ХӨДӨЛГҮҮР – ХӨДӨЛГҮҮРИЙН САПУНЫ ТАГ, ШҮБ",
      isChecked: false,
    },
    {
      key: 12,
      label: "ХӨДӨЛГҮҮР – ХӨДӨЛГҮҮРИЙН САПУНЫ ТАГ, ШҮБ",
      isChecked: false,
    },
    {
      key: 12,
      label: "ХӨДӨЛГҮҮР – ХӨДӨЛГҮҮРИЙН САПУНЫ ТАГ, ШҮБ",
      isChecked: false,
    },
    {
      key: 12,
      label: "ХӨДӨЛГҮҮР – ХӨДӨЛГҮҮРИЙН САПУНЫ ТАГ, ШҮБ",
      isChecked: false,
    },
    {
      key: 12,
      label: "ХӨДӨЛГҮҮР – ХӨДӨЛГҮҮРИЙН САПУНЫ ТАГ, ШҮБ",
      isChecked: false,
    },
    {
      key: 12,
      label: "ХӨДӨЛГҮҮР – ХӨДӨЛГҮҮРИЙН САПУНЫ ТАГ, ШҮБ",
      isChecked: false,
    },
    {
      key: 12,
      label: "ХӨДӨЛГҮҮР – ХӨДӨЛГҮҮРИЙН САПУНЫ ТАГ, ШҮБ",
      isChecked: false,
    },
  ];
  return (
    <View
      style={{
        backgroundColor: state.isDark ? DARK_MODE_BG_COLOR : "#fff",
        flex: 1,
      }}
    >
      <FloatMenu />
      <View style={styles.mainContainer}>
        <View style={{ backgroundColor: "#00b0f0" }}>
          <Text
            style={{
              color: "#fff",
              padding: 10,
            }}
          >
            ЭЭЛЖИЙН ӨМНӨХ ҮЗЛЭГ
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: DARK_MODE_LIGHT_COLOR,
          }}
        >
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              backgroundColor: state.isDark ? DARK_MODE_BG_COLOR_LIGHT : "#fff",
            }}
          >
            {data.map((el, index) => {
              return (
                <View style={styles.rowContainer} key={index}>
                  <Text
                    style={{
                      color: state.isDark ? "#fff" : DARK_MODE_BG_COLOR,
                    }}
                  >
                    {el.label}
                  </Text>
                  <TouchableOpacity
                    onPress={() => console.log("AA")}
                    style={{
                      backgroundColor: el.isChecked
                        ? MAIN_COLOR_GREEN
                        : MAIN_COLOR_RED,
                      width: 150,
                    }}
                  >
                    <Text
                      style={{ color: "#fff", textAlign: "center", padding: 5 }}
                    >
                      {el.isChecked ? "ТЭНЦСЭН" : "ТЭНЦЭЭГҮЙ"}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.bottomContainer}>
          <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
            <TouchableOpacity
              style={[
                styles.bottomPageContainer,
                {
                  backgroundColor: state.isDark
                    ? DARK_MODE_BG_COLOR_LIGHT
                    : DARK_MODE_LIGHT_COLOR,
                  borderWidth: selectedPage == 1 ? 2 : 0,
                  borderColor: state.isDark
                    ? DARK_MODE_LIGHT_COLOR
                    : DARK_MODE_BG_COLOR_LIGHT,
                },
              ]}
              onPress={() => {
                setSelectedPage(1);
              }}
            >
              <Text
                style={[
                  styles.bottomBtnText,
                  {
                    color: state.isDark ? "#fff" : DARK_MODE_BG_COLOR,
                    fontWeight: selectedPage == 1 ? "bold" : "normal",
                    textDecorationLine:
                      selectedPage == 1 ? "underline" : "none",
                  },
                ]}
              >
                1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.bottomPageContainer,
                {
                  backgroundColor: state.isDark
                    ? DARK_MODE_BG_COLOR_LIGHT
                    : DARK_MODE_LIGHT_COLOR,
                  borderWidth: selectedPage == 2 ? 2 : 0,
                  borderColor: state.isDark
                    ? DARK_MODE_LIGHT_COLOR
                    : DARK_MODE_BG_COLOR_LIGHT,
                },
              ]}
              onPress={() => {
                setSelectedPage(2);
              }}
            >
              <Text
                style={[
                  styles.bottomBtnText,
                  {
                    color: state.isDark ? "#fff" : DARK_MODE_BG_COLOR,
                    fontWeight: selectedPage == 2 ? "bold" : "normal",
                    textDecorationLine:
                      selectedPage == 2 ? "underline" : "none",
                  },
                ]}
              >
                2
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.bottomPageContainer,
                {
                  backgroundColor: state.isDark
                    ? DARK_MODE_BG_COLOR_LIGHT
                    : DARK_MODE_LIGHT_COLOR,
                  borderWidth: selectedPage == 3 ? 2 : 0,
                  borderColor: state.isDark
                    ? DARK_MODE_LIGHT_COLOR
                    : DARK_MODE_BG_COLOR_LIGHT,
                },
              ]}
              onPress={() => {
                setSelectedPage(3);
              }}
            >
              <Text
                style={[
                  styles.bottomBtnText,
                  {
                    color: state.isDark ? "#fff" : DARK_MODE_BG_COLOR,
                    fontWeight: selectedPage == 3 ? "bold" : "normal",
                    textDecorationLine:
                      selectedPage == 3 ? "underline" : "none",
                  },
                ]}
              >
                3
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.bottomBtnContainer}
            onPress={() => state.setCheckListDone(true)}
          >
            <Text style={[styles.bottomBtnText, { color: "#fff" }]}>
              БОЛСОН
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CheckListScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginLeft: 60,
    flex: 1,
    marginRight: 10,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 2,
    alignItems: "center",
  },
  bottomPageContainer: {
    width: 50,
    backgroundColor: DARK_MODE_BG_COLOR_LIGHT,
    marginRight: 5,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 2,
    paddingVertical: 10,
  },
  bottomBtnContainer: {
    backgroundColor: MAIN_COLOR_GREEN,
    width: 150,
  },
  bottomBtnText: {
    textAlign: "center",
    padding: 5,
  },
});
