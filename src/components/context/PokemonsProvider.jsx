import useFetchUsers from "../../hooks/useFetchUsers";
import { PokemonsContext } from "./PokemonsContex";
import { useState } from "react";
import useFetchSpecies from "../../hooks/useFetchSpecies";
import { useParams } from "react-router-dom";
const PokemonsProvider = ({ children }) => {
  //get the pokemon id from PARAMS
  const { pokemonList, isLoading } = useFetchUsers();
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [active, setActive] = useState(false);
  const handleCheckBox = (e) => {
    if (e.target.checked) {
      const filterResults = pokemonList.filter((pokemon) =>
        pokemon.types.map((type) => type.type.name).includes(e.target.name)
      );
      setFilteredPokemons([...filteredPokemons, ...filterResults]);
    } else {
      const filteredResults = filteredPokemons.filter(
        (pokemon) =>
          !pokemon.types.map((type) => type.type.name).includes(e.target.name)
      );
      setFilteredPokemons([...filteredResults]);
    }
  };
  //Use PokemonFetch in Provider

  return (
    <PokemonsContext.Provider
      value={{
        useFetchUsers,
        useFetchSpecies,
        handleCheckBox,
        filteredPokemons,
        active,
        setActive
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};

export default PokemonsProvider;
