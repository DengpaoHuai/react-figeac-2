import useFetch from "../hooks/useFetch";
import { deleteFrenchFood } from "../services/frenchfood.service";
import { FrenchFood } from "../types/frenchFood.types";

const FrenchFoodList = () => {
  const { data } = useFetch<FrenchFood[]>("frenchfood");

  const deleteItam = (id: string) => {
    deleteFrenchFood(id).then(() => {
      //setFrenchFoods(frenchFoods.filter((frenchfood) => frenchfood._id !== id));
    });
  };

  return (
    <div>
      <h1>French Food</h1>
      {data?.map((frenchfood) => (
        <div key={frenchfood._id}>
          <h2>{frenchfood.name}</h2>
          <p>{frenchfood.description}</p>
          <p>{frenchfood.price}</p>
          <button onClick={() => deleteItam(frenchfood._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default FrenchFoodList;
