import React from "react";
import PokemonCard from "./PokemonCard";
export function PokemonList(props) {
  const { pokemonList } = props;
  var results = pokemonList.results;
  if (results != null) {
    return results.map(({ pokemon }, index) => {
      return (
        <React.Fragment key={results[index].name}>
          <PokemonCard pokemon={results[index]} />
        </React.Fragment>
      );
    });
  }
}
