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
  const [pokemonArr, setPokemonArr] = useState([]);
  const [index, setIndex] = useState(0);
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
          var tempPokemonArr = searchPokemon(searchQuery);
          setPokemonArr(tempPokemonArr);
          if (tempPokemonArr[0] !== undefined) {
            var pokemonData = { results: tempPokemonArr[0], previous : null, next : tempPokemonArr[1]};
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
                      setIndex(index-1);
                      var newPokemonList = { results: pokemonList.previous, previous : pokemonArr[index-2], next : pokemonList.results}
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
                    if(pokemonList.next.length) {
                      setIndex(index+1);
                      var newPokemonList = { results: pokemonList.next, previous : pokemonList.results, next : pokemonArr[index+2]}
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
