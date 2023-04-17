import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import CategoryScreen from "../screens/CategoryScreen";
import ChannelsScreen from "../screens/ChannelsScreen";
import SearchScreen from "../screens/SearchScreen";

const Tab = createMaterialBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Tab.Navigator
          initialRouteName="Home"
          shifting={true}
          activeColor="#7A45DB"
          activeBackgroundColor="#7A45DB"
          barStyle={{
            backgroundColor: "rgb(11,11,11)",
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <Ionicons name="home-outline" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Categories"
            component={CategoryScreen}
            options={{
              tabBarLabel: "Category",
              tabBarIcon: ({ color }) => (
                <Ionicons name="list-outline" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Live"
            component={ChannelsScreen}
            options={{
              tabBarLabel: "Lives",
              tabBarIcon: ({ color }) => (
                <Ionicons name="wifi" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              tabBarLabel: "Search",
              tabBarIcon: ({ color }) => (
                <Ionicons name="search-outline" size={24} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18181B",
  },
  liveIndicator: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default BottomNavigation;

/*
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import CategoryScreen from "../screens/CategoryScreen";
import ChannelsScreen from "../screens/ChannelsScreen";
import SearchScreen from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Categories") {
              iconName = focused ? "list" : "list-outline";
            } else if (route.name === "Channels") {
              iconName = focused ? "tv" : "tv-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "search-outline";
            }

            // You can customize the icon and size here
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Categories" component={CategoryScreen} />
        <Tab.Screen name="Channels" component={ChannelsScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;
*/
