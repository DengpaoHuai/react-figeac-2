import { useEffect } from "react";
import { Link } from "react-router-dom";
import useFrenchFoodStore from "../store/useFrenchFoodStore";
import { getFrenchFoods } from "../services/frenchfood.service";

const FrenchFoodList = () => {
  const { frenchFood, setFrenchFood } = useFrenchFoodStore();

  useEffect(() => {
    if (frenchFood.length > 0) return;
    getFrenchFoods().then((data) => {
      setFrenchFood(data);
    });
  }, []);

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
              // deleteItem(frenchfood._id);
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
