import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import { POKE_API, getData } from "./Constants";
import { PokemonList } from "./Components/PokemonList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import PokemonDetails from "./Components/PokemonDetails";
const App = function App() {
  var url = POKE_API + "pokemon";
  const [pokemonList, setPokemonList] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  useEffect(() => {
    getData(POKE_API + "pokemon", setPokemonList);
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/details">
            <PokemonDetails pokemon={selectedPokemon} />
          </Route>
          <Route path="/">
            {!pokemonList ? (
              <div>Loading...'</div>
            ) : (
              <React.Fragment>
                <div className="grid-container">
                  <React.Fragment>
                    <PokemonList pokemonList={pokemonList} setSelectedPokemon={setSelectedPokemon} />
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
