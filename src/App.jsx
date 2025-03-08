import React from "react";
import {Link} from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Home from "./pages/Home.jsx"

function App() {
    return (
        <div className={ "diva" }>
            <nav className="navbar-menu">
                <ul className="navbar__list">
                    <li><Link to={ "/1" }>bosta 1</Link></li>
                    <li><Link to={ "/2" }>bosta 2</Link></li>
                    <li><Link to={ "/3" }>bosta 3</Link></li>
                </ul>
            </nav>
            <div>
                <Routes>
                    <Route exact path="/1" element={ <Home/> }/>
                    {/*<Route exact path="/2" element={<jogo2/>}/>*/ }
                    {/*<Route exact path="/3" element={<jogo3/>}/>*/ }
                </Routes>
            </div>
        </div>
    )
}

export default App;