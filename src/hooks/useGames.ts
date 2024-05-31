import useGameStore, { GameQuery } from "../store";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import gameService from "../services/game-service";
import Game from "../entities/Game";
import { FetchResponse } from "../services/api-client";
import ms from "ms";

const useGames = () => {
  // return useQuery<FetchResponse<Game>,Error>(
  //   {
  //     queryKey : ['games', gameQuery],
  //     queryFn : () => gameService.getAll({ params : {
  //       ordering : gameQuery.sortOrder,
  //       parent_platforms : gameQuery.platform?.id,
  //       search : gameQuery.searchText,
  //       genres : gameQuery.genre?.id
  //     }})
  //   }
  // );

  const gameQuery = useGameStore((s) => s.gameQuery);

  const infiniteQueryFn = ({ pageParam = 1 }) =>
    gameService.getAll<Game>({
      params: {
        ordering: gameQuery.sortOrder,
        parent_platforms: gameQuery.platformId,
        search: gameQuery.searchText,
        genres: gameQuery.genreId,
        page: pageParam,
      },
    });
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: infiniteQueryFn,
    staleTime: ms("24h"),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
