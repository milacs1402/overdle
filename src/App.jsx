import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import listaHerois from "../public/assets/ListaHerois.json";
import "./styleApp.css";


function App() {
  const mapaHerois = new Map();
  let escolhido;

  const fetchJson = () => {
    try {
      listaHerois.listaHerois.map((heroi) =>
        mapaHerois.set(heroi.compara, heroi)
      );
      console.log(mapaHerois);
    } catch (error) {
      console.error("Erro ao carregar o JSON:", error);
    }

    let numero = 0;
    numero = Math.floor(Math.random() * 42);

    let i = 0;
    for (let [key, value] of mapaHerois) {
      i++;
      if (i === numero) {
        escolhido = key;
      }
    }
  };

  fetchJson();

  return (
    <div className="diva">
      <nav className="navbar-menu">
        <div className="title">
          <h1>Overdle</h1>
        </div>
        <ul className="navbar-list">
          <li>
            <Link to={""}  className="item">
              Herói do Dia
            </Link>
          </li>
          <li>
            <Link to={"/2"} className="item" >
              Modo de Jogo 2
              <h3>(em breve)</h3>
            </Link>
          </li>
          <li>
            <Link to={"/3"} className="item">
              Modo de Jogo 3
              <h3>(em breve)</h3>
            </Link>

          </li>
          <li className={"about"}>
            <Link to={"/4"} className="item">
              Sobre nós
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route exact path="" element={<Home mp={mapaHerois} esc={escolhido} />}/>
          {<Route exact path="/2" element={<jogo2 />} />}
          {<Route exact path="/3" element={<jogo3 />} />}
          {<Route exact path="/4" element={<About />} />}
        </Routes>
      </div>
    </div>
  );
}

export default App;
