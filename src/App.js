import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1>My app</h1>
                <ul>
                    <li>
                        <Link to="/users/crispin?animate">Crispin</Link>
                    </li>
                    <li>
                        <Link to="/users/jon?animate">Jon</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default App;
