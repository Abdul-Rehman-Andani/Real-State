import Card from "@/components/Card";
import FeaturedCard from "@/components/FeaturedCard";
import Filters from "@/components/Filters";
import SearchBar from "@/components/SearchBar";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { useLatestProperties } from "@/hooks/useLatestProperties";
import { useProperties } from "@/hooks/useProperties";
import { getTime } from "@/lib/time";
import { Property } from "@/types";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();

  // Safe fallback values
  const filter = params.filter ?? "";
  const query = params.query ?? "";

  // Featured properties
  const { data: latestProperties, isLoading: latestLoading } =
    useLatestProperties();

  // All properties (filtered + searched)
  const { data: properties, isLoading: propertiesLoading } = useProperties({
    filter,
    query,
    limit: 10,
  });

  return (
    <SafeAreaView className="flex-1 bg-white px-6">
      <FlatList
        data={properties || []}
        keyExtractor={(item) => item.$id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperClassName="flex gap-5"
        contentContainerClassName="pb-32"
        renderItem={({ item }) => (
          <View className="flex-1 mb-4">
            <Card property={item} onPress={() => {}} />
          </View>
        )}
        ListHeaderComponent={
          <>
            {/* Header Top Section */}
            <View className="flex flex-row justify-between items-center">
              <View className="flex flex-row items-center gap-4">
                <Image
                  source={images.avatar}
                  style={{ height: 40, width: 40 }}
                />
                <View>
                  <Text className="text-sm font-rubik text-black-100">
                    {getTime()}
                  </Text>
                  <Text className="text-base font-rubik-medium text-black-300">
                    Andani
                  </Text>
                </View>
              </View>

              <Image source={icons.bell} style={{ height: 25, width: 25 }} />
            </View>

            {/* Search */}
            <View className="mt-5">
              <SearchBar />
            </View>

            {/* Featured Section */}
            <View className="py-5 flex flex-row justify-between items-center">
              <Text className="font-rubik-bold text-xl">Featured</Text>
              <Text className="font-rubik-medium text-primary-300">
                See all
              </Text>
            </View>

            {latestLoading ? (
              <ActivityIndicator size="large" color="#0061FF" />
            ) : (
              <FlatList
                data={latestProperties || []}
                keyExtractor={(item) => item.$id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 20 }}
                renderItem={({ item }: { item: Property }) => (
                  <FeaturedCard property={item} onPress={() => {}} />
                )}
              />
            )}

            {/* Recommendations Section */}
            <View className="py-5 flex flex-row justify-between items-center">
              <Text className="font-rubik-bold text-xl">
                Our Recommendations
              </Text>
              <Text className="font-rubik-medium text-primary-300">
                See all
              </Text>
            </View>

            {/* Filters */}
            <Filters />

            {/* Loading indicator for main grid */}
            {propertiesLoading && (
              <ActivityIndicator
                size="small"
                color="#0061FF"
                className="mt-5"
              />
            )}
          </>
        }
      />
    </SafeAreaView>
  );
}
