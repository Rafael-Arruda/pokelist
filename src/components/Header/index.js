import {Link} from 'react-router-dom';

import { useContext } from 'react';
import { PokemonContext } from '../../contexts/pokemon';

import { MdFavorite } from 'react-icons/md';

import logo from '../../assets/logo_pokelist.png';

import './style.css';

function Header(){
    const { pokemons, setPokemonsFilter } = useContext(PokemonContext);

    function searchPokemon(e) {
        const search = e.target.value.toLowerCase();
        const filterList = pokemons
        .filter((pokemon) => pokemon.name.startsWith(search));
        setPokemonsFilter(filterList);
    }

    return(
        <div className="header">
            <Link to="/" className="logo">
                <img src={logo} alt="logo pokémon"/>
            </Link>
           <div className='box-search'>
                <input 
                className='input'
                type="search"
                placeholder='Search'
                onChange={searchPokemon}
                />
                <Link to="/favorites" className='favorites'>
                    <button>
                        <MdFavorite color="#fff" size={22}/>
                    </button>
                </Link>
           </div>
        </div>
    )
}

export default Header;