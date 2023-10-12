import React, {useState} from 'react';
import axios from 'axios';
import NavBar from "../common/NavBar";
import {Button, Container, Form, FormGroup, Input, Label} from 'reactstrap';

const AgentCreate = () => {
    const [agentName, setAgentName] = useState('');
    const [agentRole, setAgentRole] = useState('');
    const [agentGoal, setAgentGoal] = useState('');
    const [abilityName, setAbilityName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const agentData = {
            agent_name: agentName,
            agent_role: agentRole,
            agent_goal: agentGoal,
            ability_name: abilityName,
        };

        try {
            const response = await axios.post('/agent-manager/create', agentData);
            console.log("Agent created:", response.data);
        } catch (error) {
            console.error("Error creating agent:", error);
        }
    };

    return (
        <div>
            <NavBar />
            <Container>
                <h2 className="my-4">Create New Agent</h2>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="agentName">Agent Name:</Label>
                        <Input
                            type="text"
                            id="agentName"
                            value={agentName}
                            onChange={(e) => setAgentName(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="agentRole">Agent Role:</Label>
                        <Input
                            type="text"
                            id="agentRole"
                            value={agentRole}
                            onChange={(e) => setAgentRole(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="agentGoal">Agent Goal:</Label>
                        <Input
                            type="text"
                            id="agentGoal"
                            value={agentGoal}
                            onChange={(e) => setAgentGoal(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="abilityName">Ability Name:</Label>
                        <Input
                            type="text"
                            id="abilityName"
                            value={abilityName}
                            onChange={(e) => setAbilityName(e.target.value)}
                        />
                    </FormGroup>
                    <Button color="primary" type="submit">Create Agent</Button>
                </Form>
            </Container>
        </div>
    );
};

export default AgentCreate;
