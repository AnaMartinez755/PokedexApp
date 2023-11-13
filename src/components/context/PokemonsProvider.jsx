import useFetchUsers from "../../hooks/useFetchUsers";
import { PokemonsContext } from "./PokemonsContex";
import { useState } from "react";
import useFetchSpecies from "../../hooks/useFetchSpecies";
import { useParams } from "react-router-dom";
const PokemonsProvider = ({ children }) => {
  //get the pokemon id from PARAMS

  //Use PokemonFetch in Provider
  const { pokemonList, isLoading } = useFetchUsers();

  return (
    <PokemonsContext.Provider value={{ pokemonList, isLoading, useFetchSpecies }}>
      {children}
    </PokemonsContext.Provider>
  );
};

export default PokemonsProvider;
