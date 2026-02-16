import { categories } from "@/constants/data";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";

const Filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selecetdCategory, setSelectedCategory] = useState(
    params.filter || "All",
  );

  const handleSelectedCategory = (category: string) => {
    if (selecetdCategory === category) {
      setSelectedCategory("All");
      router.setParams({ filter: "All" }); // Key must be 'filter'
      return;
    }

    setSelectedCategory(category);
    router.setParams({ filter: category }); // Key must be 'filter'
  };

  return (
    <ScrollView
      className="mb-5"
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleSelectedCategory(item.category)}
          className={`mr-3 py-2 rounded-lg px-4 ${item.category === selecetdCategory ? "bg-primary-300" : "bg-accent-100"}`}
        >
          <Text
            className={`font-rubik ${item.category === selecetdCategory ? "text-white" : "text-black-300"}`}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Filters;
