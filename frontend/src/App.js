import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import TaskSearch from "./task/TaskSearch";
import TaskPlanCreate from "./task/TaskPlanCreate";
import AgentSearch from "./agent/AgentSearch";
import AgentCreate from "./agent/AgentCreate";
import AgentEdit from "./agent/AgentEdit";
import AbilitySearch from "./ability/AbilitySearch";
import AbilityCreate from "./ability/AbilityCreate";
import AbilityEdit from "./ability/AbilityEdit";
import TaskSearchById from "./task/TaskSearchById";
import TaskInput from "./task/TaskInput";
import KnowledgeSearch from "./knowledge/KnowledgeSearch";
import KnowledgeSearchById from "./knowledge/KnowledgeSearchById";
import AbilitySearchByName from "./ability/AbilitySearchByName";
import AgentSearchByName from "./agent/AgentSearchByName";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/knowledge/search" element={<KnowledgeSearch />} />
                <Route path="/knowledge/search/:knowledge_id" element={<KnowledgeSearchById />} />

                <Route path="/task/search" element={<TaskSearch />} />
                <Route path="/task/search/:task_id" element={<TaskSearchById />} />
                <Route path="/task/input" element={<TaskInput />} />
                <Route path="/task/plan/create" element={<TaskPlanCreate />} />

                <Route path="/agent/search" element={<AgentSearch />} />
                <Route path="/agent/create" element={<AgentCreate />} />
                <Route path="/agent/edit" element={<AgentEdit />} />
                <Route path="/agent/search/:agent_name" element={<AgentSearchByName />} />

                <Route path="/ability/search" element={<AbilitySearch />} />
                <Route path="/ability/search/:ability_name" element={<AbilitySearchByName />} />
                <Route path="/ability/edit" element={<AbilityEdit />} />
                <Route path="/ability/create" element={<AbilityCreate />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
