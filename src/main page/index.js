import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Cadastro from "../paginas/cadastro";
import Home from "../paginas/home";
import Sistema from "../paginas/sistema";
import Sobre from "../paginas/sobre";
import "./main.css";
import logo from "./imagens/logodubsol.png"
import NavLingua from "../linguanav/navlingua";


function MainPage() {
    return (
        <Router>
            
            <div>

                <img src={logo}></img>
                <nav className="botoes">
                    <ul>
                        <li><Link to="/Home" exact className="btn-links1">INICIO</Link></li>
                        <li><Link to="/Cadastro" exact className="btn-links2">CADASTRO</Link></li>   
                        <li><Link to="/Sistema" exact className="btn-links3">SISTEMA</Link></li>
                        <li><Link to="/Sobre" exact className="btn-links4"s>SOBRE</Link></li>
                    </ul>
                </nav>
                
                <Switch>
                    <Route exact path="/"/>
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/Cadastro" component={Cadastro} />
                    <Route exact path="/Sistema" component={Sistema} />
                    <Route exact path="/Sobre" component={Sobre} />
                </Switch>
                
                <NavLingua/>
            </div>
        </Router>
    );
}

export default MainPage;