import icons from "@/constants/icons";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = () => {
  const params = useLocalSearchParams<{ query?: string }>();
  // Initialize state from URL params
  const [search, setSearch] = useState(params.query ?? "");

  // Update the URL after 500ms of no typing
  const debouncedSearch = useDebouncedCallback((text: string) => {
    router.setParams({ query: text });
  }, 500);

  const handleSearch = (text: string) => {
    setSearch(text); // Immediate UI update for "snappiness"
    debouncedSearch(text); // Delayed URL update
  };

  // Sync local state if params change externally (e.g., clicking a 'clear' button elsewhere)
  useEffect(() => {
    setSearch(params.query ?? "");
  }, [params.query]);

  return (
    <View className="flex flex-row justify-between items-center bg-accent-100 border border-primary-100 px-3 py-1 rounded-md">
      <View className="flex flex-row items-center gap-4 flex-1">
        <Image source={icons.search} style={{ width: 20, height: 20 }} />
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Search..."
          className="font-rubik text-sm flex-1"
          placeholderTextColor="#999"
        />
      </View>
      <Image source={icons.filter} style={{ width: 20, height: 20 }} />
    </View>
  );
};

export default SearchBar;
