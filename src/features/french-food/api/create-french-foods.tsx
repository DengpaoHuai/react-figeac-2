import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createFrenchFood } from "../../../services/frenchfood.service";
import { FrenchFood } from "../../../types/frenchFood.types";

const useCreateFrenchFood = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["frenchfood"],
    mutationFn: async ({
      data,
      callback,
    }: {
      data: Omit<FrenchFood, "_id">;

      callback: () => void;
    }) => {
      await createFrenchFood(data);
      callback();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["frenchfood"],
      });
    },
  });

  return mutation.mutate;
};

export default useCreateFrenchFood;
