import { getData } from "../Constants.ts";
import React, { useState, useEffect } from "react";
export default function PokemonCard(props) {
    const [pokemon, setPokemon] = useState(null);
    useEffect(() => {
        getData(props.pokemon.url, setPokemon);
    }, [])
    return (
        <React.Fragment>
            {!pokemon ? <div>Loading...'</div> : <div className="card" >
                <h3> #{pokemon.id + " " + pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h3>
                <div className="portraitImage"><img src={pokemon.sprites.front_default} /> </div>
                <div>
                    {pokemon.types.map(({type}, index) => {
                        var typeName = type.name[0].toUpperCase() + type.name.substring(1);
                        return (
                            <React.Fragment key={index}>
                                <div className={typeName}>
                                    {typeName}
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
                <div>
                    {pokemon.abilities.map(({ability}, index) => {
                        var abilityName = ability.name[0].toUpperCase() + ability.name.substring(1);
                        return (
                            <React.Fragment key={index}>
                                <div className="type">
                                    {abilityName.name}
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
                <div>
                    Height: {pokemon.height}
                    <br />
                    Weight: {pokemon.weight}
                </div>
            </div>}

        </React.Fragment>);
}