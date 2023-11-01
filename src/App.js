import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import TaskSearchComponent from "./task/TaskSearchComponent";
import TaskPlanCreateComponent from "./task/TaskPlanCreateComponent";
import AgentSearchComponent from "./agent/AgentSearchComponent";
import AgentCreateComponent from "./agent/AgentCreateComponent";
import AgentEditComponent from "./agent/AgentEditComponent";
import AbilitySearchComponent from "./ability/AbilitySearchComponent";
import AbilityCreateComponent from "./ability/AbilityCreateComponent";
import AbilityEditComponent from "./ability/AbilityEditComponent";
import TaskSearchById from "./task/hook/TaskSearchById";
import TaskInputComponent from "./task/TaskInputComponent";
import KnowledgeSearchComponent from "./knowledge/KnowledgeSearchComponent";
import KnowledgeSearchById from "./knowledge/hook/KnowledgeSearchById";
import AbilitySearchByName from "./ability/hook/AbilitySearchByName";
import AgentSearchByName from "./agent/hook/AgentSearchByName";
import AgentChatComponent from "./agent/AgentChatComponent";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/knowledge/search" element={<KnowledgeSearchComponent />} />
                <Route path="/knowledge/search/:knowledge_id" element={<KnowledgeSearchById />} />

                <Route path="/task/search" element={<TaskSearchComponent />} />
                <Route path="/task/search/:task_id" element={<TaskSearchById />} />
                <Route path="/task/input" element={<TaskInputComponent />} />
                <Route path="/task/plan/create" element={<TaskPlanCreateComponent />} />

                <Route path="/agent/chat" element={<AgentChatComponent />} />
                <Route path="/agent/search" element={<AgentSearchComponent />} />
                <Route path="/agent/create" element={<AgentCreateComponent />} />
                <Route path="/agent/edit/:agent_name" element={<AgentEditComponent />} />
                <Route path="/agent/search/:agent_name" element={<AgentSearchByName />} />

                <Route path="/ability/search" element={<AbilitySearchComponent />} />
                <Route path="/ability/search/:ability_name" element={<AbilitySearchByName />} />
                <Route path="/ability/edit/:ability_name" element={<AbilityEditComponent />} />
                <Route path="/ability/create" element={<AbilityCreateComponent />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
