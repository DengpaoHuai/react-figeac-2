import { useEffect, useState } from "react";

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<null | T>(null);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch(
      `https://crudcrud.com/api/${import.meta.env.VITE_CRUDCRUDTOKEN}/` + url
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error: unknown) => {
        if (error instanceof Error) {
          setError(error.message);
        } else if (typeof error === "string") {
          setError(error);
        } else {
          setError("Une erreur est survenue");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [refresh]);

  return {
    data,
    refetch: () => setRefresh(!refresh),
    isLoading,
    error,
  };
};

export default useFetch;
