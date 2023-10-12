import React, { Component } from 'react';
import './App.css';
import NavBar from './common/NavBar';

class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <h1>Home</h1>
            </div>
        );
    }
}

export default Home;