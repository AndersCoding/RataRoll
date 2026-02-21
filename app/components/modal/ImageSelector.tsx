import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Image, Modal, Pressable, Text, View } from "react-native";

// Component to select an image for users profile picture.

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

  const turtleImages = [
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
        <View className="flex-1 items-center justify-center bg-black bg-opacity-50">
          <View className="flex-row justify-between gap-2 self-center bg-white rounded-lg p-6">
            <Text className="text-lg mb-4">Select image</Text>
            {turtleImages.map((turtle) => (
              <Pressable
                key={turtle.id}
                onPress={() => {
                  setImageUrl(turtle.image);
                  storeImage(turtle.image);
                  setModalVisible(!modalVisible);
                }}
              >
                <Image
                  source={{ uri: turtle.image }}
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
      <View>
        <Image
          source={{ uri: imageUrl }}
          className="w-48 h-48 rounded-full mb-4 self-center justify-center items-center"
        />
        <Pressable onPress={() => setModalVisible(true)}>
          <Text className="text-blue-500">Open Image Selector</Text>
        </Pressable>
      </View>
    </View>
  );
}

export const imageUrl = ImageSelector;