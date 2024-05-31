import { useQuery } from "@tanstack/react-query";
import gameService from "../services/game-service";
import ms from "ms";
import GameScreenshot from "../entities/GameScreenshot";

const useGameScreenshots = (gameId: number) => {
  return useQuery({
    queryKey: ["gameScreenshots", gameId],
    queryFn: () => gameService.getGameScreenshots<GameScreenshot>(gameId),
    staleTime: ms("24hr"),
    keepPreviousData: true,
  });
};

export default useGameScreenshots;
