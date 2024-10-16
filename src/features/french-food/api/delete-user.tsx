import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFrenchFood } from "../../../services/frenchfood.service";
import { FrenchFood } from "../../../types/frenchFood.types";

const useDeleteFrenchFood = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["frenchfood"],
    mutationFn: async (id: string) => {
      await deleteFrenchFood(id);
    },
    networkMode: "online",
    onMutate: async (id: string) => {
      const previousState = queryClient.getQueryData<FrenchFood[]>([
        "frenchfood",
      ]);

      queryClient.setQueryData<FrenchFood[]>(["frenchfood"], (old) =>
        old?.filter((f) => f._id !== id)
      );

      return { previousState };
    },
    onError: (_err, _variables, context) => {
      queryClient.setQueryData<FrenchFood[]>(
        ["frenchfood"],
        context?.previousState
      );
    },
    /* onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["frenchfood"],
          });
        },*/
  });

  return mutation.mutate;
};

export default useDeleteFrenchFood;
