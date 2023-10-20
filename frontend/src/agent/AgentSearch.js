import React, {useEffect, useState} from 'react';
import axios from 'axios';
import NavBar from "../common/NavBar";
import {Alert, Container, FormGroup, Input, Label} from 'reactstrap';
import AgentTableView from "./AgentTableView";


const AgentSearch = () => {
    const [agents, setAgents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAgents = async () => {
            try {
                const response = await axios.get('/agent/search/list-all');
                if (response.status !== 200 || !response.data) {
                    setError('Failed to retrieve agents. Please try again later.');
                    return;
                }
                setAgents(response.data);
            } catch (error) {
                setError(`Error listing for agents: ${error.message}`);
            }
        };

        fetchAgents();
    }, []);

    const filteredAgents = agents.filter(agent => agent.agent_name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div>
            <NavBar />
            <Container>
                <h2 className="my-4">Agent Manager</h2>

                <FormGroup>
                    <Label for="searchAgent">Search Agents:</Label>
                    <Input
                        type="text"
                        id="searchAgent"
                        placeholder="Search agents..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </FormGroup>

                {error && <Alert color="danger" className="mt-3">{error}</Alert>}
                {filteredAgents.length > 0 ? <AgentTableView agents={filteredAgents} /> : <p>No agents found.</p>}
            </Container>
        </div>
    );
};

export default AgentSearch;

