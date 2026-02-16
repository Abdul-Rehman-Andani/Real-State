import { getProperties } from "@/lib/appwrite";
import { useQuery } from "@tanstack/react-query";

type Props = {
  filter: string;
  query: string;
  limit?: number;
};

export const useProperties = ({ filter, query, limit }: Props) => {
  return useQuery({
    queryKey: ["properties", filter, query, limit], 
    queryFn: () => getProperties({ filter, query, limit }),
    staleTime: 1000 * 60 * 2, // 2 minutes (optional)
  });
};
