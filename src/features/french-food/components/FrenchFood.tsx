import { Link } from "react-router-dom";
import useFrenchFoods, { frenchFoodConfig } from "../api/get-french-foods";
import useDeleteFrenchFood from "../api/delete-user";
import { useQueryClient } from "@tanstack/react-query";

const FrenchFoodList = () => {
  const { data } = useFrenchFoods();
  const queryClient = useQueryClient();
  const deleteFrenchFood = useDeleteFrenchFood();

  return (
    <div>
      <h1>French Food</h1>
      <Link to="/french-foods/create">ajouter un plat</Link>
      {data?.map((frenchfood) => (
        <div key={frenchfood._id}>
          <h2>{frenchfood.name}</h2>
          <p>{frenchfood.description}</p>
          <p>{frenchfood.price}</p>
          <button
            onClick={() => {
              deleteFrenchFood(frenchfood._id);
            }}
          >
            Delete
          </button>
          <Link
            onMouseEnter={() => {
              queryClient.prefetchQuery(frenchFoodConfig);
            }}
            to={`/french-foods/edit/${frenchfood._id}`}
          >
            Edit
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FrenchFoodList;
