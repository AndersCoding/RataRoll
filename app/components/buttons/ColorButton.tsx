import { View, Text, Switch,  } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { changeBackgroundColor } from '@/app/storage/postsStorage';

export default function ColorButton() {

    const [pressed, setPressed] = useState(false);

    const toggleSwitch = () => setPressed(p => !p);

  return (
    <View>
      <Text>Press button to change color</Text>
      <Switch
        value={pressed}
        thumbColor={pressed ? 'blue' : 'gray'}
        onValueChange={toggleSwitch}
      />
      <Text className={pressed ? "text-blue-500" : "text-green-500"}>Change my color!</Text>
    </View>
  )
}