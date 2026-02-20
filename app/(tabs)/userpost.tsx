import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import UserPost from '../components/UserPost';

export default function userPost() {
// Input fields for the user to create a post about their workout, including:
// Description, comment and tags
// Sent to an array of posts

  return (
    <View className="flex-1 items-center justify-center">
 
      <Text>Upload workout</Text>
      <UserPost />
    </View>
  );
}