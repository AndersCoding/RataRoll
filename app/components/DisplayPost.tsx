import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import dummyData from '../data/dummyData'
import PostCard from '../components/PostCard';

export default function DisplayPost() {
  return (
    <View className='flex-1'>

<FlatList
data={dummyData}
keyExtractor={(item) => item.id.toString()}
renderItem={({ item }) => <PostCard post={item} />}
contentContainerStyle={{ paddingVertical: 12 }}
showsVerticalScrollIndicator={false}


        />
        {/*
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="flex-row items-center justify-center bg-white m-4 p-4 rounded-lg shadow-md">
            <Image source={item.image} style={{ width: 100, height: 100 }} />
            <Text>{item.user}</Text>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text className=" bg-white m-4 p-4 rounded-lg shadow-md">
              {item.tags.join(", ")}
            </Text>
          </View>
        )}
      />
     
      
      {dummyData.map((post) => (
        <View key={post.id}>
            <Image source={post.image} style={{ width: 100, height: 100 }} />
            <Text>{post.user}</Text>
          <Text>{post.title}</Text>
          <Text>{post.description}</Text>
          <Text>{post.tags.join(', ')}</Text>
        </View>
      ))}
        */}
    </View>
  );
}