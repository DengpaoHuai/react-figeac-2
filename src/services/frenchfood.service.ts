import { FrenchFood } from "../types/frenchFood.types";
import { crudcrud } from "./intances/crudcrud";

export const waitFor = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const createFrenchFood = async (frenchfood: Omit<FrenchFood, "_id">) => {
  const response = await crudcrud.post("/frenchfood", frenchfood);
  return response.data;
};

export const getFrenchFoods = async () => {
  await waitFor(1000);
  const response = await crudcrud.get("/frenchfood");
  return response.data;
};

export const deleteFrenchFood = async (id: string) => {
  await waitFor(2000);
  const response = await crudcrud.delete(`/frenchfood/${id}`);

  return response;
};

export const updateFrenchFood = async (
  id: string,
  frenchfood: Omit<FrenchFood, "_id">
) => {
  const response = await crudcrud.put(`/frenchfood/${id}`, frenchfood);
  return response;
};

export const getFrenchFood = async (id: string) => {
  const response = await crudcrud.get(`/frenchfood/${id}`);
  return response.data;
};
