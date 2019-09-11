import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

import './App.scss'

const Header = () => {
    return (
        <div className="menu">
            <Link to="/" className="menu-item"> Início </Link>
            <Link to="/streams/new" className="menu-item"> Adicionar </Link>
            <Link to="/streams/list" className="menu-item"> Listar </Link>
            
            <GoogleAuth />
        </div>
    )
};

export default Header;