import React from "react";
import PokemonCard from "./PokemonCard";
import "../index.css";
export function PokemonList(props) {
  const { pokemonList, setSelectedPokemon, setSelectedAbility } = props;
  var results = pokemonList.results;
  console.log(pokemonList)
  if (results != null) {
    return results.map(({ pokemon }, index) => {
      return (
        <React.Fragment key={results[index].name}>
          <PokemonCard pokemon={results[index]} setSelectedPokemon={setSelectedPokemon} setSelectedAbility={setSelectedAbility}/>
        </React.Fragment>
      );
    });
  }
}
