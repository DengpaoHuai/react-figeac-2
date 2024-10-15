import { useEffect, useState } from "react";
import { getFrenchFoods } from "../services/frenchfood.service";
import { FrenchFood } from "../types/frenchFood.types";

const FrenchFoodList = () => {
  const [frenchFoods, setFrenchFoods] = useState<FrenchFood[]>([]);

  useEffect(() => {
    getFrenchFoods().then((data) => {
      console.log(data);
      setFrenchFoods(data);
    });
  }, []);

  return (
    <div>
      <h1>French Food</h1>
      {frenchFoods.map((frenchfood) => (
        <div key={frenchfood._id}>
          <h2>{frenchfood.name}</h2>
          <p>{frenchfood.description}</p>
          <p>{frenchfood.price}</p>
        </div>
      ))}
    </div>
  );
};

export default FrenchFoodList;
