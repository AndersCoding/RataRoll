import { View, Text } from 'react-native'
import { Tabs } from 'expo-router'
import React from 'react'

export default function TabLayout() {
  return (
    <Tabs>
        <Tabs.Screen
        name="index"
        options={{
            title: "Home",
        }}
        />
        <Tabs.Screen
        name="userpost"
        options={{
            title: "Post",
        }}
        />
        <Tabs.Screen
        name="profile"
        options={{
            title: "Profile",
        }}
        />
    </Tabs>
  )
}