import React from "react";
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import api from '../../services/api';

import { toast } from 'react-toastify';

import {Container} from './style.js';

export default function About(){

    const { id } = useParams();

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadPokemon(){
            await api.get(`${id}`)
            .then(res => {
                setPokemon(res.data);
            })
            setLoading(false);
        }

        loadPokemon();
    }, [])    

    function savePokemon(){
        const myList = localStorage.getItem('pokelist');

        let savedPokemons = JSON.parse(myList) || [];

        const hasPokemon = savedPokemons.some( (pokemonSaved) => pokemonSaved.id === pokemon.id)
        
        if(hasPokemon) {
            toast.warn("Esse pokemon já está salvo");
            return;
        }
        savedPokemons.push(pokemon);
        localStorage.setItem('pokelist', JSON.stringify(savedPokemons));
        toast.success("Pokemon salvo com sucesso!");
    }

    return(
        <Container>
            {loading ?
            <h2 className="loading">Carregando...</h2>
            :
            <>
                <div className="box-information">
                    <div className="box-pokemon-id">
                        <h2 className="pokemon-name">{pokemon.name}</h2>
                        <span className="id">{pokemon.id}</span>
                    </div>
                    <img src={pokemon['sprites']['other']['home']['front_default']} alt={pokemon.name}/>
                    <div className="box-line1">
                        <div className="box-types">
                            <h4>Types</h4>
                            {pokemon.types.map(item => (
                                <span key={item.slot}>{item.type.name}</span>
                            ))}
                        </div>
                        <div className="box-height">
                            <h4>Height</h4>
                            <span>{pokemon.height/10} m</span>
                        </div>
                    </div>
                    <div className="box-line2">
                        <div className="box-experience">
                            <h4>Experience</h4>
                            <span>{pokemon['base_experience']}</span>
                        </div>
                        <div className="box-weight">
                            <h4>Weight</h4>
                            <span>{pokemon.weight/10} kg</span>
                        </div>
                    </div>
                    <div className="box-line3">
                        <div className="box-abilities">
                            <h4>Abilities</h4>
                            {pokemon.abilities.map(item => (
                                <span key={item.slot}>{item.ability.name}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <button onClick={savePokemon}>Save</button>
            </>
            }
        </Container>
    )
}