import "./styleAbout.css";

function About() {
    return(
        <div className={"main-about"}>
            <div className={"sobre-pjt"}>
                <h1>Sobre o projeto</h1>
            </div>
            <div className={"text-pjt"}>
                <p>
                Esse projeto consiste em uma homenagem ao falecido Overdle I (feito por outras pessoas), que misteriosamente saiu do ar no ano de 2025, ano em que começamos o projeto de seu sucessor -esse site que você está agora. Caso você nem conheça o original, Overdle II é um jogo de adivinhação baseado nos personagens do jogo Overwatch 2 (não nos processem). Entre diariamente e divirta-se com o desafio.
                E lembre-se heróis nunca morrem! 
                </p>
            </div>
            <div className={"sobre-devs"}>
                <h1>Sobre os desenvolvedores</h1>
            </div>
            <div className={"text-devs"}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id malesuada ex.
                    Etiam id erat non nisl pretium condimentum sit amet vel ante. Aliquam hendrerit
                    purus vel rutrum pretium. Etiam vulputate, nibh id auctor suscipit, nunc turpis
                    ullamcorper est, vitae egestas ipsum nunc in tellus. Donec faucibus leo dictum
                    odio fringilla cursus. Nullam et consectetur eros. Donec facilisis tortor ac risus
                    maximus, non euismod felis malesuada. Donec nisi orci, bibendum quis posuere nec,
                    pellentesque sit amet metus. Sed id mattis augue. Cras eleifend accumsan tempus.
                    Aenean eget blandit lorem. Sed non maximus odio, ut elementum tortor.
                </p>
            </div>
        </div>
    )
    
}

export default About;