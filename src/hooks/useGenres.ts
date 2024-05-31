import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import genreService from "../services/genre-service";
import Genre from "../entities/Genre";
import genres from "../data/genres";
import ms from "ms";

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: genreService.getAll<Genre>,
    staleTime: ms("24h"),
    initialData: genres,
  });
};

export default useGenres;
