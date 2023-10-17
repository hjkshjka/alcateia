import React from "react";
import Rotas from "../rotas";
import "./header.css";


function Header() {
    return (
        <div className="header">
            <div className="Botoes">
                <Rotas/>
            </div>
            <body>
                <h1>Bem vindo à</h1>
            </body>
        </div>
    );
  }
  
export default Header; 