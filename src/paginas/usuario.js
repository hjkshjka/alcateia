import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Usuario = () => {
    return (
        <div>
            <h1>Página usuario</h1>
            <li><Link to="/">Home</Link></li>
        </div>
    );
}

export default Usuario;