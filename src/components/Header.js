import React from 'react';

import {Route, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';

const Header = () => {
    const changeWindow=(e)=>{
        console.log(e.target)
        e.target.setAttribute("class", "active");
    };

    return (
        <>
        <nav>
            <div id="first-line">
                <label className="logo">Home Finance</label>
                <ul id="extras">
                    <li className="list-item"><a id="login" href="login/">Login</a></li>
                    <li className="list-item"><a href="config/">
                        <i className="fas fa-cog"></i>
                    </a></li>
                </ul>
            </div>

            <ul>
                <li className="list-item">
                    <a className="active" href="create-expense/" onClick={changeWindow}>Registrar Gasto</a>
                </li>
                <li className="list-item">
                    <a href="statistics/" onClick={changeWindow}>Estadisticas</a>
                </li>
                <li className="list-item">
                    <a href="book/">Gastos</a>
                </li>
            </ul>
        </nav>  
        </>
    );
};

export default Header;
