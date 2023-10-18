import React, {useState} from 'react';
import axios from 'axios';
import {Button, Col, Container, Form, FormGroup, Input, Label} from 'reactstrap';
import NavBar from "../common/NavBar";

const TaskInput = () => {
    const [data, setData] = useState({
        entity_id: '',
        task_input_source: '',
        task_input_string: '',
        task_id: '',
        knowledge_id: ''
    });

    const handleChange = ({ target: { name, value } }) => {
        setData(prevState => ({ ...prevState, [name]: value }));
    };

    const validateFormData = () => {
        if (['task_text_output', 'task_embedding_output'].includes(data.task_input_source) && !data.task_id) {
            alert("Please provide a Task ID for the selected Task Input Source.");
            return false;
        }
        if (['knowledge_entry_content', 'knowledge_entry_embedding'].includes(data.task_input_source) && !data.knowledge_id) {
            alert("Please provide a Knowledge ID for the selected Task Input Source.");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateFormData()) {
            return;
        }

        try {
            const response = await axios.post('/task-manager/input', data);
            alert(response.data);
        } catch (error) {
            alert('Error inputting task event.');
        }
    };

    return (
        <div>
            <NavBar />
            <Container>
                <Form onSubmit={handleSubmit}>
                    <FormGroup row>
                        <Label for="entity_id" sm={2}>Entity ID</Label>
                        <Col sm={10}>
                            <Input type="text" name="entity_id" id="entity_id" value={data.entity_id} onChange={handleChange} />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="task_input_source" sm={2}>Task Input Source</Label>
                        <Col sm={10}>
                            <Input type="select" name="task_input_source" id="task_input_source" value={data.task_input_source} onChange={handleChange}>
                                <option value="task_text_output">task_text_output</option>
                                <option value="task_embedding_output">task_embedding_output</option>
                                <option value="knowledge_entry_content">knowledge_entry_content</option>
                                <option value="knowledge_entry_embedding">knowledge_entry_embedding</option>
                                <option value="external_input_string">external_input_string</option>
                            </Input>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="task_input_string" sm={2}>Task Input String</Label>
                        <Col sm={10}>
                            <Input type="text" name="task_input_string" id="task_input_string" value={data.task_input_string} onChange={handleChange} />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="task_id" sm={2}>Task ID</Label>
                        <Col sm={10}>
                            <Input type="text" name="task_id" id="task_id" value={data.task_id} onChange={handleChange} />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="knowledge_id" sm={2}>Knowledge ID</Label>
                        <Col sm={10}>
                            <Input type="text" name="knowledge_id" id="knowledge_id" value={data.knowledge_id} onChange={handleChange} />
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

export default TaskInput;

