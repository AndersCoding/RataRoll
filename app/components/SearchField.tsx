import React from "react";
import { TextInput, View, Text } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

type Props = {
  value: string;
  onChange: (text: string) => void;
};

export default function SearchField({ value, onChange }: Props) {

  return (
    <View className="px-4 pt-4">
      <Text className="mb-2 font-bold">
        <Entypo name="magnifying-glass" size={24} color="black" />
      </Text>
      <TextInput
        placeholder="Type a name… (e.g. yoda)"
        value={value}
        onChangeText={onChange}
        className="border border-gray-300 rounded-md p-2 mb-4"
        autoCapitalize="none"
      />
    </View>
  );
}
