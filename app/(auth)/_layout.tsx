import { getCurrentUser } from "@/lib/appwrite";
import { Stack, useRouter } from "expo-router";
import React, { useEffect } from "react";

const AuthLayout = () => {
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const user = await getCurrentUser();

      if (user) {
        // ✅ If already logged in → go to tabs
        router.replace("/(tabs)");
      }
    };

    checkUser();
  }, []);

  return <Stack screenOptions={{ headerShown: false }} />;
};

export default AuthLayout;
