import React, { useContext } from "react";
import "../styles/filterBar.css";
import { PokemonsContext } from "./context/PokemonsContex";
const FilterBar = () => {
  const { handleCheckBox, active } = useContext(PokemonsContext);
  console.log(active);
  return (
    <div className={`filter-bar-main-component ${active ? "active" : ""}`}>
      <div className="filter-bar-type-container">
        <b>Type</b>
        <div className="type-container">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="grass"
            id="grass"
          />
          <label htmlFor="grass">Grass</label>
        </div>

        <div className="type-container">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="fire"
            id="fire"
          />
          <label htmlFor="fire">Fire</label>
        </div>

        <div className="type-container">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="bug"
            id="bug"
          />
          <label htmlFor="bug">Bug</label>
        </div>

        <div className="type-container">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="fairy"
            id="fairy"
          />
          <label htmlFor="fairy">Fairy</label>
        </div>

        <div className="type-container">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="dragon"
            id="dragon"
          />
          <label htmlFor="dragon">Dragon</label>
        </div>

        <div className="type-container">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="shadow"
            id="shadow"
          />
          <label htmlFor="shadow">Shadow</label>
        </div>

        <div className="type-container">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="ground"
            id="ground"
          />
          <label htmlFor="ground">Ground</label>
        </div>

        <div className="type-container">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="normal"
            id="normal"
          />
          <label htmlFor="normal">Normal</label>
        </div>

        <div className="type-container">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="psychic"
            id="psychic"
          />
          <label htmlFor="psychic">Psychic</label>
        </div>

        <div className="type-container">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="steel"
            id="steel"
          />
          <label htmlFor="steel">Steel</label>
        </div>

        <div className="type-container">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="dark"
            id="dark"
          />
          <label htmlFor="dark">Dark</label>
        </div>

        <div className="type-container">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="electric"
            id="electric"
          />
          <label htmlFor="electric">Electric</label>
        </div>

        <div className="type-container">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="fighting"
            id="fighting"
          />
          <label htmlFor="fighting">Fighting</label>
        </div>
        <div className="type-container">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="ice"
            id="ice"
          />
          <label htmlFor="ice">Ice</label>
        </div>

        <div className="type-container">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="poison"
            id="poison"
          />
          <label htmlFor="poison">Poison</label>
        </div>

        <div className="type-container">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="rock"
            id="rock"
          />
          <label htmlFor="rock">Rock</label>
        </div>

        <div className="type-container">
          <input
            type="checkbox"
            onChange={handleCheckBox}
            name="water"
            id="water"
          />
          <label htmlFor="water">Water</label>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
