import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
// Input fields for the user to create a post about their workout, including:
// Description, comment and tags
// Sent to an array of posts

export default function UserPost() {

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Fill inn fields!</Text>
        <TextInput
          placeholder="Description"
          placeholderTextColor={"gray"}
          className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-[90%] self-center"
        />
        <TextInput
          placeholder="Comment your workout"
          placeholderTextColor={"gray"}
          className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-80 self-center bg-black-100"
        />
        <TextInput
          placeholder="Tags (comma separated)"
          placeholderTextColor={"gray"}
          className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-[90%] self-center"
        />
        <Pressable className="bg-orange-500 rounded-lg p-3 w-[90%] self-center items-center">
          <Text>Upload</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}