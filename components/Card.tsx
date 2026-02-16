import icons from "@/constants/icons";
import { Property } from "@/types"; // Make sure this path is correct
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

interface Props {
  property: Property; // This fixes the "property" prop error
  onPress: () => void;
}

const Card = ({ property, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className="flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative"
    >
      {/* 1. Rating Badge */}
      <View className="flex flex-row items-center absolute px-2 top-5 right-5 bg-white/90 p-1 rounded-full z-50">
        <Image source={icons.star} className="size-2.5" />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">
          {property.rating}
        </Text>
      </View>

      {/* 2. Main Image */}
      <Image
        source={{ uri: property.image }}
        className="w-full h-40 rounded-lg"
      />

      {/* 3. Text Content */}
      <View className="flex flex-col mt-2">
        <Text className="text-base font-rubik-bold text-black-300">
          {property.name}
        </Text>
        <Text className="text-xs font-rubik text-black-100">
          {property.address}
        </Text>

        <View className="flex flex-row items-center justify-between mt-2">
          <Text className="text-base font-rubik-bold text-primary-300">
            ${property.price}
          </Text>
          <Image
            source={icons.heart}
            className="w-5 h-5 mr-2"
            tintColor="#191D31"
          />
        </View>
      </View>
    </Pressable>
  );
};

export default Card;
