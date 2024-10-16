import { frenchFoodSchema } from "../schemas/frenchfood.schema";
import { useNavigate } from "react-router-dom";
import { FrenchFood } from "../types/frenchFood.types";
import { useContext } from "react";
import { FrenchFoodContext } from "../contexts/FrenchFoodContext";
import { useModal } from "../contexts/ModalContextProvider";
import InputTextDemo from "../components/ui/InputTextDemo";
import useCustomForm from "../hooks/useCustomForm";

//type FrenchFood = z.infer<typeof frenchFoodSchema>;

const FrenchFoodForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useCustomForm<Omit<FrenchFood, "_id">>(frenchFoodSchema);

  const navigate = useNavigate();
  const { openModal } = useModal();
  const { addFrenchFood } = useContext(FrenchFoodContext);

  const onSubmit = (data: Omit<FrenchFood, "_id">) => {
    addFrenchFood(data).then(() => {
      openModal("Le plat a bien été ajouté", "success");
      navigate("/frenchfoods");
    });
  };

  return (
    <div className="">
      <h1>French Food Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputTextDemo
          id="name"
          label="Name :"
          {...register("name")}
        ></InputTextDemo>
        {errors.name && <p>{errors.name.message}</p>}
        <br />
        <InputTextDemo
          id="description"
          label="Description :"
          {...register("description")}
        ></InputTextDemo>
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
