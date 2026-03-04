import React, { useEffect, useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ColorButton from "../components/buttons/ColorButton";
import ImageSelector from "../components/modal/ImageSelector";
import { changeProfileTitle } from "../storage/postsStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "../components/colors/ThemeContext";
import { changeUserName } from "../storage/postsStorage";

export default function Profile() {
  const [receivedData, setReceivedData] = useState<string | null>(null);
  // const [isDark, setIsDark] = useState(false);
  const [title, setTitle] = useState("Enter title:");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingUserName, setIsEditingUserName] = useState(false);
  const [userName, setUserName] = useState("RataRoll User");


  const {theme, toggleTheme} = useTheme();
  const isDarkMode = theme === "dark";

  const titleKEY = "profileTitle";
  const userNameKey = "userName";


  // Set new title and save it to AsyncStorage
  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
    changeProfileTitle(newTitle);
  };

  const editUserName = (newName: string) => {
    setUserName(newName);
    changeUserName(newName);
  }

  const resetTitleField = () => {
    setTitle("");
  };

  // Load profile title from AsyncStorage on component mount
    useEffect(() => {
      (async () => {
        try {
          const title = await AsyncStorage.getItem(titleKEY);
          const name = await AsyncStorage.getItem(userNameKey);
          setUserName(name || "RataRoll User");
          if (title) setTitle(title);
        } catch (e) {
          console.error("Error loading image", e);
        }
      })();
    }, []);

  return (
    //<ScrollView className={isDark ? "flex-1 bg-gray-900" : "flex-1 bg-white"}>
    <ScrollView
      className={isDarkMode ? "flex-1 bg-gray-900" : "flex-1 bg-white"}
    >
      {/* Header Section */}
      <View className="items-center mt-14">
        <ImageSelector />

        {/* User name */}
        <Pressable>
          {isEditingUserName ? (
            <TextInput
              className="border border-gray-300 rounded px-2 py-1 w-48 text-2xl text-center"
              value={userName}
              onChangeText={editUserName}
              onBlur={() => setIsEditingUserName(false)}
              autoFocus={true}
            />
          ) : (
            <TouchableOpacity
              onPress={() => {
                setIsEditingUserName(true);
              }}
              className="flex-row mt-2 space-x-4"
            >
              <Text
                className={
                  isDarkMode
                    ? "text-white text-2xl font-bold mt-4"
                    : "text-black text-2xl font-bold mt-4"
                }
              >
                {userName}
              </Text>
            </TouchableOpacity>
          )}
        </Pressable>

        {/* user title */}
        <View className="flex-row space-x-4">
          <Pressable>
            {isEditingTitle ? (
              <TextInput
                className="border border-gray-300 rounded px-2 py-1 w-48 text-center"
                value={title}
                onChangeText={handleTitleChange}
                onBlur={() => setIsEditingTitle(false)}
                autoFocus={true}
              />
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setIsEditingTitle(true);
                }}
                className="flex-row mt-2 space-x-4"
              >
                <Text className="text-gray-500">{title}</Text>
              </TouchableOpacity>
            )}
          </Pressable>
        </View>
      </View>

      {/* Divider */}
      <View className="h-1 bg-gray-200 mt-8 mx-6 rounded-full" />

      {/* Settings Section */}
      <View className="mt-8 px-6">
        <Text
          className={
            isDarkMode
              ? "text-white text-lg font-semibold mb-4"
              : "text-black text-lg font-semibold mb-4"
          }
        >
          Appearance
        </Text>

        <ColorButton onButtonPress={toggleTheme} />
        <Text>{receivedData}</Text>
      </View>
    </ScrollView>
  );
}
     
