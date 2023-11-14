import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PokemonsContext } from "./context/PokemonsContex";
import { PokemonColorMap } from "../hooks/pokemonColorMap";
const PokedexData = () => {
  const { useFetchUsers, useFetchSpecies } = useContext(PokemonsContext);
  const { id } = useParams();
  const { pokemonList, isLoading } = useFetchUsers();
  const { species, isLoagindSpecies } = useFetchSpecies(id);
  const { pokemonColors } = PokemonColorMap();
  return (
    <>
      {isLoading ? (
        <p>is loading pokemon...</p>
      ) : isLoagindSpecies ? (
        <p>is loading species..</p>
      ) : (
        <div className="pokedex-data-container">
          <div className="about-this-pokemon-container">
            <p style={{ color: pokemonColors[id] }}>
              <b>About this Pokemon:</b>
            </p>
            <p>{species.flavor_text_entries[8].flavor_text}</p>
          </div>
          <div className="about-data-container">
            <div className="about-data-container1">
              <b>
                Species:
                <br />
                Height:
                <br />
                Weight:
                <br />
                Abilties:
                <br />
              </b>
            </div>
            <div className="about-data-container2">
              {species.genera[7].genus}
              <br />
              {pokemonList[id].height} (dm)
              <br />
              {pokemonList[id].weight} (hg)
              <br />
              {pokemonList[id].abilities
                .map((ab) => ab.ability.name)
                .join(" , ")}
              <br />
            </div>
          </div>
          <div className="weaknesses-container"></div>
        </div>
      )}
    </>
  );
};

export default PokedexData;
