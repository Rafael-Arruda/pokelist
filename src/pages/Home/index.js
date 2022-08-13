import React from "react";

import { useContext } from "react";
import { PokemonContext } from "../../contexts/pokemon";

import Card from '../../components/Card';
import { Container } from './style';

function Home(){
    const { pokemonsFilter, loading } = useContext(PokemonContext);

    return(
        <Container>
            {loading ? 
            <h2>Carregando...</h2> 
            : 
            pokemonsFilter.map((p) => (
                <Card key={p.id} pokemon={p}/>
            ))
            }
        </Container>
    )
}

export default Home;