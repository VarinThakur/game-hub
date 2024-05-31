import { useQuery } from "@tanstack/react-query";
import gameService from "../services/game-service";
import Game from "../entities/Game";
import ms from "ms";

const useGame = (selectedGameSlug: string) => {
  return useQuery<Game, Error>({
    queryKey: ["games", selectedGameSlug],
    queryFn: () => gameService.getGameDetail(selectedGameSlug),
    keepPreviousData: true,
    staleTime: ms("24hr"),
  });
};

export default useGame;
