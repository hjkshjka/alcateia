import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <h1>Página home</h1>
            <li><Link to="/">Home</Link></li>
        </div>
    );
}

export default Home;


