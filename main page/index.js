import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Cadastro from "../paginas/cadastro";
import Home from "../paginas/home";
import Sistema from "../paginas/sistema";
import Sobre from "../paginas/sobre";
import "./main.css";
import logo from "./imagens/logodubsol.png"
import { i18n } from "../translate/i18n"
import { Avatar } from "@mui/material";



function MainPage() {
    return (
        <Router>
            <div>
                <img src={logo}></img>
                <nav className="botoes">
                    <ul>
                        <li><Link to="/Home" exact className="btn-links1">{i18n.t('titles.home')}</Link></li>
                        <li><Link to="/Cadastro" exact className="btn-links2">{i18n.t('titles.sistem')}</Link></li>   
                        <li><Link to="/Sistema" exact className="btn-links3">{i18n.t('titles.sign')}</Link></li>
                        <li><Link to="/Sobre" exact className="btn-links4">{i18n.t('titles.about')}</Link></li>
                    </ul>
                </nav>
                
                <Switch>
                    <Route exact path="/"/>
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/Cadastro" component={Cadastro} />
                    <Route exact path="/Sistema" component={Sistema} />
                    <Route exact path="/Sobre" component={Sobre} />
                </Switch>
            

                


                <nav>
                    <Avatar sx={{ with: 170 }}></Avatar>
                </nav>
            </div>
        </Router>
    );
}

export default MainPage;