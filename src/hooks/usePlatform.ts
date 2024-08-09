import { useQuery } from "@tanstack/react-query";
import platform from "../data/platform";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Platform>("/platforms")

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: {count : platform.length , results : platform,next:null}
  });

export default usePlatform;
