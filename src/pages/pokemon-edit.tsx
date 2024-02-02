import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Loader from '../components/loader';
import PokemonForm from '../components/pokemon-form';  
import Pokemon from '../models/pokemons';
import PokemonService from '../services/pokemon-service';

type Params = { id: string };

const PokemonEdit: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {

    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    useEffect(() => {
        PokemonService.getPokemon(+match.params.id).then((pokemon) => setPokemon(pokemon));
        /*fetch(`http://localhost:3001/pokemons/${match.params.id}`)
            .then(response => response.json())
            .then((pokemon) => {
                if(pokemon.id) setPokemon(pokemon);
            });*/
        /*POKEMONS.forEach(pokemon => {
            if (match.params.id === pokemon.id.toString()) {
                setPokemon(pokemon);
            }
        })*/
    }, [match.params.id]);

    return (
        <div>
            {pokemon ? (
                <div className="row">
                    <h2 className="header center">Éditer {pokemon.name}</h2>
                    <PokemonForm pokemon={pokemon} isEditForm={true}></PokemonForm>
                </div>
            ) : (
                    <h4 className="center"><Loader></Loader></h4>
            )}
        </div>
    );
}

export default PokemonEdit;