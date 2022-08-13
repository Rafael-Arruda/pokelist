import React from "react";
import { Link } from 'react-router-dom';

import './style.css';

function Card(props){

    return(
        <Link to={`/about/${props.pokemon.id}`} className="card">
            <span>{props.pokemon.id}</span>
            <img src={props.pokemon['sprites']['other']['official-artwork']['front_default']} alt={props.pokemon.name}/>
            <h3>{props.pokemon.name}</h3>
            <span className="type">{props.pokemon.types[0].type.name}</span>
        </Link>
    )
}

export default Card;