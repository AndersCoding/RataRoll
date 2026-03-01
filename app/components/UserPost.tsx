import React, { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import yodaimage from "../images/apriloneil.webp";
import { IUserPost } from "../interface/IUserPost";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import {
  addUserPost,
  deleteUserPost,
  getUserPosts,
  getProfileImage
} from "../storage/postsStorage";

import ImageSelector from "./modal/ImageSelector";
import { useTheme } from "./colors/ThemeContext";

export default function UserPost() {
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [beltColor, setBeltColor] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);

  const [uploadedPosts, setUploadedPosts] = useState<IUserPost[]>([]);


  const {theme, toggleTheme} = useTheme();
  const isDarkMode = theme === "dark";

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const savedImg = await getProfileImage();
        setProfileImageUrl(savedImg);

        const savedPosts = await getUserPosts();
        setUploadedPosts(savedPosts);
      })();
    }, [])
  );

  const handleUpload = async () => {
    const min = 1;
    const max = 1000000;
    const created: IUserPost = {
      id: String(Math.floor(Math.random() * (max - min + 1)) + min),
      user: userName.trim(),
      title: title.trim(),
      image: profileImageUrl ? { uri: profileImageUrl } : yodaimage,
      beltColor: beltColor.trim().toLowerCase(),
      date: new Date().toISOString(),
      description: description.trim(),
      isUserPost: true,
      tags: tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    };

    const next = await addUserPost(created);
    setUploadedPosts(next);
    setUserName("");
    setTitle("");
    setDescription("");
    setTags("");
    setBeltColor("");
  };

  const handleDelete = async (id: number) => {
    const next = await deleteUserPost(id);
    setUploadedPosts(next);
  };

  useEffect(() => {
    return () => {
      setProfileImageUrl(getProfileImage() as unknown as string);
      //profileImageUrl;
      //getProfileImage();
    };
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView className="mt-8">
        <TextInput
          placeholder="Username"
          placeholderTextColor={"gray"}
          className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-[90%] self-center"
          style={{ color: isDarkMode ? "#FFFFFF" : "#000000" }}
          value={userName}
          onChangeText={setUserName}
        />
        <View className="flex-row justify-between w-[90%] mb-4 gap-4 self-center">
          <TextInput
            placeholder="Title. Example: ''Destroyer of giants''"
            placeholderTextColor={"gray"}
            className="flex-1 border-2 border-gray-300 rounded-lg p-2"
            style={{ color: isDarkMode ? "#FFFFFF" : "#000000" }}
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            placeholder="Belt color"
            placeholderTextColor={"gray"}
            className="w-24 border-2 border-gray-300 rounded-lg p-2"
            style={{ color: isDarkMode ? "#FFFFFF" : "#000000" }}
            value={beltColor}
            autoCapitalize="none"
            onChangeText={setBeltColor}
          />
        </View>

        <TextInput
          editable
          multiline
          placeholder="Description"
          placeholderTextColor={"gray"}
          className="border-2 border-gray-300 rounded-lg p-2 mb-4 h-48 w-[90%] self-center"
          style={{ color: isDarkMode ? "#FFFFFF" : "#000000" }}
          value={description}
          onChangeText={setDescription}
        />

        <TextInput
          placeholder="Tags (comma separated)"
          placeholderTextColor={"gray"}
          className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-[90%] self-center"
          style={{ color: isDarkMode ? "#FFFFFF" : "#000000" }}
          value={tags}
          onChangeText={setTags}
        />
        <Pressable
          onPress={handleUpload}
          className="rounded-lg p-3 w-[90%] self-center items-center"
          style={{ backgroundColor: isDarkMode ? "#04879C" : "#F39422" }}
        >
          <Text className="font-semibold">Upload</Text>
        </Pressable>
        <View className="mt-6 w-[90%] justify-center self-center items-center">
          <Text className={isDarkMode ? "text-gray-400" : "text-gray-900"}>
            Current image
          </Text>
          <Image
            source={
              profileImageUrl ? { uri: profileImageUrl } : { uri: yodaimage }
            }
            className="w-20 h-20 rounded-full border-2  mt-2"
            style={{ borderColor: isDarkMode ? "#04879C" : "#04879C" }}
          />
        </View>
      </SafeAreaView>

      <View>
        {/*
        <Text>List of uploads</Text>
        <FlatList
          data={uploadedPosts}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingVertical: 16 }}
          renderItem={({ item }) => (
            <View className="mt-3 p-4 border-2 border-gray-300 rounded-lg w-[90%] self-center">
              <Text className="text-lg font-bold">{item.title}</Text>
              <Text className="text-gray-500">
                {item.user} • {item.date.slice(0, 10)}
              </Text>
              <Text className="mt-2">{item.description}</Text>
              <Pressable
                onPress={async () => {
                  const updated = await deleteUserPost(item.id);
                  setUploadedPosts(updated);
                }}
                className="bg-red-500 mt-3 p-2 rounded-lg items-center"
              >
                <Text>Remove post</Text>
              </Pressable>
              {item.tags.length > 0 && (
                <Text className="mt-2 text-gray-600">
                  {item.tags.join(", ")}
                </Text>
              )}
            </View>
          )}
          ListEmptyComponent={
            <Text className="text-center text-gray-500 mt-6">
              No uploads yet
            </Text>
          }
        />
         */}
      </View>
    </SafeAreaProvider>
  );
}
