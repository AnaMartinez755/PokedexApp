import { PokemonsContext } from "./PokemonsContex";
import { useState } from "react";

const PokemonsProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  return (
    <PokemonsContext.Provider value={{ pokemons, setPokemons }}>
      {children}
    </PokemonsContext.Provider>
  );
};

export default PokemonsProvider;
