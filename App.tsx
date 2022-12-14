import React, { useCallback, useEffect } from "react";
import Home from "./src/screens/Home";
import {
  Archivo_600SemiBold,
  Archivo_400Regular,
  Archivo_500Medium,
} from "@expo-google-fonts/archivo";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";
import { StatusBar } from "react-native";

export default function App() {
  useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  useEffect(() => {
    StatusBar.setBarStyle("light-content");
    StatusBar.setBackgroundColor("transparent");
    StatusBar.setTranslucent(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
