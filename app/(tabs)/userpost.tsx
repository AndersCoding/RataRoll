import { View, Text, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import UserPost from '../components/UserPost';
import { IUserPost } from '../interface/IUserPost';

export default function userPost() {
// Input fields for the user to create a post about their workout, including:
// Description, comment and tags
// Sent to an array of posts

  return (
    <View className="flex-1 ">
      <UserPost />
    </View>
  );
}