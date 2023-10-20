import React, {useState} from 'react';
import axios from 'axios';
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import NavBar from "../common/NavBar";

const AbilityCreate = () => {
    const [ability, setAbility] = useState({
        ability_name: '',
        model: null,
        model_object: null,
        max_tokens: null,
        temperature: null,
        description: '',
        response_requirement: '',
        response_delimiter: '',
        example_input: '',
        example_output: '',
        prompt_format: '',
        update_type: null,
        update_delimiter: null
    });

    const allModelsList = {
        "embedding": ["text-embedding-ada-002"],
        "chat.completion": ["gpt-3.5-turbo", "gpt-4", "gpt-3.5-turbo-16k"],
        "completion": ["gpt-3.5-turbo", "gpt-4", "gpt-3.5-turbo-16k"],
        "answer.question": ["gpt-3.5-turbo", "gpt-4"],
        "knowledge.content.enrichment": []
    };

    const modelObjectsList = ["embedding", "chat.completion", "completion", "answer.question", "knowledge.content.enrichment"];
    const updateTypeList = [null, "incremental_update", "complete_update"];

    const modelsList = allModelsList[ability.model_object] || [];

    const handleChange = ({ target: { name, value } }) => {
        setAbility(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('/ability/create', ability);
            alert(response.data);
        } catch (error) {
            alert('Error creating ability!');
        }
    }

    const renderField = (key) => {
        const label = key.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
        const isChatOrCompletion = ['chat.completion', 'completion'].includes(ability.model_object);

        switch (key) {
            case "ability_name":
                return <Input type="text" name={key} value={ability[key]} onChange={handleChange} />;
            case "response_delimiter":
                return <Input type="text" name={key} value={ability[key]} onChange={handleChange} disabled={!isChatOrCompletion} />;
            case "model_object":
            case "model":
            case "update_type":
                const options = key === "model_object" ? modelObjectsList : key === "model" ? modelsList : updateTypeList;
                return (
                    <Input type="select" name={key} value={ability[key]} onChange={handleChange}>
                        {options.map((option, idx) => (
                            <option key={idx} value={option || ""}>
                                {option || "None"}
                            </option>
                        ))}
                    </Input>
                );
            case "max_tokens":
            case "temperature":
                return <Input type="number" name={key} max={key === "max_tokens" ? 16000 : 1} min={key === "max_tokens" ? 20 : 0} step={key === "temperature" ? "0.01" : undefined} value={ability[key]} onChange={handleChange} />;
            case "example_input":
            case "example_output":
                return <Input type="textarea" name={key} value={ability[key]} onChange={handleChange} />;
            case "update_delimiter":
                return <Input type="text" name={key} value={ability[key]} onChange={handleChange} disabled={ability.update_type !== "incremental_update"} />;
            case "description":
            case "response_requirement":
            case "prompt_format":
                return <Input type="textarea" name={key} value={ability[key]} onChange={handleChange} disabled={!isChatOrCompletion} />;
            default:
                return <Input type="text" name={key} value={ability[key]} disabled onChange={handleChange} />;
        }
    };

    return (
        <div>
            <NavBar />
            <Container>
                <Row className="mb-4">
                    <Col>
                        <h2>Create a New Ability</h2>
                    </Col>
                </Row>
                <Form onSubmit={e => { e.preventDefault(); handleSubmit(); }}>
                    {Object.keys(ability).map((key, index) => (
                        <FormGroup row key={index}>
                            <Label for={key} sm={2}>
                                {key.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                            </Label>
                            <Col sm={10}>
                                {renderField(key)}
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

export default AbilityCreate;

