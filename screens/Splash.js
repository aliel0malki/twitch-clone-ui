import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { StatusBar } from "expo-status-bar";

const Splash = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  }, [opacity]);

  return (
    <View style={{ flex: 1, backgroundColor: "#5B33A2" }}>
      <Animated.View style={[styles.container, { opacity }]}>
        <Text style={styles.text}>Twitch Clone</Text>
        <StatusBar style="auto" />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5B33A2",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Splash;

/*

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

const Splash = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl font-medium">Twitch Clone</Text>
      <StatusBar style="auto" />
    </View>
  );
};
export default Splash;
*/
