import { getData } from "../Constants";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PokemonCard.css";
import Types from "./Types";
import Abilities from "./Abilities";
export default function PokemonCard(props) {
  const { setSelectedPokemon, setSelectedAbility } = props;
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    getData(props.pokemon.url, setPokemon);
  }, []);
  return (
    <React.Fragment>
      {!pokemon ? (
        <div>Loading...</div>
      ) : (
        <div className="card">
          <Link
            to={"Pokedex/details/" + pokemon.id}
            onClick={() => {
              setSelectedPokemon(pokemon);
            }}
          >
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
          </Link>
          <Types types={pokemon.types} />
          <Abilities abilities={pokemon.abilities} setSelectedAbility={setSelectedAbility}/>
          <div style={{ fontSize: "22px" }}>
            Height: {pokemon.height / 10}m
            <br />
            Weight: {pokemon.weight / 10}kg
          </div>
          
        </div>
      )}
    </React.Fragment>
  );
}
