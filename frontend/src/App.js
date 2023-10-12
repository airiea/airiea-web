import './App.css';
import React, {Component} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import TaskSearch from "./task/TaskSearch";
import TaskPlanning from "./task/TaskPlanning";
import AgentManager from "./agent/AgentManager";
import AgentCreate from "./agent/AgentCreate";
import AgentEdit from "./agent/AgentEdit";
import AbilityManager from "./ability/AbilityManager";
import AbilityCreate from "./ability/AbilityCreate";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" Component={Home} />

                    <Route path="/task-search" element={<TaskSearch />} />
                    <Route path="/task-planning" element={<TaskPlanning />} />

                    <Route path="/agent-manager" element={<AgentManager />} />
                    <Route path="/agent-manager/create" element={<AgentCreate />} />
                    <Route path="/agent-manager/edit/:agentName" element={<AgentEdit />} />

                    <Route path="/ability-manager" element={<AbilityManager />} />
                    <Route path="/ability-manager/create" element={<AbilityCreate />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default App;