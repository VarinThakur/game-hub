import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameGrid from "../components/GameGrid";

const Homepage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem paddingX={5} area="aside">
          <GenreList
          // selectedGenreId={gameQuery.genreId}
          // onSelectGenre={(genre) =>
          //   setGenreId(genre.id)
          // }
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading></GameHeading>
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector
            // selectedPlatformId={gameQuery.platformId}
            // onSelectPlatform={(platform) =>
            //   setPlatformId(platform.id)
            // }
            ></PlatformSelector>
            <SortSelector
            // sortOrder={gameQuery.sortOrder}
            // onSelectSortOrder={(order) =>
            //   setSortOrder(order)
            // }
            ></SortSelector>
          </HStack>
        </Box>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
};

export default Homepage;
