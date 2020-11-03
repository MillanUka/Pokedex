import React from "react";
import { Link } from "react-router-dom";
import "./AbilityDetails.css";
export default function Abilities(props) {
  const { ability } = props;
  console.log(ability);
  return (
    <div className={"content"}>
      <Link to={"/"}>
        <div>Back</div>
      </Link>
      <div className={"abilityDetails"}>
        <h1>{ability.name}</h1>
      </div>
    </div>
  );
}
