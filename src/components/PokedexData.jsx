import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PokemonsContext } from "./context/PokemonsContex";
const PokedexData = ({specie}) => {
  console.log(specie)
  const { id } = useParams();
  const { pokemons } = useContext(PokemonsContext);
  return (
    <div className="pokedex-data-container">
      <div className="about-this-pokemon-container">
        <p>
          <b>About this Pokemon:</b>
        </p>
        <p>
          Bulsaur is isodsopsdm;
          osdmvosdvmoksdmvodsmvks
          dlvmsk;dmvsdmvsk;
          dlvmaadvdsvsdvsdvsdvsdvs
          dvsdvsdvsdv
        </p>
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
          {specie}
          <br />
          {pokemons[id - 1].height} (dm)
          <br />
          {pokemons[id - 1].weight} (hg)
          <br />
          {pokemons[id - 1].abilities.map((ab) => ab.ability.name ).join(',')}
          <br />
        </div>
      </div>
      <div className="weaknesses-container"></div>
    </div>
  );
};

export default PokedexData;
