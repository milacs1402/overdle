import { useState } from "react";
import "./styleHome.css";
import HeroDescription from "../components/HeroDescription.jsx";

function Home(props) {
  const [chutes, setChutes] = useState([]);

  const enterr = (texto) => {
    const op = texto.trim().toUpperCase();
    if (!props.mp.has(op) || props.mp.get(op).visto) return;
    props.mp.get(op).visto = true;

    //console.log("ain");
    setChutes([op, ...chutes]); // Atualiza o estado para renderizar o componente
  };

  return (
    <div className="container">
      <div className="guess">
          <h1>Modo De Jogo 1</h1>
          <input
              placeholder="Digite o nome de um herói..."
              name="hero"
              type="text"
              onKeyDown={ (event) => {
                  if (event.key === "Enter") {
                      enterr(event.target.value);
                      event.target.value = "";
                  }
              } }
          />
      </div>

      <div className="chute-list">
        {chutes.map((chute) => (
          <HeroDescription mp={props.mp} chute={chute} esc={props.esc} />
        ))}
      </div>
    </div>
  );
}

export default Home;
