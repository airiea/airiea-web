import './App.css';
import React, {Component} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import TaskSearch from "./task/TaskSearch";
import TaskPlanning from "./task/TaskPlanning";
import AgentSearch from "./agent/AgentSearch";
import AgentManager from "./agent/AgentManager";
import AgentCreate from "./agent/AgentCreate";
import AgentEdit from "./agent/AgentEdit";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" Component={Home} />

                    <Route exact path="/task-search" element={<TaskSearch />} />
                    <Route exact path="/task-planning" element={<TaskPlanning />} />

                    <Route path="/agent-search" element={<AgentSearch />} />
                    <Route path="/agent-manager" element={<AgentManager />} />
                    <Route path="/agent-manager/create" element={<AgentCreate />} />
                    <Route path="/agent-manager/edit/:agentName" element={<AgentEdit />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default App;