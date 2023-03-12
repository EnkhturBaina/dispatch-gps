import React, { useEffect, useState, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { SERVER_URL } from "../constant";
import { useColorScheme } from "react-native";

const MainContext = React.createContext();

export const MainStore = (props) => {
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false); //*****Апп ачааллах эсэх
  const [isLoggedIn, setIsLoggedIn] = useState(false); //*****Нэвтэрсэн эсэх
  const [isDark, setIsDark] = useState(true);

  let colorScheme = useColorScheme();

  useEffect(() => {
    colorScheme === "dark" ? setIsDark(true) : setIsDark(false);
  }, []);

  return (
    <MainContext.Provider
      value={{
        token,
        setToken,
        isLoading,
        setIsLoading,
        isLoggedIn,
        setIsLoggedIn,
        isDark,
        setIsDark,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContext;
