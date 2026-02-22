import { View, Text } from 'react-native'
import React from 'react'
import ThemeColor from '../components/profile/ThemeColor'
import ImageSelector from '../components/modal/ImageSelector'
import ColorButton from '../components/buttons/ColorButton'



export default function Profile() {
  return (
    <View className="flex-1 items-center bg-white">
      <ImageSelector />
      
        <Text className=" text-2xl font-bold ">Select Theme Color</Text>
        <ColorButton />

        
    </View>
  );
}