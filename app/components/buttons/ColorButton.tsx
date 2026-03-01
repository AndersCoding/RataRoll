import React, { useState } from "react";
import { Switch, Text, View } from "react-native";
import { useTheme } from "../colors/ThemeContext";

interface ChildButtonProps {
  onButtonPress: (value: boolean) => void;
}

export default function ColorButton({ onButtonPress }: ChildButtonProps) {
  const [pressed, setPressed] = useState(false);

    const {theme, toggleTheme} = useTheme();
    const isDarkMode = theme === "dark";

  return (
    <View className="flex-row items-center justify-between bg-grey-12 p-4 rounded-2xl ">
      <View>
        <Text
          className={
            isDarkMode
              ? "text-gray-200 text-base font-medium"
              : "text-black text-base font-medium"
          }
        >
          Dark Mode
        </Text>
        <Text className="text-gray-500 text-sm">Reduce eye strain</Text>
      </View>

      <Switch
        value={pressed}
        onValueChange={(value) => {
          setPressed(value);
          onButtonPress(value);
        }}
        trackColor={{ true: "#F2A65A", false: "#519A66" }} // Colors for off/on
        thumbColor={pressed ? "#519A66" : "#F2A65A"}
      />
    </View>
  );
}
