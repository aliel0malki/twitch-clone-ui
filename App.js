import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";
import { AppLoading } from "expo";
import BottomNavigation from "./router/BottomNavigation";
// Screens
import Splash from "./screens/Splash";
// Components
import HeaderBar from "./components/App/HeaderBar.js";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  //  const [appIsReady, setAppIsReady] = useState(false);
  // main screens
  return (
    <SafeAreaProvider>
      <HeaderBar />
      <BottomNavigation />
    </SafeAreaProvider>
  );
}
