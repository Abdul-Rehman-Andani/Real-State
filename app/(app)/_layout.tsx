import { getCurrentUser } from "@/lib/appwrite";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

const AppLayout = () => {
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const user = await getCurrentUser();

      if (!user) {
        router.replace("/(auth)");
      }
    };

    checkUser();
  }, []);
  return (
    <View>
      <Text>AppLayout</Text>
    </View>
  );
};

export default AppLayout;
