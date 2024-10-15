import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/router";
import FrenchFoodContextProvider from "./contexts/FrenchFoodContext";

function App() {
  return (
    <div>
      <FrenchFoodContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </FrenchFoodContextProvider>
    </div>
  );
}

export default App;
