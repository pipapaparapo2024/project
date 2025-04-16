import { create } from "zustand";
import axios from "axios";

export const NavStyle = "p-2 text-lg cursor-pointer hover:scale-110 hover:border border-solid border-black hover:bg-white rounded-lg transition duration-300 ease-in-out";

export interface Cloth {
  name: string;
  photoUrl: string;
  size: string;
  type: number;
  place: string;
}


export type State = {
  clothes: Cloth[];
  setClothes: (clothes: Cloth[]) => void;
  getClothes:()=>Promise<void>;
};

export const useStore = create<State>((set) => ({
  clothes: [],
  setClothes: (clothes: Cloth[]) =>
    set((state) => ({ ...state, clothes })),

  getClothes: async () => {
    try {
      const response = await axios.get<Cloth[]>("https://67bc4e91ed4861e07b3a014b.mockapi.io/clothes");
      set({ clothes: response.data }); 
    } catch (error) {
      console.error("Failed to fetch clothes:", error);
      throw new Error("Failed to fetch clothes"); 
    }
  },
}))
