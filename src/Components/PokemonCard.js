import { getData } from "../Constants";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PokemonCard.css";
import Types from "./Types";
export default function PokemonCard(props) {
  const {setSelectedPokemon } = props;
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    getData(props.pokemon.url, setPokemon);
  }, []);
  return (
    <React.Fragment>
      {!pokemon ? (
        <div>Loading...'</div>
      ) : (
        <Link to={"/details/" + pokemon.id} onClick={() => {
          setSelectedPokemon(pokemon);
        }}>
          {" "}
          <div className="card">
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
                alt={"An image of " + pokemon.name} width="100%" height="100%"
              />{" "}
            </div>
            <Types types={pokemon.types} />
            <div>
              {pokemon.abilities.map(({ ability }, index) => {
                var abilityName =
                  ability.name[0].toUpperCase() + ability.name.substring(1);
                return (
                  <React.Fragment key={index}>
                    <div className="type">{abilityName.name}</div>
                  </React.Fragment>
                );
              })}
            </div>
            <div style={{ fontSize: "22px" }}>
              Height: {pokemon.height / 10}m
              <br />
              Weight: {pokemon.weight / 10}kg
            </div>
          </div>
        </Link>
      )}
    </React.Fragment>
  );
}
