import './styleHome.css'
import HeroDescription from "../components/HeroDescription.jsx"

function Home() {

    const heros = [{
        id: 0,
    }, {
        id: 1,
    }]

    return (

        <div className="container">

            <div className={ "tittle" }>
                <h1>Overdle</h1>
            </div>


            <div className={ "guess" }>
                <h1>Adivinhe o herói do dia!</h1>
                <input name='hero' type="text"/>
            </div>


            <div className={ "baixo" }>
                { heros.map(hero => (
                    <HeroDescription id={ hero.id }/>
                )) }
            </div>
        </div>
    )
}

export default Home