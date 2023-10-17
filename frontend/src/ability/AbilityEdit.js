import React, {useEffect, useState} from 'react';
import axios from 'axios';

// Reactstrap Imports
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';

import NavBar from "../common/NavBar";
import {useParams} from "react-router-dom";

const AbilityEdit = () => {
    const { ability_name } = useParams();
    const [ability, setAbility] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const editableFields = ["description", "response_requirement", "example_input", "example_output", "prompt_format"];

    useEffect(() => {
        const fetchAbility = async () => {
            try {
                const response = await axios.get(`/ability-manager/${ability_name}`);
                setAbility(response.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch ability. Please try again.");
                setLoading(false);
                console.error("Error fetching ability:", err);
            }
        };

        fetchAbility();
    }, [ability_name]);

    const handleChange = ({ target: { name, value } }) => {
        setAbility(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.put(`/ability-manager/edit/${ability_name}`, ability);
            alert(response.data);
        } catch (err) {
            alert('Error updating the ability!');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!ability) return <div>No data found!</div>;

    return (
        <div>
            <NavBar />
            <Container>
                <Row className="mb-4">
                    <Col>
                        <h2>Edit Ability</h2>
                    </Col>
                </Row>
                <Form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                    {Object.keys(ability).map((key, index) => (
                        <FormGroup row key={index}>
                            <Label for={key} sm={2}>
                                {key.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                            </Label>
                            <Col sm={10}>
                                {editableFields.includes(key) ? (
                                    <Input
                                        type="textarea"
                                        name={key}
                                        id={key}
                                        value={ability[key]}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <Input
                                        type="text"
                                        name={key}
                                        id={key}
                                        value={ability[key]}
                                        disabled
                                    />
                                )}
                            </Col>
                        </FormGroup>
                    ))}
                    <FormGroup row>
                        <Col sm={10}>
                            <Button type="submit" color="primary">Update Ability</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    );
}

export default AbilityEdit;


