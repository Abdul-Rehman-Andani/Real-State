import SettingItems from "@/components/SettingItems";
import { settings } from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { getCurrentUser, logout } from "@/lib/appwrite";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const [user, setUser] = useState<any>({ name: "", avatar: "" });

  const router = useRouter();
  const handleLogout = async () => {
    const response = await logout();
    if (response) {
      router.replace("/(auth)");
    }
  };

  useEffect(() => {
    const checkUser = async () => {
      const user = await getCurrentUser();
      if (user) {
        setUser(user);
      }
    };

    checkUser();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName=" px-6"
      >
        {/* Header */}
        <View className="flex-row justify-between items-center">
          <Text className="font-rubik-bold text-xl">Profile</Text>
          <Pressable onPress={handleLogout}>
            <Image
              source={icons.logout}
              style={{ height: 25, width: 25 }}
              className="mt-5
          "
            />
          </Pressable>
        </View>

        {/* Avator */}

        <View className="flex-col justify-center mt-14 items-center">
          <Image
            source={user?.avatar ? { uri: user?.avatar } : images.avatar}
            style={{ width: 150, height: 150 }}
          />

          <Text className="mt-5 font-rubik-semibold text-2xl">
            {user?.name}
          </Text>
        </View>

        {/* Setting */}
        <View className="mt-5">
          <SettingItems icon={icons.calendar} title="My Bookings" />
          <SettingItems icon={icons.wallet} title="Payments" />
        </View>

        <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
          {settings.slice(2).map((item, index) => (
            <SettingItems key={index} {...item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
