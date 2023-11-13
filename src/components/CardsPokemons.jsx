import useFetchUsers from "../hooks/useFetchUsers";
import { PokemonColorMap } from "../hooks/pokemonColorMap";
import { Link } from "react-router-dom";
const CardsPokemons = () => {
  const { pokemons } = useFetchUsers("endpoint");
  const { pokemonColors } = PokemonColorMap();

  return (
      <div className="all-pokemons">
        {pokemons.map((pokemon, index) => (
          <Link
            to={`/card/${pokemon.id}`}
            style={{ backgroundColor: pokemonColors[index+1] }}
            className="pokemon-card"
            key={pokemon.id}
          >
            <div className="imagen-pokemon">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                  index + 1
                }.png`}
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
                {(pokemon.types).map((pp,indexp) => (
                  <p key={pokemon.id + pokemon.name+indexp} className={pp.type.name}>{pp.type.name}</p>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
  );
};

export default CardsPokemons;
