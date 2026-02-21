import React, { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import yodaimage from "../images/apriloneil.webp";
import { IUserPost } from "../interface/IUserPost";
import {
  addUserPost,
  deleteUserPost,
  getUserPosts,
  getProfileImage
} from "../storage/postsStorage";

export default function UserPost() {
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [beltColor, setBeltColor] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);

  const [uploadedPosts, setUploadedPosts] = useState<IUserPost[]>([]);

  useEffect(() => {
    (async () => {
      const savedImg = await getProfileImage();
      setProfileImageUrl(savedImg);
      const saved = await getUserPosts();
      setUploadedPosts(saved);
    })();
  }, []);

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

  return (
    <SafeAreaProvider>
      <SafeAreaView className="mt-4">
        <TextInput
          placeholder="Username"
          placeholderTextColor={"gray"}
          className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-[90%] self-center"
          value={userName}
          onChangeText={setUserName}
        />
        <View className="flex-row justify-between w-[90%] gap-4 self-center">
          <TextInput
            placeholder="Title. Example: ''Destroyer of giants''"
            placeholderTextColor={"gray"}
            className="flex-1 border-2 border-gray-300 rounded-lg p-2"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            placeholder="Belt color"
            placeholderTextColor={"gray"}
            className="w-24 border-2 border-gray-300 rounded-lg p-2"
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
          value={description}
          onChangeText={setDescription}
        />

        <TextInput
          placeholder="Tags (comma separated)"
          placeholderTextColor={"gray"}
          className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-[90%] self-center"
          value={tags}
          onChangeText={setTags}
        />
        <Pressable
          onPress={handleUpload}
          className="bg-orange-500 rounded-lg p-3 w-[90%] self-center items-center"
        >
          <Text>Upload</Text>
        </Pressable>
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
