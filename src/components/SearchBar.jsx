import { useState } from "react";
const SearchBar = () => {
  const [numPoke, setNumPoke] = useState("");
  const handleInputChange = (event) => {
    setNumPoke(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(numPoke);
  };
  return (
    <div className="search-bar-container">
      <form className="input-container" onSubmit={handleOnSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder=" What Pokemon are your looking for?"
          onChange={handleInputChange}
        />
        <p>Search for Pokemon by name or using the National Pokedex number.</p>
      </form>
    </div>
  );
};

export default SearchBar;
