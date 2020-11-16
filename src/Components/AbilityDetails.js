import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./AbilityDetails.css";
import { getData, removePunctuation } from "../Utils";
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
    var abilityName;
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
                {
                  (abilityName = removePunctuation(
                    abilityData.name[0].toUpperCase() +
                      abilityData.name.substring(1),
                    " "
                  ))
                }
              </h1>
              {abilityData.flavor_text_entries[0].flavor_text}
              <div className={"pokemonList"}>
                <h3>Pokemon with {abilityName}</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Number</th>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {abilityData.pokemon.map(({ pokemon }, index) => {
                      return (
                        <React.Fragment key={abilityData.pokemon[index].name}>
                          <tr>
                            <td>{index + 1}</td>
                            <td>
                              {removePunctuation(
                                abilityData.pokemon[
                                  index
                                ].pokemon.name[0].toUpperCase() +
                                  abilityData.pokemon[
                                    index
                                  ].pokemon.name.substring(1),
                                " "
                              )}
                            </td>
                          </tr>
                        </React.Fragment>
                      );
                    })}
                  </tbody>
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
