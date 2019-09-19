import React from 'react';
import { Router, Route } from 'react-router-dom'

import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamIndex from './streams/StreamIndex';
import Header from './Header';
import history from '../history';

import './App.scss'

const App = () => {
    return (
        <div className="ui grid container">
            <Router history={history}>
                <div className="four wide column">
                    <Header />
                </div>
                <div className="twelve wide column">
                    <Route path="/" exact component={StreamIndex} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/list" exact component={StreamList} />
                    <Route path="/streams/edit/:id" exact component={StreamEdit} />
                    <Route path="/streams/show/:id" exact component={StreamShow} />
                    <Route path="/streams/delete/:id" exact component={StreamDelete} />
                </div>
            </Router>
        </div>
    )
};

export default App;