import { PokemonColorMap } from "../hooks/pokemonColorMap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PokemonsContext } from "./context/PokemonsContex";
import FilterBar from "./FilterBar";
const CardsPokemons = () => {
  const { useFetchUsers, filteredPokemons, active, setActive } =
    useContext(PokemonsContext);
  const { pokemonList, isLoading } = useFetchUsers();
  const { pokemonColors } = PokemonColorMap();
  const handleFilterClick = () => {
    setActive(!active);
  };
  return (
    <div onClick={()=>setActive(!active)}>
      {isLoading ? (
        <p>is loading...</p>
      ) : (
        <div className="all-pokemons-filter">
          <Link onClick={handleFilterClick} className="filter-img-container">
             Filter by type
          </Link>

          <div className="all-pokemons">
            {filteredPokemons.length
              ? filteredPokemons.map((pokemon) => (
                  <Link
                    to={`/card/${pokemon.id}`}
                    style={{ backgroundColor: pokemonColors[pokemon.id] }}
                    className="pokemon-card"
                    key={pokemon.id}
                  >
                    <div className="imagen-pokemon">
                      <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                      ></img>
                    </div>
                    <div className="letras-pokemon">
                      <div className="nombre-pokemon">
                        <p>
                          <b>#{pokemon.id}</b>
                        </p>
                        <h3>{pokemon.name}</h3>
                      </div>
                      <div className="poderes-pokemon">
                        {pokemon.types.map((pp, indexp) => (
                          <p
                            key={pokemon.id + pokemon.name + indexp}
                            className={pp.type.name}
                          >
                            {pp.type.name}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))
              : pokemonList.map((pokemon) => (
                  <Link
                    to={`/card/${pokemon.id}`}
                    style={{ backgroundColor: pokemonColors[pokemon.id] }}
                    className="pokemon-card"
                    key={pokemon.id}
                  >
                    <div className="imagen-pokemon">
                      <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                      ></img>
                    </div>
                    <div className="letras-pokemon">
                      <div className="nombre-pokemon">
                        <p>
                          <b>#{pokemon.id}</b>
                        </p>
                        <h3>{pokemon.name}</h3>
                      </div>
                      <div className="poderes-pokemon">
                        {pokemon.types.map((pp, indexp) => (
                          <p
                            key={pokemon.id + pokemon.name + indexp}
                            className={pp.type.name}
                          >
                            {pp.type.name}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
          </div>
        </div>
      )}
      <FilterBar></FilterBar>
    </div>
  );
};

export default CardsPokemons;
