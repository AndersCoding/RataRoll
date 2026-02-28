import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { FlatList, Image, Modal, Pressable, Text, View } from "react-native";

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
  const bruceLeeImage = "https://i.ytimg.com/vi/X7WvxFhqhIw/maxresdefault.jpg";
  const sailorMoonImage =
    "https://1265745076.rsc.cdn77.org/1024/jpg/128574-various-artists-pretty-guardian-sailor-moon-the-30th-anniversary-memorial-album-LP-646f1ca5b3ff0.jpg";
  const remyImage = "https://i.redd.it/rbmmfzpa9pz71.png";
  const batDogImage =
    "https://i.redd.it/should-ace-the-batdog-be-in-dcus-batman-movie-v0-rqothx2pfkif1.jpg?width=736&format=pjpg&auto=webp&s=ab159340681464aa9cdc370e78a1e26b83425b13";

    const speedyImage =
      "https://static.wikia.nocookie.net/samuraipizzacats/images/3/3d/Speedy_Cerviche.png/revision/latest?cb=20141109082424";
      const shifuImage =
        "https://static.wikia.nocookie.net/dreamworks/images/5/54/Shifu_Profile.jpg/revision/latest?cb=20240210032942";
        const georgeImage =
          "https://www.slashfilm.com/img/gallery/george-costanzas-5-best-jobs-on-seinfeld-ranked/intro-1734029193.jpg";
          const usagiImage =
            "https://static.wikia.nocookie.net/usagistudios/images/0/0d/Usagi_infobox.jpg/revision/latest?cb=20200506164339";

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
    {
      id: 5,
      image: bruceLeeImage,
    },
    {
      id: 6,
      image: sailorMoonImage,
    },
    {
      id: 7,
      image: remyImage,
    },
    {
      id: 8,
      image: batDogImage,
    },
    {
      id: 9,
      image: speedyImage,
    },
    {
      id: 10,
      image: shifuImage,
    },
    {
      id: 11,
      image: georgeImage,
    },
    {
      id: 12,
      image: usagiImage,
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
            <FlatList
              data={userAvatars}
              keyExtractor={(item) => item.id.toString()}
              numColumns={4}
              contentContainerStyle={{ gap: 16 }}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => {
                    setImageUrl(item.image);
                    storeImage(item.image);
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Image
                    source={{ uri: item.image }}
                    className="w-20 h-20 rounded-full mb-4"
                  />
                </Pressable>
              )}
            />

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

//<FlatList
//  data={userAvatars}
//  keyExtractor={(item) => item.id.toString()}
//  numColumns={4}
//  contentContainerStyle={{ gap: 16 }}
//  renderItem={({ item }) => (
//    <Pressable
//      onPress={() => {
//        setImageUrl(item.image);
//        storeImage(item.image);
//        setModalVisible(!modalVisible);
//      }}
//    >
//      <Image
//        source={{ uri: item.image }}
//        className="w-20 h-20 rounded-full mb-4"
//      />
//    </Pressable>
//  )}
///>;

//<ScrollView className="grid gap-4 mb-6">
//  {userAvatars.map((avatar) => (
//    <Pressable
//      key={avatar.id}
//      onPress={() => {
//        setImageUrl(avatar.image);
//        storeImage(avatar.image);
//        setModalVisible(!modalVisible);
//      }}
//    >
//      <Image
//        source={{ uri: avatar.image }}
//        className="w-20 h-20 rounded-full mb-4"
//      />
//    </Pressable>
//  ))}
//</ScrollView>;
