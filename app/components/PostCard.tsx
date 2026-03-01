import { Feather } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useTheme } from "./colors/ThemeContext";

type Post = {
  id: string;
  user: string;
  image: any;
  title: string;
  date: string;
  beltColor: string; // 0..1
  description: string;
  tags: string[];
  isUserPost?: boolean;
};

export default function PostCard({
  post,
  onDelete,
}: {
  post: Post;
  onDelete?: (id: string) => void;
}) {
  const beltColorClass = (() => {
    switch (post.beltColor) {
      case "white":
        return "bg-gray-300";
      case "blue":
        return "bg-blue-600";
      case "purple":
        return "bg-purple-600";
      case "brown":
        return "bg-yellow-700";
      case "black":
        return "bg-black";
      default:
        return "bg-gray-300";
    }
  })();

  const {theme, toggleTheme} = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <View
      className={
        isDarkMode
          ? "w-[92%] self-center bg-gray-800 border-2 border-gray-200 border-solid rounded-3xl p-4 my-3"
          : "w-[92%] self-center bg-white border-2 border-gray-200 border-solid rounded-3xl p-4 my-3"
      }
    >
      {/* Top row: avatar + name + progress */}
      <View className="flex-row items-center">
        {/* Image View */}
        <View className="w-28 h-28 mb overflow-hidden relative">
          <Image
            source={post.image}
            resizeMode="cover"
            style={{
              position: "absolute",
              top: 8,
              left: 4,
              width: 72,
              height: 72,
              borderRadius: 56,
              borderColor: isDarkMode ? "white" : "black",
              borderWidth: 2,
            }}
          />
        </View>

        <View className="flex-1">
          <Text
            //style={{ color: isDarkMode ? "#FFFFFF" : "#000000" }}
            className={
              isDarkMode
                ? "text-gray-200 text-xl font-extrabold"
                : "text-black text-xl font-extrabold"
            }
          >
            {post.user}
          </Text>

          {/* BeltColor bar */}
          <View className="mt-2 h-3 w-48 bg-gray-200 rounded-full overflow-hidden relative">
            <View className={`h-full ${beltColorClass}`} />

            {/* Black belt mark */}
            <View className="absolute right-3 top-0 h-full w-8 bg-black rounded-sm" />
          </View>
        </View>
        {post.isUserPost && onDelete && (
          <Pressable
            onPress={() => onDelete(post.id)}
            className="bg-black px-3 py-2 rounded-full self-start"
          >
            <Text className="text-white">X</Text>
          </Pressable>
        )}
      </View>

      {/* Inner gray card */}
      <View
        className={
          isDarkMode
            ? "bg-gray-600  rounded-3xl p-4"
            : "bg-gray-200  rounded-3xl p-4"
        }
      >
        {/* Title + date */}
        <View className="flex-row items-start justify-between">
          <Text
            className={
              isDarkMode
                ? " text-gray-200 text-2xl font-extrabold flex-1 pr-2"
                : "text-black text-2xl font-extrabold flex-1 pr-2"
            }
          >
            {post.title}
          </Text>
          <Text
            className={
              isDarkMode ? "text-gray-200 text-lg" : "text-black text-lg"
            }
          >
            {post.isUserPost
              ? new Date(post.date).toLocaleDateString("no-NO")
              : post.date}
          </Text>
        </View>

        {/* Icons row - NOT IMPLEMENTED
        <View className="flex-row mt-3">
          <Pressable className="mr-4">
            <Feather name="thumbs-up" size={24} color="black" />
          </Pressable>
          <Pressable>
            <Feather name="message-circle" size={24} color="black" />
          </Pressable>
        </View>
        */}

        {/* Description */}
        <Text
          className={
            isDarkMode
              ? "mt-3 text-base text-gray-200 leading-5"
              : "mt-3 text-base text black leading-5"
          }
        >
          {post.description}
        </Text>

        {/* Tags */}
        <View className="flex-row flex-wrap mt-4">
          {post.tags.map((tag) => (
            <View
              key={tag}
              className="bg-gray-700 rounded-full px-4 py-2 mr-3 mb-3"
            >
              <Text className="text-white font-bold">{tag}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
