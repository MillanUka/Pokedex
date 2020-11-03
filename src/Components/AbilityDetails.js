import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AbilityDetails.css";
import { getData } from "../Constants";
export default function Abilities(props) {
  const { ability } = props;
  const [abilityData, setAbilityData] = useState(null);
  useEffect(() => {
    getData(ability.url, setAbilityData);
    console.log(abilityData);
  }, []);
  return (
    <div className={"content"}>
      <Link to={"/"}>
        <div>Back</div>
      </Link>
      <div className={"abilityDetails"}>
        <h1>{ability.name}</h1>
        {!abilityData ? (
          <div>Loading...</div>
        ) : (
          <div>
            {abilityData.flavor_text_entries[0].flavor_text}
            {abilityData.pokemon.map(({ pokemon }, index) => {
              return (
                <React.Fragment key={abilityData.pokemon[index].name}>
                  <h4>{abilityData.pokemon[index].name}</h4>
                </React.Fragment>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
