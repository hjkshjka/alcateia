import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Sobre = () => {
    return (
        <div>
            <h1>Página sobre</h1>
            <li><Link to="/">Home</Link></li>
        </div>
    );
}

export default Sobre;