import { useQuery } from "@tanstack/react-query";
import gameService from "../services/game-service";
import ms from "ms";
import GameTrailer from "../entities/GameTrailer";

const useGameTrailers = (id: number) => {

  return useQuery({
    queryKey: ["gameTrailer", id],
    queryFn: () => gameService.getGameTrailers<GameTrailer>(id),
    staleTime : ms('24hr'),
    keepPreviousData : true
  });
};

export default useGameTrailers;
