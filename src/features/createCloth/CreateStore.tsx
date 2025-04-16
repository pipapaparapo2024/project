import { create } from "zustand";

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export interface SpaceProps {
  id: number;
  space: string;
}

export interface TypeProps {
  id: number;
  type: string;
}

export interface Cloth {
  name: string;
  photoUrl: string;
  size: string;
  type: string; 
  place: string; 
}

export type ClothState = {
  spaceContainer: SpaceProps[];
  addSpace: (space: string) => void;

  typeContainer: TypeProps[];
  addType: (type: string) => void;

  name: string;
  photoUrl: string;
  size: string;
  type: string; 
  place: string; 
  setName: (name: string) => void;
  setPhotoUrl: (photoUrl: string) => void;
  setSize: (size: string) => void;
  setType: (type: string) => void;
  setPlace: (place: string) => void;

  handleSubmit: (
    e: React.FormEvent,
    setClothes: (clothes: Cloth[]) => void,
    clothes: Cloth[]
  ) => void;
};

export const useClothStore = create<ClothState>((set, get) => ({
  spaceContainer: [],
  addSpace: (space: string) =>
    set((state) => ({
      spaceContainer: [
        ...state.spaceContainer,
        { id: state.spaceContainer.length + 1, space },
      ],
    })),

  typeContainer: [],
  addType: (type: string) =>
    set((state) => ({
      typeContainer: [
        ...state.typeContainer,
        { id: state.typeContainer.length + 1, type },
      ],
    })),

  name: "",
  photoUrl: "",
  size: "",
  type: "",
  place: "",
  setName: (name: string) => set({ name }),
  setPhotoUrl: (photoUrl: string) => set({ photoUrl }),
  setSize: (size: string) => set({ size }),
  setType: (type: string) => set({ type }),
  setPlace: (place: string) => set({ place }),

  handleSubmit: (
    e: React.FormEvent,
    setClothes: (clothes: Cloth[]) => void,
    clothes: Cloth[]
  ) => {
    e.preventDefault();
  
    const { name, photoUrl, size, type, place } = get();
  
    if (!name || !photoUrl || !size || !type || !place) {
      alert("Пожалуйста, заполните все поля");
      return;
    }
  
    const newCloth: Cloth = {
      name,
      photoUrl,
      size,
      type,
      place,
    };
  
    setClothes([...clothes, newCloth]);
    set({
      name: "",
      photoUrl: "",
      size: "",
      type: "",
      place: "",
    });
  },
}));