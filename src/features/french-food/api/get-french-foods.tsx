import { useSuspenseQuery } from "@tanstack/react-query";
import { FrenchFood } from "../../../types/frenchFood.types";
import { getFrenchFoods } from "../../../services/frenchfood.service";

export const frenchFoodConfig = {
  queryKey: ["frenchfood"],
  queryFn: getFrenchFoods,
};

const useFrenchFoods = () => {
  const data = useSuspenseQuery<FrenchFood[]>(frenchFoodConfig);

  return data;
};

export default useFrenchFoods;
