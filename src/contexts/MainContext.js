import React, { useEffect, useState, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { SERVER_URL } from "../constant";

const MainContext = React.createContext();

export const MainStore = (props) => {
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false); //*****Апп ачааллах эсэх
  const [isLoggedIn, setIsLoggedIn] = useState(true); //*****Нэвтэрсэн эсэх

  useEffect(() => {}, []);

  return (
    <MainContext.Provider
      value={{
        token,
        setToken,
        isLoading,
        setIsLoading,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContext;
