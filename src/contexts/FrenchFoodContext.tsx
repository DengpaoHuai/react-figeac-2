import { createContext, useEffect, useState } from "react";
import { FrenchFood } from "../types/frenchFood.types";
import {
  createFrenchFood,
  deleteFrenchFood,
} from "../services/frenchfood.service";

type FrenchFoodContextType = {
  frenchFood: FrenchFood[];
  addFrenchFood: (frenchfood: Omit<FrenchFood, "_id">) => Promise<void>;
  deleteItem: (id: string) => Promise<void>;
};

export const FrenchFoodContext = createContext<FrenchFoodContextType>(
  {} as FrenchFoodContextType
);

const FrenchFoodContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [frenchFood, setFrenchFood] = useState<FrenchFood[]>([]);

  useEffect(() => {
    fetch(
      `https://crudcrud.com/api/${
        import.meta.env.VITE_CRUDCRUDTOKEN
      }/frenchfood`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setFrenchFood(data);
      });
  }, []);

  const addFrenchFood = async (frenchfood: Omit<FrenchFood, "_id">) => {
    const french = await createFrenchFood(frenchfood);
    setFrenchFood([...frenchFood, french]);
  };

  const deleteItem = async (id: string) => {
    await deleteFrenchFood(id);
    setFrenchFood(frenchFood.filter((f) => f._id !== id));
  };

  return (
    <FrenchFoodContext.Provider
      value={{
        frenchFood,
        addFrenchFood,
        deleteItem,
      }}
    >
      {children}
    </FrenchFoodContext.Provider>
  );
};

export default FrenchFoodContextProvider;
