import React from "react";
import { View, Text } from "react-native";
import Header from "../components/Category/Header.js";
import CategoryList from "../components/Category/CategoryList.js";

const CategoryScreen = () => {
  return (
    <View style={{ backgroundColor: "rgb(8,8,8)" }} className="flex-1">
      <Header />
      <CategoryList />
    </View>
  );
};

export default CategoryScreen;
