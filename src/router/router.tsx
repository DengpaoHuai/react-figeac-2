import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlanetList from "../components/PlanetList";
import DemoComponent from "../components/DemoComponent";
import FrenchFoodLayout from "../components/layouts/FrenchFoodLayout";

export const createAppRouter = (/*queryClient: QueryClient*/) => {
  return createBrowserRouter([
    {
      path: "/",
      element: <PlanetList></PlanetList>,
    },
    {
      path: "/demo",
      element: <DemoComponent></DemoComponent>,
    },
    {
      path: "/french-foods",
      element: <FrenchFoodLayout></FrenchFoodLayout>,
      children: [
        {
          path: "",
          lazy: async () => {
            const { FrenchFood } = await import(
              "../app/(auth)/french-food/index"
            );
            return { Component: FrenchFood };
          },
        },
        {
          path: "create",
          lazy: async () => {
            const { CreateFrenchFood } = await import(
              "../app/(auth)/french-food/create"
            );
            return { Component: CreateFrenchFood };
          },
        },
        {
          path: "edit/:id",
          lazy: async () => {
            const { FrenchFoodEdit } = await import(
              "../app/(auth)/french-food/edit.tsx"
            );
            return { Component: FrenchFoodEdit };
          },
        },
      ],
    },
    /*  {
      path: "/create_french_food",
      element: <FrenchFoodForm></FrenchFoodForm>,
    },
    {
      path: "/frenchfoods",
      element: <FrenchFood></FrenchFood>,
    },
    {
      path: "/edit_french_food/:id",
        loader: async ({ params }) => {
            if (!params.id) redirect("/frenchfoods");
            const results = await getFrenchFoods();
            console.log(results);
            const frenchFood = results.find((f) => f._id === params.id);
      
            if (!frenchFood) redirect("/frenchfoods");
            useFrenchFoodStore.setState({ frenchFood: results });
            return true;
          },
       loader: async ({ params }) => {
        if (!params.id) redirect("/frenchfoods");
        await queryClient.prefetchQuery({
          queryKey: ["frenchfood"],
          queryFn: getFrenchFoods,
        });
        return true;
      },
      element: (
        <Suspense fallback={<Loading></Loading>}>
          <FrenchFoodFormEdit></FrenchFoodFormEdit>
        </Suspense>
      ),
    },*/
  ]);
};

export const AppRouter = () => {
  //const queryClient = useQueryClient();

  const router = createAppRouter();

  return <RouterProvider router={router} />;
};

export default AppRouter;
