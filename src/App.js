import RoutesApp from "./routes";
import { ToastContainer } from 'react-toastify';

import PokemonProvider from "./contexts/pokemon";

import 'react-toastify/dist/ReactToastify.css';

function App(){
  return(
    <PokemonProvider>
      <div className="app">
        <ToastContainer autoClose={2000}/>
        <RoutesApp/>
      </div>
    </PokemonProvider>
  )
}

export default App;