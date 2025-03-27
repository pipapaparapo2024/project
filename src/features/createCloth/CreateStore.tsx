import { create } from "zustand";
import { useStore } from "../../widgets/nav/StoreNav";
import { Cloth } from "../../widgets/nav/StoreNav";

export const style = "p-2 text-gray-500 pr-5 rounded-lg";

export type State = Cloth & {
  handleSubmit: (e: React.FormEvent) => void;
  setName: (name: string) => void;
  setPhotoUrl: (photoUrl: string) => void;
  setSize: (size: string) => void;
  setType: (type: number) => void;
  setPlace: (place: string) => void;
};

export const useStoreCard = create<State>((set, get) => ({
  name: "",
  photoUrl: "",
  size: "",
  type: 0,
  place: "",
  setName: (name: string) => set({ name }),
  setPhotoUrl: (photoUrl: string) => set({ photoUrl }),
  setSize: (size: string) => set({ size }),
  setType: (type: number) => set({ type }),
  setPlace: (place: string) => set({ place }),
  handleSubmit: (e: React.FormEvent) => {
    e.preventDefault();

    const { name, photoUrl, size, type, place } = get();
    const { setClothes } = useStore();

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
    const { clothes } = useStore.getState();
    setClothes([...clothes, newCloth]);
    set({
      name: "",
      photoUrl: "",
      size: "",
      type: 0,
      place: "",
    });
  },
}));
