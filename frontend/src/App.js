import './App.css';
import React, {Component} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import TaskSearch from "./task/TaskSearch";
import TaskPlanning from "./task/TaskPlanning";
import AgentSearch from "./agent/AgentSearch";
import AgentManager from "./agent/AgentManager";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" Component={Home} />

                    <Route exact path="/task-search" Component={TaskSearch} />
                    <Route exact path="/task-planning" Component={TaskPlanning} />

                    <Route exact path="/agent-search" Component={AgentSearch} />
                    <Route exact path="/agent-manager" Component={AgentManager} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default App;