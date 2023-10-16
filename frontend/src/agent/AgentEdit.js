import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Label, Input } from 'reactstrap';
import NavBar from "../common/NavBar";

const AgentEdit = () => {
    const { agentName } = useParams();
    const navigate = useNavigate();
    const [agent, setAgent] = useState(null);
    const [formData, setFormData] = useState({
        agent_name: '',
        agent_role: '',
        agent_goal: '',
        ability_name: ''
    });

    useEffect(() => {
        const fetchAgent = async () => {
            try {
                const response = await axios.get(`/agent-manager/${agentName}`);
                setAgent(response.data);
                setFormData({
                    agent_name: response.data.agent_name,
                    agent_role: response.data.agent_role,
                    agent_goal: response.data.agent_goal,
                    ability_name: response.data.ability_name
                });
            } catch (error) {
                console.error("Error fetching agent data:", error);
            }
        };

        fetchAgent();
    }, [agentName]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/agent-manager/edit`, formData);
            alert("Agent updated successfully!");  // Show success message
            navigate('/agent-manager');
        } catch (error) {
            console.error("Error updating agent:", error);
            alert("Error updating agent. Please try again.");  // Show error message
        }
    };

    return (
        <div>
            <NavBar />
            <Container>
                <h2 className="my-4">Edit Agent: {agentName}</h2>
                {agent ? (
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="agent_name">Agent Name</Label>
                            <Input
                                type="text"
                                id="agent_name"
                                value={agent.agent_name}
                                readOnly
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="created_date">Created Date</Label>
                            <Input
                                type="text"
                                id="created_date"
                                value={new Date(agent.created_date).toLocaleDateString()}
                                readOnly
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="agent_role">Agent Role</Label>
                            <Input
                                type="text"
                                id="agent_role"
                                name="agent_role"
                                value={formData.agent_role}
                                onChange={handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="agent_goal">Agent Goal</Label>
                            <Input
                                type="text"
                                id="agent_goal"
                                name="agent_goal"
                                value={formData.agent_goal}
                                onChange={handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="ability_name">Ability Name</Label>
                            <Input
                                type="text"
                                id="ability_name"
                                name="ability_name"
                                value={formData.ability_name}
                                onChange={handleChange}
                            />
                        </FormGroup>

                        <Button color="primary" type="submit">Update Agent</Button>
                    </Form>
                ) : (
                    <p>Loading agent data...</p>
                )}
            </Container>
        </div>
    );
};

export default AgentEdit;

