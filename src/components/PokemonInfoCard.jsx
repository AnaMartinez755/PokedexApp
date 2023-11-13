import React from "react";
import "../styles/pokeInfo.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PokedexData from "./PokedexData";
import { useState } from "react";
import { useContext } from "react";
import { PokemonsContext } from "./context/PokemonsContex";
import useFetchSpecies from "../hooks/useFetchSpecies";
const PokemonInfoCard = () => {
  const { pokemons, setPokemons } = useContext(PokemonsContext);
  const { id } = useParams();
  const { species } = useFetchSpecies(id);
  console.log(species);
  const [InfoCard, setInfoCard] = useState(<PokedexData specie={species.genera && species.genera[7].genus ? species.genera[7].genus:'none'}></PokedexData>);
  const handleOnClick = () => {
    setInfoCard(<PokedexData specie={species.genera[7].genus}></PokedexData>);
  };
  return (
    <div className="main-container">
      <div className="info-poke-container">
        <div className="first-container">
          <h3> </h3>
          <h2>#{id}</h2>
          <h1>{pokemons[id - 1].name}</h1>
          <p>
            <b>
              {species.generation && species.generation.name
                ? species.generation.name
                : "Nombre no disponible"}
            </b>
          </p>
        </div>
        <div className="second-container">
          <div className="nav-inter-container">
            <Link onClick={handleOnClick}>
              {" "}
              <b>Pokedex Data</b>
            </Link>
            <Link onClick={handleOnClick}>
              <b>Status</b>
            </Link>
            <Link onClick={handleOnClick}>
              <b>Evolution</b>
            </Link>
          </div>

          <div>{InfoCard}</div>
        </div>
      </div>
      <div className="img-poke-container">
        <div className="img-container">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          ></img>
        </div>
        <div className="buttons-container">
          <button className="button1">Previous</button>
          <button className="button2">Next</button>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfoCard;
