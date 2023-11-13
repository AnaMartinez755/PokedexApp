import { useState } from "react";
import { useEffect } from "react";
const useFetchSpecies = (endPoint) => {
  const [isLoagindSpecies, setIsLoagindSpecies] = useState(true);
  const [species, setSpecies] = useState([]);
  const fetchSpecies = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${endPoint}`
      );
      const data = await response.json();
      setSpecies(data);
      setIsLoagindSpecies(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchSpecies();
  }, [endPoint]);
  return { species,isLoagindSpecies };
};

export default useFetchSpecies;
