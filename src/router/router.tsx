import { createBrowserRouter } from "react-router-dom";
import PlanetList from "../components/PlanetList";
import DemoComponent from "../components/DemoComponent";
import FrenchFoodForm from "../pages/FrenchFoodForm";
import FrenchFood from "../pages/FrenchFood";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PlanetList></PlanetList>,
  },
  {
    path: "/demo",
    element: <DemoComponent></DemoComponent>,
  },
  {
    path: "/create_french_food",
    element: <FrenchFoodForm></FrenchFoodForm>,
  },
  {
    path: "/frenchfoods",
    element: <FrenchFood></FrenchFood>,
  },
  {
    path: "/edit_french_food/:id",
    ///  element: <FrenchFood></FrenchFood>,
  },
]);

export default router;
