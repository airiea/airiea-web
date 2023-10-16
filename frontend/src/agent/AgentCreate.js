import React, { useState } from 'react';
import axios from 'axios';
import NavBar from "../common/NavBar";
import { Button, Container, Form, FormGroup, Input, Label, Row, Col, Alert } from 'reactstrap';

const AgentCreate = () => {
    const [agentData, setAgentData] = useState({
        agent_name: '',
        agent_role: '',
        agent_goal: '',
        ability_name: ''
    });
    const [feedback, setFeedback] = useState({ message: '', type: '' }); // for success or error feedback

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAgentData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/agent-manager/create', agentData);
            setFeedback({ message: 'Agent created successfully!', type: 'success' });
        } catch (error) {
            setFeedback({ message: 'Error creating agent. Please try again.', type: 'danger' });
        }
    };

    return (
        <div>
            <NavBar />
            <Container>
                <Row className="mb-4">
                    <Col>
                        <h2>Create New Agent</h2>
                    </Col>
                </Row>
                <Form onSubmit={handleSubmit}>
                    {Object.keys(agentData).map((key, index) => (
                        <FormGroup row key={index}>
                            <Label for={key} sm={2}>
                                {key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                            </Label>
                            <Col sm={10}>
                                <Input
                                    type="textarea"
                                    id={key}
                                    name={key}
                                    value={agentData[key]}
                                    onChange={handleChange}
                                />
                            </Col>
                        </FormGroup>
                    ))}
                    {feedback.message && (
                        <FormGroup row>
                            <Col sm={10}>
                                <Alert color={feedback.type}>
                                    {feedback.message}
                                </Alert>
                            </Col>
                        </FormGroup>
                    )}
                    <FormGroup row>
                        <Col sm={10}>
                            <Button color="primary" type="submit">Create Agent</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    );
};

export default AgentCreate;


