import { View, Text } from 'react-native'
import React from 'react'
import ThemeColor from '../components/profile/ThemeColor'
import ImageSelector from '../components/modal/ImageSelector'



export default function Profile() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <ImageSelector />
    </View>
  )
}