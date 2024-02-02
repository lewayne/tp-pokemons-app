import React , {FunctionComponent, useEffect, useState} from 'react';   
import { Link } from 'react-router-dom';
import PokemonCard from '../components/pokemon-card'; 
import PokemonSearch from '../components/pokemon-search';
import Pokemon from '../models/pokemons';
import PokemonService from '../services/pokemon-service';


const PokemonList: FunctionComponent = () => { 
  //const pokemons = usePokemons();
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
      PokemonService.getPokemons().then((pokemons) => setPokemons(pokemons));
      /*fetch("http://localhost:3001/pokemons")
        .then(response => response.json())
        .then((pokemons) => setPokemons(pokemons))*/
      //setPokemons(POKEMONS)
    }, []); 

  return (
    <div>
      <h1 className='center'>Pokedex</h1>
      <div className='container'>
        <div className='row'>
          <PokemonSearch></PokemonSearch>
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon}  />
          ))}
        </div>
      </div>
      <Link className="btn-floating btn-large waves-effect waves-light red z-depth-3"
      style={{position:'fixed', bottom:'25px', right:'25px'}} to="/pokemon/add">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

export default PokemonList