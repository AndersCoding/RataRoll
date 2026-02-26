import React from "react";
import { FlatList, View } from "react-native";
import PostCard from "../components/PostCard";
import { IUserPost } from "../interface/IUserPost";

export default function CombinedFeed({
  data,
  onDelete,
  ListHeaderComponent,
}: {
  data: IUserPost[];
  onDelete: (id: string) => void;
  ListHeaderComponent?: React.ReactElement | null;
}) {
  return (
    <View className="flex-1">
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        ListHeaderComponent={ListHeaderComponent}
        stickyHeaderIndices={undefined}
        renderItem={({ item }) => (
          <PostCard
            post={item}
            onDelete={item.isUserPost ? onDelete : undefined}
          />
        )}
        contentContainerStyle={{ paddingVertical: 12 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
