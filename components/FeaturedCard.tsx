import icons from "@/constants/icons";
import images from "@/constants/images";
import { Property } from "@/types";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

interface Props {
  onPress: () => void;
  property: Property;
}

const FeaturedCard = ({ onPress, property }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <View className="w-60 h-80 relative rounded-2xl overflow-hidden">
        <Image source={{ uri: property.image }} className="w-full h-full" />
        <Image
          source={images.cardGradient}
          className="absolute inset-0 w-full h-full"
        />

        <View className="absolute top-3 right-3 z-20 flex-row items-center bg-black/60 px-2 py-1 rounded-full">
          <Image source={icons.star} className="w-3 h-3 mr-1" />
          <Text className="text-white text-xs">{property.rating}</Text>
        </View>

        <View className="flex flex-col absolute bottom-16 left-3">
          <Text
            className="text-white text-xl font-rubik-bold"
            numberOfLines={1}
          >
            {property.name}
          </Text>
          <Text className="text-white font-rubik" numberOfLines={1}>
            {property.address}
          </Text>
        </View>

        <View className="flex flex-row justify-between items-center absolute bottom-4 left-3 right-3">
          <Text className="text-white text-2xl font-rubik-bold">
            ${property.price}
          </Text>
          <Image source={icons.heart} className="w-8 h-8" />
        </View>
      </View>
    </Pressable>
  );
};

export default FeaturedCard;
