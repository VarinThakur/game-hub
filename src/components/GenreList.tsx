import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import useGameStore from "../store";

// interface Props {
//   onSelectGenre: (genre: Genre) => void;
//   selectedGenreId?: number;
// }

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const selectedGenreId = useGameStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameStore((s) => s.setGenreId);

  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
                src={genre.image_background}
              ></Image>
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                variant="link"
                fontSize={"lg"}
                onClick={() => setGenreId(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
