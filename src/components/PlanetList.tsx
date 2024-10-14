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
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch("https://swapi.dev/api/planets?page=" + page)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPlanets(data.results);
        setTotal(data.count);
      });
  }, [page]);

  return (
    <div>
      <h1>Planet List</h1>
      {planets.map((planet) => (
        <p key={planet.url}>{planet.name}</p>
      ))}
      <button
        disabled={page === 1}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        précédent
      </button>
      <button
        disabled={page * 10 >= total}
        onClick={() => {
          setPage(page + 1);
        }}
      >
        suivant
      </button>
    </div>
  );
};

export default PlanetList;
