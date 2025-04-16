import { create } from "zustand";

export const style =
  "cursor-pointer border border-solid border-black rounded-full hover:scale-120";

export type State = {
  searchText: string;
  beginSearch: boolean;
  setSearchText: (searchText: string) => void;
};

export const useSearchStore = create<State>((set) => ({
  searchText: "",
  beginSearch: false,
  setSearchText: (searchText: string) =>
    set((state) => ({ ...state, searchText })),
  
}));
