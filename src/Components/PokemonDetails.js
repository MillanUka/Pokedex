import React, { useRef } from "react";
import Types from "./Types";
import "./PokemonDetails.css";
import { Link } from "react-router-dom";
import Stats from "./Stats";
import { removePunctuation } from "../Utils";
export default function PokemonDetails(props) {
  const pokemonData = useRef(props.pokemon);
  var pokemon = pokemonData.current;
  if (pokemon === null) {
    pokemon = JSON.parse(localStorage.getItem("pokemon"));
  } else {
    localStorage.setItem("pokemon", JSON.stringify(pokemon));
  }
  return (
    <div className={"content"}>
      <Link to={"/Pokedex"}>
        <div className={"back"}>Back</div>
      </Link>
      <div className={"pokemonDetails"}>
        <h1>
          {" "}
          #
          {pokemon.id +
            " " +
            removePunctuation(
              pokemon.name[0].toUpperCase() + pokemon.name.substring(1),
              " "
            )}
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
          <Stats stats={pokemon.stats} />
        </div>
      </div>
    </div>
  );
}
