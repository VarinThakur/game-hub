import { Box } from "@chakra-ui/react";
import useGameTrailers from "../hooks/useGameTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({gameId} : Props) => {
  const { data, isLoading, error } = useGameTrailers(gameId);
  //   console.log(data);

  if (isLoading) return null;
  if (error) throw error;

  const first = data?.results[0];
  if (!first) return null;

  return first ? (
    <Box marginY ={2}>
        <video src={first.data[480]} poster={first.preview} controls></video>
    </Box>
  ) : null;
};

export default GameTrailer;
