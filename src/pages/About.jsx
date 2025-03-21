import "./styleAbout.css";

function About() {
    return (
        <div className={ "main-about" }>
            <div className={ "sobre-pjt" }>

                <div className={ "text-pjt" }>
                    <p>
                        Esse projeto consiste em uma homenagem ao falecido Overdle I (feito por outras pessoas), que
                        misteriosamente saiu do ar no ano de 2025, ano em que começamos o projeto de seu sucessor - esse
                        site que você está agora. Caso você nem conheça o original, Overdle II é um jogo de adivinhação
                        baseado nos personagens do jogo Overwatch 2 (não nos processem). Entre diariamente e divirta-se
                        com o desafio.
                        E lembre-se: Heróis nunca morrem!
                    </p>
                </div>
            </div>
            <div className={ "sobre-devs" }>
                <h1>Sobre os desenvolvedores</h1>
                <div className={ "text-devs" }>
                    <div className={ "dev1" }>
                        <div className={"img"}>
                            <img src="public/assets/camila.jpg" alt=""/>
                        </div>
                        <h3>Camila Cristina</h3>
                            <span>Desenvolvimento Front-End</span>
                        <p>
                            Estudante de Ciência da Computação na Unesp Bauru e apaixonada por desenvolvimento Front-End.
                            Esse projeto foi extremamente importante pra mim e espero que vocês se divirtam tanto com ele
                            quanto eu me diverti :) <br/>
                            Meu main é o JunkRat e eu não quero julgamentos ok?!<br/>
                            Muito obrigada!
                        </p>
                    </div>
                    <div className={ "dev2" }>
                        <div className={"img"}>
                            <img src="public/assets/luis.jpg" alt=""/>
                        </div>
                        <h3>Luís Gabriel</h3>
                        <span>Desenvolvimento Back-End</span>
                        <p>
                            Estudante de Ciência da Computação na Unesp Bauru e apaixonada por desenvolvimento Front-End.
                            Esse projeto foi extremamente importante pra mim e espero que vocês se divirtam tanto com ele
                            quanto eu me diverti :) <br/>
                            Meu main é o JunkRat e eu não quero julgamentos ok?!<br/>
                            Muito obrigada!
                        </p>
                    </div>
                </div>
                <div className={"agradecimentos"}>

                    <h2>Agradecimentos</h2>

                    <p>
                        Um agradecimento extremamente especial ao Bruno e à Luna, que nos nos ajudaram durante todo projeto.
                        Não teríamos conseguido sem vocês!
                    </p>

                </div>
            </div>
        </div>
    )
}

export default About;