import useGame from "../hooks/useGame";
import { useParams } from "react-router-dom";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGameTrailers from "../hooks/useGameTrailers";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug: selectedGameSlug } = useParams();

  // console.log(selectedGameSlug)

  const { data: game, error, isLoading } = useGame(selectedGameSlug!);
  // const {data : gametrailer} = useGameTrailers(selectedGameSlug!)

  // console.log(gametrailer?.results)

  // console.log(game)

  if (isLoading) return <Spinner></Spinner>;

  if (error || !game) throw error;

  return (
    <>
      <SimpleGrid spacing={2} columns={{ base: 1, md: 2 }}>
        <GridItem>
          <Heading>{game.name}</Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributes game={game}></GameAttributes>
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id}></GameTrailer>
          <GameScreenshots gameId={game.id}></GameScreenshots>
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
