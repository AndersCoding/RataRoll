import React from "react";
import { FlatList, View } from "react-native";
import PostCard from "../components/PostCard";
import { IUserPost } from "../interface/IUserPost";
import dummyData from "../data/dummyData";

export default function CombinedFeed({
  uploadedPosts,
  onDelete
}: {
  uploadedPosts: IUserPost[];
  onDelete: (id: number) => void;
}) {
  const data: IUserPost[] = [...uploadedPosts, ...(dummyData as IUserPost[])];

  return (
    <View className="flex-1">
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => 
        <PostCard post={item} 
        onDelete={item.isUserPost ? onDelete: undefined}
        />}
        contentContainerStyle={{ paddingVertical: 12 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
