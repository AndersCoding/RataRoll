import { useFocusEffect } from "expo-router";
import React, { useCallback, useMemo, useState } from "react";
import { View } from "react-native";
import CombinedFeed from "../components/CombinedFeed";
import { IUserPost } from "../interface/IUserPost";
import { deleteUserPost, getUserPosts } from "../storage/postsStorage";
import SearchField from "../components/SearchField";
import dummyData from "../data/dummyData";

export default function Home() {
  const [uploadedPosts, setUploadedPosts] = useState<IUserPost[]>([]);
    const [query, setQuery] = useState("");

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

    const data: IUserPost[] = useMemo(() => {
      const merged: IUserPost[] = [
        ...uploadedPosts.map((p) => ({ ...p, id: String(p.id) })),
        ...(dummyData as IUserPost[]).map((p) => ({ ...p, id: String(p.id) })),
      ];
      const q = query.trim().toLowerCase();
      if (!q) return merged;

      // Filtrer på navn
      return merged.filter((post) => post.user?.toLowerCase().includes(q));
    }, [uploadedPosts, query]);

  return (
    <View className="flex-1">
      <CombinedFeed
        data={data}
        onDelete={handleDelete}
        ListHeaderComponent={<SearchField value={query} onChange={setQuery} />}
      />
    </View>
  );
}
