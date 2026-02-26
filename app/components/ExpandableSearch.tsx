import React, { useEffect, useMemo, useRef } from "react";
import { Animated, Pressable, TextInput, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

type Props = {
  value: string;
  onChange: (text: string) => void;
  expanded: boolean;
  setExpanded: (v: boolean) => void;
};

export default function ExpandableSearch({
  value,
  onChange,
  expanded,
  setExpanded,
}: Props) {
  const inputRef = useRef<TextInput>(null);

  // anim 0..1
  const anim = useRef(new Animated.Value(expanded ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: expanded ? 1 : 0,
      duration: 180,
      useNativeDriver: false, // width -> false
    }).start(() => {
      if (expanded) inputRef.current?.focus();
    });
  }, [expanded]);

  const width = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [44, 320], // juster etter smak
  });

  const opacity = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <View className="px-4 pt-4">
      <Animated.View
        style={{ width }}
        className="flex-row items-center bg-gray-100 rounded-full px-3 py-2"
      >
        <Pressable
          onPress={() => setExpanded(!expanded)}
          hitSlop={10}
          className="mr-2"
        >
          <Entypo name="magnifying-glass" size={22} color="black" />
        </Pressable>

        <Animated.View style={{ flex: 1, opacity }}>
          <TextInput
            ref={inputRef}
            value={value}
            onChangeText={onChange}
            placeholder="Search user… (yoda)"
            autoCapitalize="none"
            className="py-0"
            returnKeyType="search"
            onBlur={() => {
              // valgfritt: lukk når man mister fokus og query er tom
              if (!value.trim()) setExpanded(false);
            }}
          />
        </Animated.View>

        {expanded && value.length > 0 && (
          <Pressable onPress={() => onChange("")} hitSlop={10} className="ml-2">
            <Entypo name="cross" size={20} color="black" />
          </Pressable>
        )}
      </Animated.View>
    </View>
  );
}
