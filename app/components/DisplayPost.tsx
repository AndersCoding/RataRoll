import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import dummyData from '../data/dummyData'
import PostCard from '../components/PostCard';
import { IUserPost } from '../interface/IUserPost';

export default function DisplayPost({posts}: {posts: IUserPost[]}) {
  return (
    <View className='flex-1'>

<FlatList
data={dummyData}
keyExtractor={(item) => item.id.toString()}
renderItem={({ item }) => <PostCard post={item} />}
contentContainerStyle={{ paddingVertical: 12 }}
showsVerticalScrollIndicator={false}

        />
       
    </View>
  );
}