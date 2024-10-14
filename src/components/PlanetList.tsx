import { useEffect, useState } from "react";
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

const PlanetList = () => {
  const [planetResponse, setPlanetResponse] = useState<PlanetResponse>({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getPlanets = async (url: string) => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setPlanetResponse(data);
    setLoading(false);
  };

  useEffect(() => {
    getPlanets("https://swapi.dev/api/planets/");
  }, []);

  return (
    <div>
      <a href="/demo">Demo</a>
      <Link to="/demo">Demo</Link>

      <button
        onClick={() => {
          //window.location.href = "/demo";
          navigate("/demo");
        }}
      >
        redirect
      </button>
      <h1>Planet List</h1>
      {loading && <p>Loading...</p>}
      {planetResponse.results.map((planet) => (
        <p key={planet.url}>{planet.name}</p>
      ))}
      <button
        disabled={!planetResponse.previous}
        onClick={() =>
          planetResponse.previous && getPlanets(planetResponse.previous)
        }
      >
        précédent
      </button>
      {Array.from({ length: Math.ceil(planetResponse.count / 10) }).map(
        (_, index) => (
          <button
            key={index}
            onClick={() =>
              getPlanets(`https://swapi.dev/api/planets/?page=${index + 1}`)
            }
          >
            {index + 1}
          </button>
        )
      )}
      <button
        disabled={!planetResponse.next}
        onClick={() => planetResponse.next && getPlanets(planetResponse.next)}
      >
        suivant
      </button>
    </div>
  );
};

export default PlanetList;
