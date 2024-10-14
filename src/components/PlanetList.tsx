import { useEffect, useState } from "react";

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

const PlanetList = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/planets")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPlanets(data.results);
      });
  }, []);

  return (
    <div>
      <h1>Planet List</h1>
      {planets.map((planet) => (
        <p key={planet.url}>{planet.name}</p>
      ))}
      <button>précédent</button>
      <button>suivant</button>
    </div>
  );
};

export default PlanetList;
