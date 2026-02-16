import { getLatestProperties } from "@/lib/appwrite";
import { Property } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useLatestProperties = () => {
  return useQuery<Property[]>({
    queryKey: ["latest-properties"],
    queryFn: getLatestProperties,
    staleTime: 1000 * 60 * 5,
  });
};