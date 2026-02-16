import images from "@/constants/images";
import { login } from "@/lib/appwrite";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Alert, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await login();

      if (response) {
        router.replace("/(tabs)");
      } else {
        Alert.alert("Login Failed");
      }
    } catch (error) {
      Alert.alert("Login Failed");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Image
        source={images.onboarding}
        contentFit="cover"
        style={{ width: "100%", height: "60%" }}
      />

      <Text className="text-center uppercase font-rubik text-black-200">
        Welcome to rstate
      </Text>

      <Text className="text-center mt-5 text-3xl font-rubik-semibold">
        Let's Get You Closer to {"\n"}
        <Text className="text-primary-300 font-rubik-semibold">
          Your Ideal Home
        </Text>
      </Text>

      <View className="px-6 mt-7">
        <Pressable
          onPress={handleLogin}
          className="border rounded-lg py-3 border-black-200 flex-row justify-center items-center gap-5"
        >
          <Image
            source={images.google}
            style={{ height: 30, width: 30 }}
            contentFit="contain"
          />
          <Text className="font-rubik text-lg text-black-200">
            Continue with Google
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
