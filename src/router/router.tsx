import { createBrowserRouter } from "react-router-dom";
import PlanetList from "../components/PlanetList";
import DemoComponent from "../components/DemoComponent";
import FrenchFoodForm from "../pages/FrenchFoodForm";

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
]);

export default router;
