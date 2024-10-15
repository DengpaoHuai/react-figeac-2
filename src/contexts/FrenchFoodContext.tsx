import { createContext, useEffect, useState } from "react";
import { FrenchFood } from "../types/frenchFood.types";
import { createFrenchFood } from "../services/frenchfood.service";

type FrenchFoodContextType = {
  frenchFood: FrenchFood[];
  addFrenchFood: (frenchfood: Omit<FrenchFood, "_id">) => Promise<void>;
};

export const FrenchFoodContext = createContext<FrenchFoodContextType>({
  frenchFood: [],
  addFrenchFood: async (frenchfood: Omit<FrenchFood, "_id">) => {},
});

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

  return (
    <FrenchFoodContext.Provider
      value={{
        frenchFood,
        addFrenchFood,
      }}
    >
      {children}
    </FrenchFoodContext.Provider>
  );
};

export default FrenchFoodContextProvider;
