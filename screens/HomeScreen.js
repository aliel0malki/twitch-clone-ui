import React from "react";
import { View, Image, FlatList, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// Home Components
import Header from "../components/Home/Header.js";
import LiveSessionList from "../components/Home/LiveList.js";

const HomeScreen = () => {
  return (
    <View style={{ backgroundColor: "rgb(8,8,8)" }} className="flex-1">
      <Header />
      <LiveSessionList />
    </View>
  );
};

export default HomeScreen;
