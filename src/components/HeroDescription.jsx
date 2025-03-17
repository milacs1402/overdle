import "./StylesHeroDescription.css";

function HeroDescription(props) {
    //console.log("Uin", props.mp, props.chute, props.esc);
    //console.log(props.mp.get(props.chute).nome);
    let foto;
    let nome;
    let genero;
    let especie;
    let classe;
    let dano;
    let ano;

    foto = <img src={props.mp.get(props.chute).foto}/>;
    nome = props.mp.get(props.chute).nome;
    genero = props.mp.get(props.chute).genero;
    especie = props.mp.get(props.chute).especie;
    classe = props.mp.get(props.chute).classe;
    dano = props.mp.get(props.chute).dano;
    ano = props.mp.get(props.chute).ano;

    const cor = (atributo, resp) => {
        if (atributo === resp) return "green";
        else return "red";
    };

    return (
        <div className="list">
            <div
                className="pic"
                style={ {background: cor(foto, props.mp.get(props.esc).foto)} }
            >
                { foto }
            </div>
            <div
                className="name"
                style={ {background: cor(nome, props.mp.get(props.esc).nome)} }
            >
                { nome }
            </div>
            <div
                className="name"
                style={ {background: cor(genero, props.mp.get(props.esc).genero)} }
            >
                { genero }
            </div>
            <div
                className="name"
                style={ {background: cor(especie, props.mp.get(props.esc).especie)} }
            >
                { especie }
            </div>
            <div
                className="name"
                style={ {background: cor(classe, props.mp.get(props.esc).classe)} }
            >
                { classe }
            </div>
            <div
                className="name"
                style={ {background: cor(dano, props.mp.get(props.esc).dano)} }
            >
                { dano }
            </div>
            <div
                className="name"
                style={ {background: cor(ano, props.mp.get(props.esc).ano)} }
            >
                { ano }
            </div>
        </div>
    );
}

export default HeroDescription;
