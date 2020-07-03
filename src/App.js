import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import { POKE_API, getData } from './Constants.ts'
import { PokemonList } from "./Components/PokemonList";
const App = function App() {
  var url = POKE_API + "pokemon";
  const [pokemonList, setPokemonList] = useState(null);
  useEffect(() => {
    getData(POKE_API + "pokemon", setPokemonList);
  }, [])

  return (
    <div className="App">
      {!pokemonList ? <div>Loading...'</div> :
        <React.Fragment>
          <div className="grid-container">
            <React.Fragment><PokemonList pokemonList={pokemonList} />
            </React.Fragment>
          </div>
          <button className="prevButton" disabled={pokemonList.previous == null} onClick={() => getData(pokemonList.previous, setPokemonList)}>Prev</button>
          <button className="nextButton" disabled={pokemonList.next == null} onClick={() => getData(pokemonList.next, setPokemonList)}>Next</button>
        </React.Fragment>
      }
    </div>
  );
}
export default App;
