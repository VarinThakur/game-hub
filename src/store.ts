import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;

  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
}

const useGameStore = create<GameQueryStore>((set) => ({
  gameQuery: {},

  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId: genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformId: platformId },
    })),
  setSearchText: (searchText) =>
    set(() => ({ gameQuery: { searchText: searchText } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, sortOrder: sortOrder },
    })),
}));

export default useGameStore;
