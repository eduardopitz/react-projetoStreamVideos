import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from '../GoogleAuth';
import styled from 'styled-components'

import '../App.scss'

const Header = () => {
    return (
        <Menu>
            <Link to="/" className="menu-item"> Início </Link>
            <Link to="/streams/new" className="menu-item"> Adicionar </Link>
            <Link to="/streams/list" className="menu-item"> Listar </Link>
            
            <GoogleAuth />
        </Menu>
    )
};

const Menu = styled.div`
`;


export default Header;