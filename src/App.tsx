import { RouterProvider } from "react-router-dom";
import "./App.css";
import "primeflex/primeflex.css";
import "primereact/resources/themes/nano/theme.css";
import router from "./router/router";
import FrenchFoodContextProvider from "./contexts/FrenchFoodContext";
import ModalContextProvider from "./contexts/ModalContextProvider";
import { PrimeReactProvider } from "primereact/api";

function App() {
  return (
    <div className="main-div">
      <PrimeReactProvider>
        <ModalContextProvider>
          <FrenchFoodContextProvider>
            <RouterProvider router={router}></RouterProvider>
          </FrenchFoodContextProvider>
        </ModalContextProvider>
      </PrimeReactProvider>
    </div>
  );
}

export default App;
