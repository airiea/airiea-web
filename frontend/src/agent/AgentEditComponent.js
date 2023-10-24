import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import {Button, Container, Form, FormGroup, Input, Label} from 'reactstrap';
import NavBar from "../common/NavBar";
import {useSearchData} from '../common/UseSearchData';
import ErrorAlert from "../common/ErrorAlert";

function AgentEditComponent() {
    const { agent_name } = useParams();
    const navigate = useNavigate();

    // Get searched agent data using the custom hook
    const { data: searchedAgent, loading, error: searchError } = useSearchData(`/agent/search`, agent_name);

    // This will be the version of the agent that we edit and send back to the server.
    const [editedAgent, setEditedAgent] = useState({
        agent_name: '',
        agent_role: '',
        agent_goal: '',
        ability_name: ''
    });

    const [updateError, setUpdateError] = useState(null);

    useEffect(() => {
        if (searchedAgent) {
            setEditedAgent(searchedAgent);
        }
    }, [searchedAgent]);

    const handleChange = ({ target: { name, value } }) => {
        setEditedAgent(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/agent/edit/${agent_name}`, editedAgent);
            alert("Agent updated successfully!");
            navigate(`/agent/search/${agent_name}`);
        } catch (error) {
            console.error("Error updating agent:", error);
            setUpdateError('Error updating agent. Please try again.');
        }
    };

    return (
        <div>
            <NavBar />
            <Container>
                <h2 className="my-4">Edit Agent: {agent_name}</h2>

                <ErrorAlert message={searchError || updateError} />

                {!loading && editedAgent && (
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="agent_name">Agent Name</Label>
                            <Input
                                type="text"
                                id="agent_name"
                                value={editedAgent.agent_name}
                                readOnly
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="created_date">Created Date</Label>
                            <Input
                                type="text"
                                id="created_date"
                                value={new Date(editedAgent.created_date).toLocaleDateString()}
                                readOnly
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="agent_role">Agent Role</Label>
                            <Input
                                type="text"
                                id="agent_role"
                                name="agent_role"
                                value={editedAgent.agent_role}
                                onChange={handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="agent_goal">Agent Goal</Label>
                            <Input
                                type="text"
                                id="agent_goal"
                                name="agent_goal"
                                value={editedAgent.agent_goal}
                                onChange={handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="ability_name">Ability Name</Label>
                            <Input
                                type="text"
                                id="ability_name"
                                name="ability_name"
                                value={editedAgent.ability_name}
                                onChange={handleChange}
                            />
                        </FormGroup>

                        <Button color="primary" type="submit">Update Agent</Button>
                    </Form>
                )}

                {loading && <p>Loading agent data...</p>}
            </Container>
        </div>
    );
};

export default AgentEditComponent;