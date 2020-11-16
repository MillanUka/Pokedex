import React, { useState, useEffect } from "react";
import {
  POKE_API,
  getData,
  searchPokemon
} from "./Utils";
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
    getData(POKE_API + "pokemon/?limit=20", setPokemonList);
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
      <button
        className={"searchButton"}
        onClick={async () => {
          var pokemonArr = searchPokemon(searchQuery);
          if (pokemonArr[0] !== undefined) {
            var pokemonData = { results: pokemonArr[0], previous : null, next : pokemonArr[1]};
            console.log(pokemonData);
            setPokemonList(pokemonData);
          } else {
            alert("No results!");
          }
        }}
      >
        Search
      </button>
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
                  disabled={pokemonList.previous === null || pokemonList.previous === undefined}
                  onClick={() => {
                    if(pokemonList.previous.length) {
                      var newPokemonList = { results: pokemonList.previous, previous : null, next : pokemonList.results}
                      setPokemonList(newPokemonList); 
                    } else {
                    getData(pokemonList.previous, setPokemonList);
                    }
                  }}
                >
                  Prev
                </button>
                <button
                  className="cycleButton"
                  disabled={pokemonList.next === null  || pokemonList.next === undefined}
                  onClick={() => {
                    console.log(pokemonList);
                    if(pokemonList.next.length) {
                      var newPokemonList = { results: pokemonList.next, previous : pokemonList.results, next : null}
                      setPokemonList(newPokemonList); 
                    } else {
                    getData(pokemonList.next, setPokemonList);
                    }
                  }}
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
