import React from 'react';
import { Router } from 'react-router-dom'

import Logo from './base/Logo';
import Menu from './base/Menu';
import Content from './base/Content';
import history from '../history';

import './App.scss'

const App = () => {
    return (
        <div className="ui grid container">
            <Router history={history}>
                <div className="four wide column">
                    <Logo />
                    <Menu />
                </div>
                <div className="twelve wide column">
                    <Content />
                </div>
            </Router>
        </div>
    )
};

export default App;