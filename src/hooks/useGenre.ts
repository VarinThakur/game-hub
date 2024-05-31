import useGenres from "./useGenres";

const useGenre = (selectedGenreId?: number) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === selectedGenreId);
  return genre;
};
export default useGenre;
