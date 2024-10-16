import { Link } from "react-router-dom";
import useFrenchFoodStore from "../store/useFrenchFoodStore";

const FrenchFoodList = () => {
  const { frenchFood, deleteFrenchFood } = useFrenchFoodStore();

  return (
    <div>
      <h1>French Food</h1>
      <Link to="/create_french_food">ajouter un plat</Link>
      {frenchFood?.map((frenchfood) => (
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
          <Link to={`/edit_french_food/${frenchfood._id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
};

export default FrenchFoodList;
