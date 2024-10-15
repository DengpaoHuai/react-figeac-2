import { FrenchFood } from "../types/frenchFood.types";
import { crudcrud } from "./intances/crudcrud";

export const createFrenchFood = async (frenchfood: Omit<FrenchFood, "_id">) => {
  const response = await crudcrud.post("/frenchfood", frenchfood);
  return response.data;
};

export const getFrenchFoods = async () => {
  const response = await crudcrud.get("/frenchfood");
  return response.data;
};

export const deleteFrenchFood = async (id: string) => {
  const response = await crudcrud.delete(`/frenchfood/${id}`);
  return response;
};
