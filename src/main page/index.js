import React from "react";
import "./main.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function MainPage() {
    return (

        <body>
            <h1>Bem vindo a</h1>

            <nav className="botoes">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/Cadastro">Cadastre-se</Link></li>
                    <li><Link to="/Sistema">Sistema</Link></li>
                    <li><Link to="/About">Sobre</Link></li>
                </ul>
            </nav>
        
        </body>


    ); 
}

export default MainPage