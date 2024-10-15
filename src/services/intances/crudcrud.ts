import axios from "axios";

export const crudcrud = axios.create({
  baseURL: `https://crudcrud.com/api/${import.meta.env.VITE_CRUDCRUDTOKEN}`,
});
