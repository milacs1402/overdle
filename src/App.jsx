import React from "react";
import {Link} from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Home from "./pages/Home.jsx"
import listaHerois from "./assets/ListaHerois.json"

function App() {
    const mapaHerois = new Map();
    let escolhido;

    const fetchJson = () => {
        try {
            listaHerois.listaHerois.map(heroi => (
                mapaHerois.set(heroi.compara, heroi)
        ));
            console.log(mapaHerois);
          } catch (error) {
            console.error('Erro ao carregar o JSON:', error);
          }


        let numero = 0;
        numero = Math.floor(Math.random() * 42);

        let i = 0;
        for (let [key, value] of mapaHerois) {
            i++;
            if(i === numero){escolhido = key;}
        }
    }

    fetchJson();

    
    return (
        <div className={ "diva" }>
            <nav className="navbar-menu">
                <ul className="navbar__list">
                    <li><Link to={ "/1" }>bosta 1</Link></li>
                    <li><Link to={ "/2" }>bosta 2</Link></li>
                    <li><Link to={ "/3" }>bosta 3</Link></li>
                </ul>
            </nav>
            <div>
                <Routes>
                    <Route exact path="/1" element={ <Home mp = {mapaHerois} esc = {escolhido}/> }/>
                    {/*<Route exact path="/2" element={<jogo2/>}/>*/ }
                    {/*<Route exact path="/3" element={<jogo3/>}/>*/ }
                </Routes>
            </div>
        </div>
    )
}

export default App;