import { useState } from "react";
import { useEffect } from "react";
const useFetchSpecies = (endPoint) => {
  console.log(endPoint);
  const [species, setSpecies] = useState([]);
  const fetchSpecies = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${endPoint}`
      );
      const data = await response.json();
      setSpecies(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchSpecies();
  }, [endPoint]);
  return { species };
};

export default useFetchSpecies;
