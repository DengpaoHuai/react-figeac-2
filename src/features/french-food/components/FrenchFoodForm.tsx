import { frenchFoodSchema } from "../../../schemas/frenchfood.schema";
import { useNavigate } from "react-router-dom";
import { FrenchFood } from "../../../types/frenchFood.types";
import { useModal } from "../../../contexts/ModalContextProvider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useCreateFrenchFood from "../api/create-french-foods";

//type FrenchFood = z.infer<typeof frenchFoodSchema>;

const FrenchFoodForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<FrenchFood, "_id">>({
    resolver: zodResolver(frenchFoodSchema),
  });

  const navigate = useNavigate();
  const { openModal } = useModal();
  const addFrenchFood = useCreateFrenchFood();

  const onSubmit = (data: Omit<FrenchFood, "_id">) => {
    addFrenchFood({
      data,
      callback: () => {
        openModal("Le plat a bien été ajouté", "success");
        navigate("/frenchfoods");
      },
    });
  };

  return (
    <div className="">
      <h1>French Food Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="food">Name :</label>
        <input type="text" id="food" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
        <br />
        <label htmlFor="description">Description :</label>
        <input type="text" id="description" {...register("description")} />
        {errors.description && <p>{errors.description.message}</p>}
        <br />
        <label htmlFor="price">Price :</label>
        <input type="number" id="price" {...register("price")} />
        {errors.price && <p>{errors.price.message}</p>}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FrenchFoodForm;
