import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import About from './pages/About';

import Header from './components/Header';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/favorites' element={ <Favorites/> }/>
                
                <Route path='/about/:id' element={ <About/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;