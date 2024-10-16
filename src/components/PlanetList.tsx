import { useQuery } from "@tanstack/react-query";
import { Button } from "primereact/button";
import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

type PlanetResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
};

const getPlanets = async (page: number) => {
  const response = await fetch("https://swapi.dev/api/planets?page=" + page);
  return response.json();
};

const PlanetList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery<PlanetResponse>({
    queryKey: ["planets", page],
    queryFn: () => getPlanets(page),
  });

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      console.log("scroll");
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        height: "500vh",
      }}
    >
      <Link to="/demo">Demo</Link>
      <Link to="/french-foods">french-foods</Link>

      <button
        onClick={() => {
          //window.location.href = "/demo";
          navigate("/demo");
        }}
      >
        redirect
      </button>
      <h1>Planet List</h1>
      {isLoading && <p>Loading...</p>}
      {data?.results.map((planet) => (
        <Fragment key={planet.url}>
          <p>{planet.name}</p>
          <p>{planet.population}</p>
        </Fragment>
      ))}
      <Button
        onClick={() => {
          setPage(page - 1);
        }}
      >
        previous
      </Button>
      <Button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        next
      </Button>
    </div>
  );
};

export default PlanetList;
