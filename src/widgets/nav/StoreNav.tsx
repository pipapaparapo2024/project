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

export enum NavType {
  wardrobe = "wardrobe",
  type = "type",
  space = "space",
}

export type State = {
  navChoice: NavType;
  modalWindow: boolean;
  clothes: Cloth[];
  setClothes: (clothes: Cloth[]) => void;
  getClothes:()=>Promise<void>;
  setNavChoice: (navChoice: NavType) => void;
  setModalWindow:()=>void;
};

export const useStore = create<State>((set) => ({
  navChoice: NavType.wardrobe,
  clothes: [],
  modalWindow: false,
  setModalWindow: () =>
    set((state) => ({ ...state,  modalWindow: !state.modalWindow })),
  setNavChoice: (navChoice: NavType) =>
    set((state) => ({ ...state, navChoice })),
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
