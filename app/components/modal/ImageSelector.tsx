import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Image, Modal, Pressable, Text, View } from "react-native";

// Component to select an image for users profile picture.

type ImageSelectorProps = {
  imageUrl: string | null;
  setImageUrl: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function ImageSelector() {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const KEY = "profileImage";

  useEffect(() => {
    (async () => {
      try {
        const saved = await AsyncStorage.getItem(KEY);
        if (saved) setImageUrl(saved);
      } catch (e) {
        console.error("Error loading image", e);
      }
    })();
  }, []);

  const storeImage = async (url: string) => {
    try {
      await AsyncStorage.setItem(KEY, url);
      setImageUrl(url);
    } catch (error) {
      console.error("Error saving image", error);
    }
  };
  const leoImage =
    "https://assets.nick.com/uri/mgid:arc:imageassetref:ws.kids.com:123d4d8c-9792-430d-8db3-b8a49cfbebd8?quality=0.7&gen=ntrn&format=webp&crop=true&width=660";
  const donatelloImage =
    "https://www.thepopverse.com/_next/image?url=https%3A%2F%2Fmedia.thepopverse.com%2Fmedia%2Fimg_3508-55ojkmq1ocqfndpnssfn5rqlvu.webp&w=1280&q=75";
  const michaelangeloImage =
    "https://www.denofgeek.com/wp-content/uploads/2023/07/geek-lead-tmnt-SHAMONBROWNJR.jpg?fit=1200%2C675";
  const raphaelImage =
    "https://www.denofgeek.com/wp-content/uploads/2023/07/geek-lead-tmnt-BRADYNOON.jpg?fit=1200%2C675";

  const userAvatars = [
    {
      id: 1,
      image: leoImage,
    },
    {
      id: 2,
      image: donatelloImage,
    },
    {
      id: 3,
      image: michaelangeloImage,
    },
    {
      id: 4,
      image: raphaelImage,
    },
  ];

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View className="flex-1 items-center justify-center bg-black/50">
          <View className="bg-white rounded-2xl p-6 w-[85%] max-h-[80%]">
            <Text className="text-lg mb-4">Select image</Text>
            {userAvatars.map((avatar) => (
              <Pressable
                key={avatar.id}
                onPress={() => {
                  setImageUrl(avatar.image);
                  storeImage(avatar.image);
                  setModalVisible(!modalVisible);
                }}
              >
                <Image
                  source={{ uri: avatar.image }}
                  className="w-20 h-20 rounded-full mb-4"
                />
              </Pressable>
            ))}
            <Text
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              className="text-blue-500"
            >
              Close
            </Text>
          </View>
        </View>
      </Modal>

      <View className="mt-4 items-center ">
        <View className="relative">
          <Image
            source={{ uri: imageUrl }}
            className="w-48 h-48 rounded-full  border-2 border-black-300"
          />
          <Pressable
            onPress={() => setModalVisible(true)}
            className="absolute bottom-2 right-2 bg-blue-500 rounded-full p-2"
          >
            <Text className="text-xl">✏️</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export type ImageSelectorType = ReturnType<typeof ImageSelector>;