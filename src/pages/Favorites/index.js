import React from "react";
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';

import { Container, Content } from './style';
import { toast } from "react-toastify";

function Favorites(){
    
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const myList = localStorage.getItem('pokelist');
        setPokemons(JSON.parse(myList) || []);
    }, [])

    function removePokemon(id){
        let currentList = pokemons.filter((pokemon) => pokemon.id !== id);

        setPokemons(currentList);
        localStorage.setItem('pokelist', JSON.stringify(currentList));
        toast.success('Pokemon excluído com sucesso!');
    }

    function removeAllPokemons() {
        let currentList = [];
        
        setPokemons(currentList);
        localStorage.setItem('pokelist', JSON.stringify(currentList));
        toast.success('Pokemons excluídos com sucesso!');
    }

    return(
        <Container>

            {pokemons.length === 0 ? 
                <h2>Você ainda não possui pokemons salvos :(</h2>
                :
                <Content>
                   <div className="box-favorites">
                        {pokemons.map((pokemon) => {
                            return(
                                <div key={pokemon.id} className="box-pokemon">
                                    <img src={pokemon['sprites']['front_default']} alt={pokemon.name} title={pokemon.name}/>
                                    <div className="area-buttons">
                                        <Link to={`/about/${pokemon.id}`}>About</Link>
                                        <button onClick={() => removePokemon(pokemon.id)}>
                                            <MdDelete size={25} color="#000"/>
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                   </div>
                   <button onClick={() => removeAllPokemons()} className="btn-deleteAll">Delete All</button>
                </Content>
            }

        </Container>
    )
}

export default Favorites;