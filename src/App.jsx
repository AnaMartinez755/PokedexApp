import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import CardsPokemons from "./components/CardsPokemons";
import SearchBar from "./components/SearchBar";
import useFetchUsers from "./hooks/useFetchUsers";
import PokemonInfoCard from "./components/PokemonInfoCard";
import PokemonsProvider from "./components/context/PokemonsProvider";

const App = () => {
  return (
      <PokemonsProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar></NavBar>
                <SearchBar></SearchBar>
                <CardsPokemons></CardsPokemons>
              </>
            }
          ></Route>
          <Route
            path="/card/:id"
            element={
              <div className="pokemon-container">
                <NavBar></NavBar>
                <PokemonInfoCard></PokemonInfoCard>
              </div>
            }
          ></Route>
        </Routes>
      </PokemonsProvider>
  );
};

export default App;
