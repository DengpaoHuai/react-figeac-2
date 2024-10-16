import "./App.css";
import "primeflex/primeflex.css";
import "primereact/resources/themes/nano/theme.css";
import { AppRouter } from "./router/router";
import FrenchFoodContextProvider from "./contexts/FrenchFoodContext";
import ModalContextProvider from "./contexts/ModalContextProvider";
import { PrimeReactProvider } from "primereact/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
      refetchOnWindowFocus: true,
    },
  },
});

function App() {
  return (
    <div className="main-div">
      <QueryClientProvider client={queryClient}>
        <PrimeReactProvider>
          <ModalContextProvider>
            <FrenchFoodContextProvider>
              <AppRouter></AppRouter>
            </FrenchFoodContextProvider>
          </ModalContextProvider>
        </PrimeReactProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
