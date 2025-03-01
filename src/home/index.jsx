import './style.css'
import HeroDescription from "../Components/HeroDescription.jsx"

function Index() {

    const heros = [{
        id: 0,
    }, {
        id: 1,
    }]

    return (
        <div className="container">
            <div className={"tittle"}>
                <h1>Overdle</h1>
            </div>


            <div className={"guess"}>
                <h1>Adivinhe o herói do dia!</h1>
                <input name='hero' type="text"/>
                <h4><span>Aperte 'Enter' para confirmar</span></h4>
            </div>

            {heros.map(hero => (
                <HeroDescription id={hero.id}/>
            ))}
        </div>
    )
}

export default Index