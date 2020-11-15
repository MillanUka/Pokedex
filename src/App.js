import React, { useState, useEffect } from "react";
import { POKE_API, getData } from "./Utils";
import { PokemonList } from "./Components/PokemonList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import PokemonDetails from "./Components/PokemonDetails";
import AbilitiesDetails from "./Components/AbilityDetails";
const App = function App() {
  const [pokemonList, setPokemonList] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [selectedAbility, setSelectedAbility] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    getData(POKE_API + "pokemon/?limit=40", setPokemonList);
  }, []);
  return (
    <div className="App">
      <input
        className={"searchInput"}
        type="text"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />{" "}
      <button className={"searchButton"} onClick={() => {
        console.log(searchQuery);
      }}>Search</button>
      <Router>
        <Switch>
          <Route path="/Pokedex/details">
            <PokemonDetails pokemon={selectedPokemon} />
          </Route>
          <Route path="/Pokedex/ability">
            <div>
              <AbilitiesDetails ability={selectedAbility} />
            </div>
          </Route>
          <Route path="/Pokedex">
            {!pokemonList ? (
              <div>Loading...</div>
            ) : (
              <React.Fragment>
                <div className="grid-container">
                  <React.Fragment>
                    <PokemonList
                      pokemonList={pokemonList}
                      setSelectedPokemon={setSelectedPokemon}
                      setSelectedAbility={setSelectedAbility}
                    />
                  </React.Fragment>
                  <br />
                </div>
                <button
                  className="cycleButton"
                  disabled={pokemonList.previous == null}
                  onClick={() => getData(pokemonList.previous, setPokemonList)}
                >
                  Prev
                </button>
                <button
                  className="cycleButton"
                  disabled={pokemonList.next == null}
                  onClick={() => getData(pokemonList.next, setPokemonList)}
                >
                  Next
                </button>
              </React.Fragment>
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
