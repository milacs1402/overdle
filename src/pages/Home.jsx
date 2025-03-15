import { useState } from "react";
import "./styleHome.css";
import HeroDescription from "../components/HeroDescription.jsx";
import { ConstNode } from "three/webgpu";

function Home(props) {
  const [chutes, setChutes] = useState([]);
  const [nombre, setNombre] = useState("");


  const enterr = (texto) => {
    const op = texto.trim().toUpperCase();
    if (!props.mp.has(op) || props.mp.get(op).visto) return;
    props.mp.get(op).visto = true;

    //console.log("ain");
    setChutes([op, ...chutes]); // Atualiza o estado para renderizar o componente
  };

  const heroisFiltrados = [...props.mp].filter(([chave, valor])=> valor.compara.startsWith(nombre.toUpperCase().trim()) && nombre != "");
  //console.log(heroisFiltrados);

  return (
    <div className="container">
      <div className="guess">
          <h1>Modo De Jogo 1</h1>
          <input
              placeholder="Digite o nome de um herói..."
              name="hero"
              type="text"
              value = {nombre}
              onChange={(event) => {
                if(event.target.value != "") 
                    setNombre(event.target.value);
                else
                    setNombre("");
              }}
              onKeyDown={ (event) => {
                  if (event.key === "Enter") {
                      enterr(event.target.value);
                      setNombre("");
                  }
              } }
          />
      </div>
        <div className={"sugestion"}>
            <ul>
                { heroisFiltrados.map(([chave, valorr]) => {
                    return <li onClick={ () => {
                        enterr(valorr.nome);
                        setNombre("")
                    }
                    }>{ valorr.nome }</li>
                }) }
            </ul>
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
