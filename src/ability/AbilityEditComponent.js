import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import NavBar from "../common/NavBar";
import {useParams} from "react-router-dom";
import {useSearchData} from "../common/UseSearchData";
import ErrorAlert from "../common/ErrorAlert";

function AbilityEditComponent() {
    const { ability_name } = useParams();
    const { data: searchedAbility, loading, error: searchError } = useSearchData(`/ability/search`, ability_name);

    const [editedAbility, setEditedAbility] = useState(null);
    const [updateError, setUpdateError] = useState(null);

    const editableFields = ["description", "response_requirement", "example_input", "example_output", "prompt_format"];

    useEffect(() => {
        if (searchedAbility) {
            setEditedAbility(searchedAbility);
        }
    }, [searchedAbility]);

    const handleChange = ({ target: { name, value } }) => {
        if (editedAbility) {
            setEditedAbility(prevState => ({ ...prevState, [name]: value }));
        }
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.put(`/ability/edit/${ability_name}`, editedAbility);
            alert(response.data);
        } catch (err) {
            setUpdateError('Error updating the ability. Please try again.');
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <NavBar />
            <Container>
                <Row className="mb-4">
                    <Col>
                        <h2>Edit Ability</h2>
                    </Col>
                </Row>

                <ErrorAlert message={searchError || updateError} />

                {editedAbility && (
                    <Form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                        {Object.keys(editedAbility).map((key, index) => (
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
                                            value={editedAbility[key]}
                                            onChange={handleChange}
                                        />
                                    ) : (
                                        <Input
                                            type="text"
                                            name={key}
                                            id={key}
                                            value={editedAbility[key]}
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
                )}
            </Container>
        </div>
    );
}

export default AbilityEditComponent;



