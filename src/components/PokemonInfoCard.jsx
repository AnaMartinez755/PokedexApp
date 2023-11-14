import React from "react";
import "../styles/pokeInfo.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PokedexData from "./PokedexData";
import { useState } from "react";
import { useContext } from "react";
import { PokemonsContext } from "./context/PokemonsContex";
import { PokemonColorMap } from "../hooks/pokemonColorMap";
import useFetchSpecies from "../hooks/useFetchSpecies";
import Status from "./Status";
const PokemonInfoCard = () => {
  const { pokemonColors } = PokemonColorMap();
  const { id } = useParams();
  const { useFetchUsers, useFetchSpecies } = useContext(PokemonsContext);
  const { pokemonList, isLoading } = useFetchUsers();
  const { species, isLoagindSpecies } = useFetchSpecies(id);
  const [InfoCard, setInfoCard] = useState(<PokedexData></PokedexData>);
  const handleOnClickPokedexData = () => {
    setInfoCard(<PokedexData></PokedexData>);
  };
  const handleOnClickStatus = () => {
    setInfoCard(
      isLoading ? (
        <p>Species not loaded</p>
      ) : (
        <Status pokemonList={pokemonList}></Status>
      )
    );
  };
  return (
    <>
      {isLoagindSpecies ? (
        <p>is loading...</p>
      ) : isLoading ? (
        <p>is Loaging...</p>
      ) : (
        <div className="main-container">
          <div className="info-poke-container">
            <div className="first-container">
              <h3> </h3>
              <h2>#{id}</h2>
              <h1>{species.name}</h1>
              <p style={{ color: pokemonColors[id] }}>
                <b>{species.generation.name}</b>
              </p>
            </div>
            <div className="second-container">
              <div className="nav-inter-container">
                <Link onClick={handleOnClickPokedexData}>
                  <b>Pokedex Data</b>
                </Link>
                <Link onClick={handleOnClickStatus}>
                  <b>Status</b>
                </Link>
              </div>

              <div>{InfoCard}</div>
            </div>
          </div>
          <div
            style={{ backgroundColor: pokemonColors[id] }}
            className="img-poke-container"
          >
            <div className="img-container">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
              ></img>
            </div>
            <div className="buttons-container">
              <Link to={`/card/${String(Number(id) - 1)}`}>
                <button className="button1">Previous</button>
              </Link>
              <Link to={`/card/${String(Number(id) + 1)}`}>
                <button className="button2">Next</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonInfoCard;
