import { View, Text, TextInput } from 'react-native'
import React, { useMemo, useState } from 'react'
import dummyData from '../data/dummyData';
// Component to handle search functionality

type SearchFieldProps = {
  searchTerm: string;
};

export default function SearchField({searchTerm}: SearchFieldProps) {
    const [searchField, setSearchTerm] = useState("");

   const filteredSearch = useMemo(() => {
     const q = searchField.trim().toLowerCase();
     if (!q) return dummyData;

     return dummyData.filter((item) =>
       item.beltColor && item.beltColor.toLowerCase().includes(q)
     );
   }, [searchField]);

  return (
    <View>
      <Text>SearchField</Text>
      <TextInput
        placeholder="Search by tags..."
        value={searchField}
        onChangeText={setSearchTerm}
        className="border border-gray-300 rounded-md p-2 mb-4"
        />
        <View>
            {filteredSearch.map((item) => (
                <View key={item.id} className="mb-4">
                    <Text className="text-lg font-bold">{item.user}</Text>
            </View>
            ))}                    
        </View>
    </View>
  )
}