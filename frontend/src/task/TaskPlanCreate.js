import React, {useState} from 'react';
import axios from 'axios';
import {Button, Col, Container, Form, FormGroup, Input, Label} from 'reactstrap';
import NavBar from "../common/NavBar";

const TaskPlanCreate = () => {
    const [data, setData] = useState({
        entity_ids: [],
        agent_name_one: null,
        agent_name_two: null,
        agent_name_three: null,
        agent_name_four: null,
        agent_name_five: null
    });

    const [entitiesInput, setEntitiesInput] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        setData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleEntitiesInputChange = (e) => {
        setEntitiesInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const entityArray = entitiesInput.split(',').map(item => item.trim());
        const updatedData = {
            ...data,
            entity_ids: entityArray
        };

        try {
            const response = await axios.post('/task/plan/create', updatedData);
            alert(response.data);
        } catch (error) {
            alert('Error creating task plan.');
        }
    };

    return (
        <div>
            <NavBar />
            <Container>
                <h2 className="my-4">Plan Task</h2>

                <Form onSubmit={handleSubmit}>

                    <FormGroup row>
                        <Label for="entities" sm={2}>Entity IDs (comma-separated)</Label>
                        <Col sm={10}>
                            <Input
                                type="text"
                                name="entities"
                                id="entities"
                                value={entitiesInput}
                                onChange={handleEntitiesInputChange}
                                placeholder="e.g., ID1, ID2, ID3"
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="agent_name_one" sm={2}>Agent Name One</Label>
                        <Col sm={10}>
                            <Input type="text" name="agent_name_one" id="agent_name_one" value={data.agent_name_one} onChange={handleChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="agent_name_two" sm={2}>Agent Name Two</Label>
                        <Col sm={10}>
                            <Input type="text" name="agent_name_two" id="agent_name_two" value={data.agent_name_two} onChange={handleChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="agent_name_three" sm={2}>Agent Name Three</Label>
                        <Col sm={10}>
                            <Input type="text" name="agent_name_three" id="agent_name_three" value={data.agent_name_three} onChange={handleChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="agent_name_four" sm={2}>Agent Name Four</Label>
                        <Col sm={10}>
                            <Input type="text" name="agent_name_four" id="agent_name_four" value={data.agent_name_four} onChange={handleChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="agent_name_five" sm={2}>Agent Name Five</Label>
                        <Col sm={10}>
                            <Input type="text" name="agent_name_five" id="agent_name_five" value={data.agent_name_five} onChange={handleChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={12}>
                            <Button type="submit" color="primary">Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    );
}

export default TaskPlanCreate;
