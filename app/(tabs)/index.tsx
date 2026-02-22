import { useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";
import { View } from "react-native";
import CombinedFeed from "../components/CombinedFeed";
import { IUserPost } from "../interface/IUserPost";
import { deleteUserPost, getUserPosts } from "../storage/postsStorage";

export default function Home() {
  const [uploadedPosts, setUploadedPosts] = useState<IUserPost[]>([]);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const saved = await getUserPosts();
        setUploadedPosts(saved);
      })();
    }, [])
  );

  const handleDelete = async (id: string) => {
    const next = await deleteUserPost(id);
    setUploadedPosts(next);
  };

  return (
    <View className="flex-1 bg-white">
      <CombinedFeed uploadedPosts={uploadedPosts} onDelete={handleDelete} />
    </View>
  );
}
