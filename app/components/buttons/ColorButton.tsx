import React, { useState } from "react";
import { Switch, Text, View } from "react-native";

interface ChildButtonProps {
  onButtonPress: (value: boolean) => void;
}

export default function ColorButton({ onButtonPress }: ChildButtonProps) {
  const [pressed, setPressed] = useState(false);

  return (
    <View className="flex-row items-center justify-between bg-grey-12 p-4 rounded-2xl ">
      <View>
        <Text className="text-base font-medium">Dark Mode</Text>
        <Text className="text-gray-500 text-sm">Reduce eye strain</Text>
      </View>

      <Switch
        value={pressed}
        onValueChange={(value) => {
          setPressed(value);
          onButtonPress(value);
        }}
        trackColor={{ true: "#FFAA00", false: "#FFAA00" }} // Colors for off/on
        thumbColor={pressed ? "#519A66" : "#237227"}
      />
    </View>
  );
}
