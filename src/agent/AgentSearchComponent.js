import React, {useState} from 'react';
import NavBar from "../common/NavBar";
import {Container, FormGroup, Input, Label} from 'reactstrap';
import AgentTableView from "./hook/AgentTableView";
import {useSearchData} from '../common/UseSearchData'; // Import the hook
import ErrorAlert from "../common/ErrorAlert"; // Import the error component

function AgentSearchComponent() {
    const { data: agents, loading, error } = useSearchData('/agent/search/list-all');  // Using the hook

    const [searchTerm, setSearchTerm] = useState('');

    const filteredAgents = agents ? agents.filter(agent => agent.agent_name.toLowerCase().includes(searchTerm.toLowerCase())) : [];

    if (loading) return <div>Loading...</div>;

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

                <ErrorAlert message={error} />  {/* Using the error component */}

                {filteredAgents.length > 0 ? <AgentTableView agents={filteredAgents} /> : <p>No agents found.</p>}
            </Container>
        </div>
    );
};

export default AgentSearchComponent;
