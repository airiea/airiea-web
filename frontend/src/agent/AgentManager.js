import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import NavBar from "../common/NavBar";
import {Button, Container, FormGroup, Input, Label, ListGroup, ListGroupItem} from 'reactstrap';

const AgentManager = () => {
    const [agents, setAgents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchAgents = async () => {
            try {
                const response = await axios.get('/agent-manager/list-all');
                setAgents(response.data);
            } catch (error) {
                console.error("Error fetching agents:", error);
            }
        };

        fetchAgents();
    }, []);

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

                <ListGroup>
                    {agents
                        .filter(agent => agent.agent_name.includes(searchTerm))
                        .map(agent => (
                            <ListGroupItem key={agent.agent_name}>
                                <Link to={`/agent-manager/${agent.agent_name}`}>{agent.agent_name}</Link>
                            </ListGroupItem>
                        ))}
                </ListGroup>

                <Link to="/agent-manager/create">
                    <Button color="primary" className="mt-4">Create New Agent</Button>
                </Link>
            </Container>
        </div>
    );
};

export default AgentManager;

