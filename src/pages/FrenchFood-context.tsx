import { useContext } from "react";
import { FrenchFoodContext } from "../contexts/FrenchFoodContext";
import { Link } from "react-router-dom";
import ModalComponent from "../components/ModalComponent";
import { ModalContext } from "../contexts/ModalContextProvider";
import { Button } from "primereact/button";

const FrenchFoodList = () => {
  const { frenchFood, deleteItem } = useContext(FrenchFoodContext);
  const { openModal } = useContext(ModalContext);
  return (
    <div>
      <h1>French Food</h1>
      <Button
        onClick={() => {
          openModal("que je peux changer", "description");
        }}
      >
        afficher la modale
      </Button>
      <Link to="/create_french_food">ajouter un plat</Link>
      {frenchFood?.map((frenchfood) => (
        <div key={frenchfood._id}>
          <h2>{frenchfood.name}</h2>
          <p>{frenchfood.description}</p>
          <p>{frenchfood.price}</p>
          <button
            onClick={() => {
              deleteItem(frenchfood._id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default FrenchFoodList;
