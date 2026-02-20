import React, { useCallback, useState } from "react";
import { View } from "react-native";
import { useFocusEffect } from "expo-router";
import { IUserPost } from "../interface/IUserPost";
import { getUserPosts } from "../storage/postsStorage";
import CombinedFeed from "../components/CombinedFeed";

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

  return (
    <View className="flex-1 bg-white">
      <CombinedFeed uploadedPosts={uploadedPosts} />
    </View>
  );
}
