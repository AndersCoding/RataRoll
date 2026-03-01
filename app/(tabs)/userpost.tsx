import { View, Text, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import UserPost from '../components/UserPost';
import { IUserPost } from '../interface/IUserPost';
import { useTheme } from '../components/colors/ThemeContext';

export default function userPost() {
// Input fields for the user to create a post about their workout, including:
// Description, comment and tags
// Sent to an array of posts

const {theme, toggleTheme} = useTheme();
const isDarkMode = theme === "dark";

  return (
    <View className={isDarkMode ? "flex-1  bg-gray-900" : "flex-1 bg-white"}>
      <UserPost />
    </View>
  );
}