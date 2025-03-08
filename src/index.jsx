import {StrictMode} from 'react'
import {BrowserRouter} from "react-router-dom";
import './style.css'
import App from "./App.jsx";
import * as reactDOM from "react-dom/client";

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>
);