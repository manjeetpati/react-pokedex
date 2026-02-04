import React from "react"
import PokemonCard from "./pokemon-card";
import './pokemon.scss';


type Pokemon = { name: string; url: string };

export const PokemonList: React.FC<{ pokemons: Pokemon[]}> = ({ pokemons}) => {
    console.log('Rendering PokemonList with pokemons:', pokemons);
    return (
        <>
        <div className="pokemon-list-container">
            {pokemons.map((pokemon) => (
                <div className="pokemon-lists" key={pokemon.name}><PokemonCard url={pokemon.url} name={pokemon.name} /></div>
            ))}
        </div>
        </>
    )
}   