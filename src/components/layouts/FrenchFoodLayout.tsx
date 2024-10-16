import { Outlet } from "react-router-dom";

const FrenchFoodLayout = () => {
  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100px",
          backgroundColor: "#f4f4f4",
          width: "100%",
        }}
      ></header>
      <Outlet />
      <footer
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100px",
          backgroundColor: "#f4f4f4",
          width: "100%",
        }}
      ></footer>
    </div>
  );
};

export default FrenchFoodLayout;
