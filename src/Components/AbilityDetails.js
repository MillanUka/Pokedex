import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AbilityDetails.css";
import { getData } from "../Constants";
export default function Abilities(props) {
  const { ability } = props;
  const [abilityData, setAbilityData] = useState(null);
  useEffect(() => {
    getData(ability.url, setAbilityData);
  }, []);
  return (
    <div className={"content"}>
      <Link to={"/Pokedex"}>
        <div>Back</div>
      </Link>
      <div className={"abilityDetails"}>
        <h1>{ability.name[0].toUpperCase() + ability.name.substring(1)}</h1>
        {!abilityData ? (
          <div>Loading...</div>
        ) : (
          <div>
            {abilityData.flavor_text_entries[0].flavor_text}
            <div className={"pokemonList"}>
              <h3>Pokemon with {ability.name}</h3>
              <table>
                <tr>
                  <th>Number</th>
                  <th>Name</th>
                </tr>
                {abilityData.pokemon.map(({ pokemon }, index) => {
                  console.log(abilityData.pokemon[index]);
                  return (
                    <React.Fragment key={abilityData.pokemon[index].name}>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{abilityData.pokemon[index].pokemon.name[0].toUpperCase() + abilityData.pokemon[index].pokemon.name.substring(1)}</td>
                      </tr>
                    </React.Fragment>
                  );
                })}
              </table>
              <br />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
