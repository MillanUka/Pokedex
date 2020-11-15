import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./AbilityDetails.css";
import { getData } from "../Utils";
export default function Abilities(props) {
  const ability = useRef(props.ability);
  const [abilityData, setAbilityData] = useState(null);
  useEffect(() => {
    var data = ability;
    if (ability.current === null) {
      data = JSON.parse(localStorage.getItem("ability"));
      console.log(data);
    }
    getData(data.current.url, setAbilityData);
  }, []);
  if (abilityData === null) {
    return <div>Loading...</div>;
  } else {
    localStorage.setItem("ability", JSON.stringify(ability));
    return (
      <div className={"content"}>
        <Link to={"/Pokedex"}>
          <div>Back</div>
        </Link>
        <div className={"abilityDetails"}>
          {!abilityData ? (
            <div>Loading...</div>
          ) : (
            <div>
              <h1>
                {abilityData.name[0].toUpperCase() +
                  abilityData.name.substring(1)}
              </h1>
              {abilityData.flavor_text_entries[0].flavor_text}
              <div className={"pokemonList"}>
                <h3>Pokemon with {ability.name}</h3>
                <table>
                  <tr>
                    <th>Number</th>
                    <th>Name</th>
                  </tr>
                  {abilityData.pokemon.map(({ pokemon }, index) => {
                    return (
                      <React.Fragment key={abilityData.pokemon[index].name}>
                        <tr>
                          <td>{index + 1}</td>
                          <td>
                            {abilityData.pokemon[
                              index
                            ].pokemon.name[0].toUpperCase() +
                              abilityData.pokemon[index].pokemon.name.substring(
                                1
                              )}
                          </td>
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
}
