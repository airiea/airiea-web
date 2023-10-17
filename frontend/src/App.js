import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import TaskSearch from "./task/TaskSearch";
import TaskPlanning from "./task/TaskPlanning";
import AgentManager from "./agent/AgentManager";
import AgentCreate from "./agent/AgentCreate";
import AgentEdit from "./agent/AgentEdit";
import AbilityManager from "./ability/AbilityManager";
import AbilityCreate from "./ability/AbilityCreate";
import AbilityEdit from "./ability/AbilityEdit";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/task-search" element={<TaskSearch />} />
                <Route path="/task-planning" element={<TaskPlanning />} />

                <Route path="/agent-manager" element={<AgentManager />} />
                <Route path="/agent-manager/create" element={<AgentCreate />} />
                <Route path="/agent-manager/:agent_name" element={<AgentEdit />} />

                <Route path="/ability-manager" element={<AbilityManager />} />
                <Route path="/ability-manager/:ability_name" element={<AbilityEdit />} />
                <Route path="/ability-manager/create" element={<AbilityCreate />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
