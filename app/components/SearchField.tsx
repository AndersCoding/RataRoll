import React from "react";
import { TextInput, View, Text } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

type Props = {
  value: string;
  onChange: (text: string) => void;
};

export default function SearchField({ value, onChange }: Props) {

  return (
    <View className="px-4 pt-4 mt-6">
      <View className="relative">
        <Entypo
          name="magnifying-glass"
          size={24}
          color="gray"
          style={{ position: "absolute", left: 12, top: 8, zIndex: 1 }}
        />
        
        <TextInput
          placeholder="Search by username"
          placeholderTextColor={"gray"}
          value={value}
          onChangeText={onChange}
          className="border border-gray-300 rounded-full pl-12 pr-4 py-3"
          autoCapitalize="none"
        />
      </View>
    </View>
  );
}
