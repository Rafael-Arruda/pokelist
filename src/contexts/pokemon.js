import { useState, useEffect, createContext } from "react";

import api from "../services/api";

export const PokemonContext = createContext({});

function PokemonProvider({children}){
    const [pokemons, setPokemons] = useState([]);
    const [pokemonsFilter, setPokemonsFilter] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => { 
        async function loadPokemons(){
            const list = [];
            for(let i=1;i<151;i++){
                const response = await api.get(`${i}`);
                list.push(response.data);
            }
            setPokemons(list);
            setPokemonsFilter(list);
            setLoading(false);
        }

        loadPokemons();
    }, [])


    return(
        <PokemonContext.Provider value={{ pokemons, pokemonsFilter, loading, setPokemonsFilter }}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider;