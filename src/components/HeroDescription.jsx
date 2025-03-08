import './StylesHeroDescription.css'

function HeroDescription(props) {
    //console.log("Uin", props.mp, props.chute, props.esc);
    //console.log(props.mp.get(props.chute).nome);
    let nome;
    let sexo;
    let especie;
    let classe;
    let dano;
    let ano;

    nome = props.mp.get(props.chute).nome;
    sexo = props.mp.get(props.chute).sexo;
    especie = props.mp.get(props.chute).especie;
    classe = props.mp.get(props.chute).classe;
    dano = props.mp.get(props.chute).dano;
    ano = props.mp.get(props.chute).ano;

    const cor = (atributo, resp) => {
        if(atributo === resp)
          return 'green';
        else
          return 'red';
      }

    return (
        <div className="list">
            <div className="name" style={{ color: cor(nome, props.mp.get(props.esc).nome) }}>{nome}</div>
            <div className="name" style={{ color: cor(sexo, props.mp.get(props.esc).sexo) }}>{sexo}</div>
            <div className="name" style={{ color: cor(especie, props.mp.get(props.esc).especie) }}>{especie}</div>
            <div className="name" style={{ color: cor(classe, props.mp.get(props.esc).classe) }}>{classe}</div>
            <div className="name" style={{ color: cor(dano, props.mp.get(props.esc).dano) }}>{dano}</div>
            <div className="name" style={{ color: cor(ano, props.mp.get(props.esc).ano) }}>{ano}</div>
        </div>
    )
}

export default HeroDescription