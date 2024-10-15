import { create } from "zustand";
import { FrenchFood } from "../types/frenchFood.types";

type FrenchFoodStore = {
  frenchFood: FrenchFood[];
  setFrenchFood: (frenchFood: FrenchFood[]) => void;
  addFrenchFood: (frenchFood: FrenchFood) => void;
};

const useFrenchFoodStore = create<FrenchFoodStore>((set) => ({
  frenchFood: [],
  setFrenchFood: (frenchFood: FrenchFood[]) => set({ frenchFood }),
  addFrenchFood: (frenchFood: FrenchFood) =>
    set((state) => ({ frenchFood: [...state.frenchFood, frenchFood] })),
}));

export default useFrenchFoodStore;
