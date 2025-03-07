import React from "react";
import {Link} from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Home from "./home/Home.jsx";

function App() {
    <div>
        <Link></Link>
        <nav className="navbar-menu">
            <ul className="navbar__list">
                <li>bosta 1</li>
                <li>bosta 2</li>
                <li>bosta 3</li>
            </ul>
        </nav>
        <div>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
            </Routes>
        </div>
    </div>
}

export default App;