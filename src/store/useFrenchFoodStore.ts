import { create } from "zustand";
import { FrenchFood } from "../types/frenchFood.types";
import {
  deleteFrenchFood,
  getFrenchFoods,
} from "../services/frenchfood.service";
import { useEffect, useState } from "react";

type FrenchFoodStore = {
  frenchFood: FrenchFood[];
  setFrenchFood: (frenchFood: FrenchFood[]) => void;
  addFrenchFood: (frenchFood: FrenchFood) => void;
  updateFrenchFood: (frenchFood: FrenchFood) => void;
  deleteFrenchFood: (id: string) => void;
};

export const useFrenchFoodStore = create<FrenchFoodStore>((set) => ({
  frenchFood: [],
  setFrenchFood: (frenchFood: FrenchFood[]) => set({ frenchFood }),
  addFrenchFood: (frenchFood: FrenchFood) =>
    set((state) => ({ frenchFood: [...state.frenchFood, frenchFood] })),
  updateFrenchFood: (frenchFood: FrenchFood) => {
    set((state) => ({
      frenchFood: state.frenchFood.map((f) =>
        f._id === frenchFood._id ? frenchFood : f
      ),
    }));
  },
  deleteFrenchFood: (id: string) => {
    deleteFrenchFood(id).then(() => {
      set((state) => ({
        frenchFood: state.frenchFood.filter((f) => f._id !== id),
      }));
    });
  },
}));

const useFrenchFood = () => {
  const { frenchFood, setFrenchFood, ...rest } = useFrenchFoodStore();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (frenchFood.length > 0) return;
    setIsLoading(true);
    getFrenchFoods().then((data) => {
      setFrenchFood(data);
      setIsLoading(false);
    });
  }, []);

  return {
    frenchFood,
    isLoading,
    ...rest,
  };
};

export default useFrenchFood;
