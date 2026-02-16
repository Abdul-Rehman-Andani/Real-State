import icons from "@/constants/icons";
import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";

interface Props {
  icon: string;
  title: string;
}

const SettingItems = ({ icon, title }: Props) => {
  return (
    <Pressable className="flex-row justify-between items-center py-3">
      <View className="flex-row items-center gap-4">
        <Image source={icon} style={{ height: 25, width: 25 }} />
        <Text className="text-lg font-rubik-medium">{title}</Text>
      </View>
      <Image source={icons.rightArrow} style={{ height: 20, width: 20 }} />
    </Pressable>
  );
};

export default SettingItems;
