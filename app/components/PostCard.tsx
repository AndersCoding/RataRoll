import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

type Post = {
  id: number;
  user: string;
  image: any;
  title: string;
  date: string;
  beltColor: string; // 0..1
  description: string;
  tags: string[];
};

export default function PostCard({ post }: { post: Post }) {

const beltColorClass = (() => {
switch (post.beltColor) {
    case 'white':
        return 'bg-gray-300';
    case 'blue':
        return 'bg-blue-600';
    case 'purple':
        return 'bg-purple-600';
    case 'brown':
        return 'bg-yellow-700';
    case 'black':
        return 'bg-black';
    default:
        return 'bg-gray-300';}
})();

  return (
    <View className="w-[92%] self-center bg-white border-2 border-black-500 border-dotted rounded-3xl p-4 my-3">
      {/* Top row: avatar + name + progress */}
      <View className="flex-row items-center">
        {/* Image View */}
        <View className="w-28 h-28 mb  bg-white overflow-hidden relative">
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
              borderColor: "black",
              borderWidth: 2,
              
            }}
          />
        </View>

        <View className="flex-1">
          <Text className="text-xl font-extrabold">{post.user}</Text>

          {/* BeltColor bar */}
          <View className="mt-2 h-3 w-48 bg-gray-200 rounded-full overflow-hidden relative">
            <View className={`h-full ${beltColorClass}`} />

            {/* Black belt mark */}
            <View className="absolute right-3 top-0 h-full w-8 bg-black rounded-sm" />
          </View>
        </View>
      </View>

      {/* Inner gray card */}
      <View className=" bg-gray-200  rounded-3xl p-4">
        {/* Title + date */}
        <View className="flex-row items-start justify-between">
          <Text className="text-2xl font-extrabold flex-1 pr-2">
            {post.title}
          </Text>
          <Text className="text-lg">{post.date}</Text>
        </View>

        {/* Icons row */}
        <View className="flex-row mt-3">
          <Pressable className="mr-4">
            <Feather name="thumbs-up" size={24} color="black" />
          </Pressable>
          <Pressable>
            <Feather name="message-circle" size={24} color="black" />
          </Pressable>
        </View>

        {/* Description */}
        <Text className="mt-3 text-base leading-5">{post.description}</Text>

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
