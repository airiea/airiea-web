import React, {useState} from 'react';
import axios from 'axios';
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import NavBar from "../common/NavBar";

const CreateAbility = () => {
    const [ability, setAbility] = useState({
        ability_name: '',
        model_object: '',
        model: '',
        max_tokens: null,
        temperature: null,
        description: '',
        response_requirement: '',
        example_input: '',
        example_output: '',
        update_type: '',
        update_delimiter: ''
    });

    const allModelsList = {
        "embedding": ["text-embedding-ada-002"],
        "chat.completion": ["gpt-3.5-turbo", "gpt-4", "gpt-3.5-turbo-16k"],
        "completion": ["gpt-3.5-turbo", "gpt-4", "gpt-3.5-turbo-16k"],
        "answer.question": ["gpt-3.5-turbo", "gpt-4"]
    };

    const modelObjectsList = ["embedding", "chat.completion", "completion", "answer.question"];
    const modelsList = allModelsList[ability.model_object] || [];
    const updateTypeList = [null, "incremental_update", "complete_update"];

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAbility(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('/ability-manager/create', ability);
            alert(response.data);
        } catch (error) {
            alert('Error creating agent!');
        }
    }

    return (
        <div>
            <NavBar />
            <Container>
                <Row className="mb-4">
                    <Col>
                        <h2>Create a New Ability</h2>
                    </Col>
                </Row>
                <Form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                    {Object.keys(ability).map((key, index) => (
                        <FormGroup row key={index}>
                            <Label for={key} sm={2}>
                                {key.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                            </Label>
                            <Col sm={10}>
                                {key === "model_object" ? (
                                    <Input type="select" name={key} value={ability[key]} onChange={handleChange}>
                                        {modelObjectsList.map((obj, idx) => (
                                            <option key={idx} value={obj}>{obj}</option>
                                        ))}
                                    </Input>
                                ) : key === "model" ? (
                                    <Input type="select" name={key} value={ability[key]} onChange={handleChange}>
                                        {modelsList.map((model, idx) => (
                                            <option key={idx} value={model}>{model}</option>
                                        ))}
                                    </Input>
                                ) : key === "max_tokens" ? (
                                    <Input
                                        type="number"
                                        name={key}
                                        id={key}
                                        value={ability[key]}
                                        onChange={handleChange}
                                        max={2048}
                                        min={20}
                                    />
                                ) : key === "temperature" ? (
                                    <Input
                                        type="number"
                                        name={key}
                                        id={key}
                                        value={ability[key]}
                                        onChange={handleChange}
                                        max={1}
                                        min={0}
                                        step="0.01" // Allows for decimal increments
                                    />
                                ) : key === "description" ? (
                                    <Input
                                        type="textarea"
                                        name={key}
                                        id={key}
                                        value={ability[key]}
                                        onChange={handleChange}
                                    />
                                ) : key === "response_requirement" ? (
                                    <Input
                                        type="textarea"
                                        name={key}
                                        id={key}
                                        value={ability[key]}
                                        onChange={handleChange}
                                    />
                                ) : key === "example_input" ? (
                                    <Input
                                        type="textarea"
                                        name={key}
                                        id={key}
                                        value={ability[key]}
                                        onChange={handleChange}
                                    />
                                ) : key === "example_output" ? (
                                    <Input
                                        type="textarea"
                                        name={key}
                                        id={key}
                                        value={ability[key]}
                                        onChange={handleChange}
                                    />
                                ) : key === "update_type" ? (
                                    <Input type="select" name={key} value={ability[key] || ""} onChange={handleChange}>
                                        {updateTypeList.map((type, idx) => (
                                            <option key={idx} value={type || ""}>
                                                {type || "None"}
                                            </option>
                                        ))}
                                    </Input>
                                ) : key === "update_delimiter" ? (
                                    <Input
                                        type="text"
                                        name={key}
                                        id={key}
                                        value={ability[key]}
                                        onChange={handleChange}
                                        disabled={ability.update_type !== "incremental_update"}
                                    />
                                ) : (
                                    <Input
                                        type="text"
                                        name={key}
                                        id={key}
                                        value={ability[key]}
                                        onChange={handleChange}
                                    />
                                )}
                            </Col>
                        </FormGroup>
                    ))}
                    <FormGroup row>
                        <Col sm={10}>
                            <Button type="submit" color="primary">Create Ability</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    );
}

export default CreateAbility;

