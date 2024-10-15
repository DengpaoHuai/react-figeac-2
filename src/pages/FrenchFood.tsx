import { useContext } from "react";
import { FrenchFoodContext } from "../contexts/FrenchFoodContext";
import { Link } from "react-router-dom";

const FrenchFoodList = () => {
  const { frenchFood } = useContext(FrenchFoodContext);

  return (
    <div>
      <h1>French Food</h1>
      <Link to="/create_french_food">ajouter un plat</Link>
      {frenchFood?.map((frenchfood) => (
        <div key={frenchfood._id}>
          <h2>{frenchfood.name}</h2>
          <p>{frenchfood.description}</p>
          <p>{frenchfood.price}</p>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default FrenchFoodList;
