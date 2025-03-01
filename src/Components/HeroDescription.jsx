import './StylesHeroDescription.css'
import Ana from '../assets/PI_Cute_Ana.jpg'
import Junk from '../assets/PI_Cute_Junkrat.jpg'

function HeroDescription(props) {

    const heros = [{
        id: 0,
        pic: <img src={Ana} alt=""/>,
        name: 'Ana',
        class: 'suporte',
        type: 'projétil',
        gender: 'feminino',
        year: 2016
    }, {
        id: 1,
        pic: <img src={Junk} alt=""/>,
        name: 'Junkrat',
        class: 'dano',
        type: 'projétil',
        gender: 'masculino',
        year: 2017
    }]

    return (
        <div className={"list"}>

            <div className={"pic"}>{heros[props.id].pic}</div>
            <div className={"name"}>{heros[props.id].name}</div>
            <div className={"class"}>{heros[props.id].class}</div>
            <div className={"type"}>{heros[props.id].type}</div>
            <div className={"gender"}>{heros[props.id].gender}</div>
            <div className={"year"}>{heros[props.id].year}</div>

        </div>
    )
}

export default HeroDescription