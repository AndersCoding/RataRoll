import { View, Text, ColorValue, Image } from 'react-native'
import { Tabs } from 'expo-router'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import turtleIcon_blank from "../images/icons/TurtleIcon-blank.png";
import turtleIcon_filled from "../images/icons/TurtleIcon-filled.png";

//const turtleIcon_blank = "../images/icons/TurtleIcon-blank.png";
//const turtleIcon_filled = "../images/icons/TurtleIcon-filled.png";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarActiveTintColor: "black",
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
              color={focused ? "black" : "gray"}
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
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "add-circle" : "add-circle-outline"}
              color={focused ? "black" : "gray"}
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
          tabBarActiveTintColor: "black",
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