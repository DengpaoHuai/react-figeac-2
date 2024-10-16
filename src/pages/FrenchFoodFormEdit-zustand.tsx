import { frenchFoodSchema } from "../schemas/frenchfood.schema";
import { useNavigate, useParams } from "react-router-dom";
import { FrenchFood } from "../types/frenchFood.types";
import { useModal } from "../contexts/ModalContextProvider";
import useFrenchFoodStore from "../store/useFrenchFoodStore";
import { updateFrenchFood } from "../services/frenchfood.service";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

//type FrenchFood = z.infer<typeof frenchFoodSchema>;

const FrenchFoodFormEdit = () => {
  const { id } = useParams();
  const { updateFrenchFood: updateFrench, frenchFood } = useFrenchFoodStore();

  const itemToEdit = frenchFood.find((item) => item._id === id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<FrenchFood, "_id">>({
    defaultValues: {
      name: itemToEdit?.name,
      description: itemToEdit?.description,
      price: itemToEdit?.price,
    },
    resolver: zodResolver(frenchFoodSchema),
  });

  const navigate = useNavigate();
  const { openModal } = useModal();

  const onSubmit = (data: Omit<FrenchFood, "_id">) => {
    updateFrenchFood(id as string, data).then(() => {
      updateFrench({
        _id: id as string,
        ...data,
      });
      openModal("Le plat a bien été modifié", "success");
      navigate("/frenchfoods");
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

export default FrenchFoodFormEdit;
