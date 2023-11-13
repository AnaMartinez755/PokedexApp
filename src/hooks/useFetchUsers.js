import { useState } from "react";
import { useContext } from "react";
import { PokemonsContext } from "../components/context/PokemonsContex";
import { useEffect } from "react";
const useFetchUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const pokemonInfo = [];
  const fetchUsers = async () => {
    for (let i = 0; i < 60; i++) {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${i + 1}`
        );
        const data = await response.json();
        pokemonInfo.push(data);
      } catch (error) {
        console.log(error);
      }
    }
    setPokemonList(pokemonInfo);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return { pokemonList, isLoading };
};

export default useFetchUsers;
