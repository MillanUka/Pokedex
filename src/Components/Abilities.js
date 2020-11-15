import React from "react";
import { Link } from "react-router-dom";
import { removePunctuation } from "../Utils";
export default function Abilities(props) {
  const { abilities, setSelectedAbility } = props;
  return (
    <div>
      {abilities.map(({ ability }, index) => {
        
        var abilityName = removePunctuation(ability.name[0].toUpperCase() + ability.name.substring(1), " ");
        return (
          <React.Fragment key={index}>
            <Link to={"/Pokedex/ability/" + ability.name} onClick={() => {
                setSelectedAbility(ability);
            }}>
              <div className="ability">{abilityName}</div>
            </Link>
          </React.Fragment>
        );
      })}
    </div>
  );
}
