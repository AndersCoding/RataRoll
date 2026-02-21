import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

// Component to change theme color


export default function ThemeColor() {


const [pressed, setPressed] = useState(false);
const [color, setColor] = useState("bg-blue-600");

const handlePress = () => {
  setPressed(!pressed);
  setColor(pressed ? "bg-blue-800" : "bg-green-50");
};


  return (
    <View className={color + " h-32 p-4 rounded"}>
      <Pressable onPress={handlePress} className="bg-gray-300 rounded">
        <Text>Change Theme Color</Text>
      </Pressable>
    </View>
  );
}

