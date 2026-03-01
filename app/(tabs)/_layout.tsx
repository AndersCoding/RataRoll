import { View, Text, ColorValue, Image } from 'react-native'
import { Tabs } from 'expo-router'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import turtleIcon_blank from "../images/icons/TurtleIcon-blank.png";
import turtleIcon_filled from "../images/icons/TurtleIcon-filled.png";
import { useTheme } from '../components/colors/ThemeContext';

//const turtleIcon_blank = "../images/icons/TurtleIcon-blank.png";
//const turtleIcon_filled = "../images/icons/TurtleIcon-filled.png";

export default function TabLayout() {

  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <Tabs
    screenOptions={{
      tabBarStyle: {
        backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
        borderTopColor: isDarkMode ? "#374151" : "#e0e0e0",
        borderTopWidth: 1,
        height: 60,
      },
    }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarActiveTintColor: "lightgray",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({
            color,
            focused,
          }: {
            color: ColorValue;
            focused: boolean;
          }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={ isDarkMode ? "gray" : "gray"}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="userpost"
        options={{
          headerShown: false,
          title: "Upload workout",
          headerTitleAlign: "center",
          tabBarActiveTintColor: "lightgray",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "add-circle" : "add-circle-outline"}
              color={focused ? "gray" : "gray"}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarActiveTintColor: "lightgray",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../images/icons/TurtleIcon-filled.png")
                  : require("../images/icons/TurtleIcon-blank.png")
              }
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tabs>
  );
}