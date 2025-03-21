import { create } from "zustand";
import axios from "axios";


// -----------------------NavType-------------------------
export enum NavType {
  wardrobe = "wardrobe",
  type = "type",
  space = "space",
}

// --------------------LoginFormData----------------------

export interface LoginFormData {
    username?: string;
    email: string;
    password: string;
}


export const loginUser = async (User: LoginFormData) => {
    try {
        const response = await axios.post("/api/auth/login", User);
        return response.data;
    } catch (error) {
        console.error("Ошибка при авторизации:", error);
    }
};

export const registerUser = async (User: LoginFormData) => {
    try {
        const response = await axios.post("/api/auth/register", User);
        return response.data;
    } catch (error) {
        console.error("Ошибка при регистрации:", error);
    }
};


// --------------------Clothes-----------------------
export interface PostClothBody {
    name: string;
    photoUrl: string|null;
    size: string;
    type: number;
    place: string;
}


export type State = {
  navChoice: NavType;
  clothes: PostClothBody[];
  setClothes: (clothes: PostClothBody[]) => void;
  setNavChoice: (navChoice: NavType) => void;
};

// ---------------useStore------------------------
export const useStore = create<State>((set) => ({
    navChoice: NavType.wardrobe,
    clothes: [],
    setClothes: (clothes: PostClothBody[]) =>
        set((state) => ({ ...state, clothes })),
    setNavChoice: (navChoice: NavType) =>
        set((state) => ({ ...state, navChoice })),
}));


