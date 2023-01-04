import React, { useEffect } from "react";
import Home from "./src/screens/Home";
import { Archivo_600SemiBold, Archivo_400Regular, Archivo_500Medium } from "@expo-google-fonts/archivo";
import { useFonts, Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";
import CarDetails from "./src/screens/CarDetails";

export default function App() {
  useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  return (
    <ThemeProvider theme={theme}>
      <CarDetails />
    </ThemeProvider>
  );
}
