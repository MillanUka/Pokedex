import React, { useState } from "react";
import { POKE_API, getData } from "../Constants";
import Types from "./Types";
import "./PokemonDetails.css";
import { Link } from "react-router-dom";
import Stats from "./Stats";
export default function PokemonDetails(props) {
  const { pokemon } = props;
  const [pokemonData, setPokemonData] = useState(null);
  console.log(pokemon);
  return (
    <div className={"content"}>
      <Link to={"/"}>
        <div>
        Back
        </div>
      </Link>
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
          Weight: {pokemon.weight / 10}kg
          <br />
        </div>
        <div className={"stats"}>
        <Stats stats={pokemon.stats}/>
        </div>
      </div>
    </div>
  );
}
