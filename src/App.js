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
  useEffect(() => {
    getData(POKE_API + "pokemon", setPokemonList);
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Pokedex/details">
            <PokemonDetails pokemon={selectedPokemon} />
          </Route>
          <Route path="/Pokedex/ability">
            <div>
              <AbilitiesDetails ability={selectedAbility}/>
            </div>
          </Route>
          <Route path="/Pokedex">
            {!pokemonList ? (
              <div>Loading...</div>
            ) : (
              <React.Fragment>
                <div className="grid-container">
                  <React.Fragment>
                    <PokemonList pokemonList={pokemonList} setSelectedPokemon={setSelectedPokemon} setSelectedAbility={setSelectedAbility}/>
                  </React.Fragment>
                  <br />
                </div>
                <button
                  className="prevButton"
                  disabled={pokemonList.previous == null}
                  onClick={() => getData(pokemonList.previous, setPokemonList)}
                >
                  Prev
                </button>
                <button
                  className="nextButton"
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
