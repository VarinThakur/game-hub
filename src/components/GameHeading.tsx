import { Heading } from "@chakra-ui/react";
// import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameStore from "../store";

// interface Props {
//   gameQuery: GameQuery;
// }

const GameHeading = () => {
  const genreId = useGameStore(s => s.gameQuery.genreId)
  const genre = useGenre(genreId);

  const platformId = useGameStore(s => s.gameQuery.platformId)
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" fontSize={"5xl"} marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
