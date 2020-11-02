import React from "react";
import PokemonCard from "./PokemonCard";
import "../index.css";
export function PokemonList(props) {
  const { pokemonList, setSelectedPokemon } = props;
  var results = pokemonList.results;
  if (results != null) {
    return results.map(({ pokemon }, index) => {
      return (
        <React.Fragment key={results[index].name}>
          <PokemonCard pokemon={results[index]} setSelectedPokemon={setSelectedPokemon}/>
        </React.Fragment>
      );
    });
  }
}
