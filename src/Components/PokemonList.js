import React from 'react';
import PokemonCard from './PokemonCard';
export function PokemonList(props) {
    var pokemonList = props.pokemonList.results;
    if (pokemonList != null) {
        return pokemonList.map(({ pokemon }, index) => {
            return (
                <React.Fragment key={pokemonList[index].name}>
                    <PokemonCard pokemon={pokemonList[index]} />
                </React.Fragment>
            );
        });
    }
}
