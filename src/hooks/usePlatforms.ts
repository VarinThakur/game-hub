import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import platformService from "../services/platform-service";
import { FetchResponse } from "../services/api-client";
import ms from "ms";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: platformService.getAll<Platform>,
    staleTime: ms("24h"),
    initialData: platforms,
  });
};

export default usePlatforms;
