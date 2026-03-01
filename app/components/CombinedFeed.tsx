import React from "react";
import { FlatList, View } from "react-native";
import PostCard from "../components/PostCard";
import { IUserPost } from "../interface/IUserPost";
import { useTheme } from "./colors/ThemeContext";

export default function CombinedFeed({
  data,
  onDelete,
  ListHeaderComponent,
}: {
  data: IUserPost[];
  onDelete: (id: string) => void;
  ListHeaderComponent?: React.ReactElement | null;
}) {

  const {theme, toggleTheme} = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <View className={isDarkMode ? "flex-1 bg-gray-900" : "flex-1 bg-white"}>
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
