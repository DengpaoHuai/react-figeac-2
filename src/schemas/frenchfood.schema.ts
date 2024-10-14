import { z } from "zod";

export const frenchFoodSchema = z.object({
  name: z.string().min(3).max(25),
  description: z.string(),
  price: z.coerce.number(),
});
