import React from "react";
import Types from "./Types";
import "./PokemonDetails.css";
export default function PokemonDetails(props) {
  const { pokemon } = props;
  console.log(pokemon);
  return (
    <div className={"content"}>
      <div className={"pokemonDetails"}>
        <h1>
          {" "}
          #
          {pokemon.id +
            " " +
            pokemon.name[0].toUpperCase() +
            pokemon.name.substring(1)}
        </h1>
        <div className="portraitImage">
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={"An image of " + pokemon.name}
            width="100%"
            height="100%"
          />{" "}
        </div>
        <br />
        <Types types={pokemon.types} />
        <br />
        <div className={"details"}>
          Height: {pokemon.height / 10}m<br />
          Weight: {pokemon.weight / 10}kg<br />
        </div>
      </div>
    </div>
  );
}
