import { View, Text } from 'react-native'
import React from 'react'
import DisplayPost from '../components/DisplayPost';

export default function Home() {
  return (
    <View className="flex-1 bg-white">
      <Text>Here will be displayed users post</Text>
      <DisplayPost />
    </View>
  );
}