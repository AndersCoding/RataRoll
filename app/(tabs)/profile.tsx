import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import ColorButton from "../components/buttons/ColorButton";
import ImageSelector from "../components/modal/ImageSelector";

export default function Profile() {

  const [receivedData, setReceivedData] = useState<string | null>(null);;
  const [isDark, setIsDark] = useState(false);

   const handleValueFromChild = (value: string) => {
     setReceivedData(value);
   };

   //useEffect(() => {
//
   //   console.log("Received data from child:", receivedData);
//
   //},[])

  return (
    <ScrollView className={isDark ? "flex-1 bg-gray-900" : "flex-1 bg-white"}>
      {/* Header Section */}
      <View className="items-center mt-8">
        <ImageSelector />

        <Text className="text-2xl font-bold mt-4">RataRoll User</Text>

        <Text className="text-gray-500 mt-1">Blue Belt Explorer</Text>
      </View>

      {/* Divider */}
      <View className="h-1 bg-gray-200 mt-8 mx-6 rounded-full" />

      {/* Settings Section */}
      <View className="mt-8 px-6">
        <Text className="text-lg font-semibold mb-4">Appearance</Text>

        <ColorButton onButtonPress={setIsDark}/>
        <Text>{receivedData}</Text>
      </View>
    </ScrollView>
  );
}

