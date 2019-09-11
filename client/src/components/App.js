import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';

import './App.scss'

const App = () => {
    return (
        <div className="ui grid container">
            <BrowserRouter>
            <div className="four wide column">
                <Header />
            </div>
            <div className="twelve wide column">
                
                    <div>
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/new" exact component={StreamCreate} />
                        <Route path="/streams/edit" exact component={StreamEdit} />
                        <Route path="/streams/show" exact component={StreamShow} />
                        <Route path="/streams/list" exact component={StreamList} />
                        <Route path="/streams/delete" exact component={StreamDelete} />
                    </div>
            </div>
            </BrowserRouter>
        </div>
    )
};

export default App;