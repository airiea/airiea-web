import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, FormGroup, Label, Input, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import NavBar from "../common/NavBar";

const AbilityManager = () => {
    const [abilities, setAbilities] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchAbilities = async () => {
            try {
                const response = await axios.get('/ability-manager/list-all');
                setAbilities(response.data);
            } catch (error) {
                console.error("Error fetching abilities:", error);
            }
        };

        fetchAbilities();
    }, []);

    return (
        <div>
            <NavBar />
            <Container>
                <h2 className="my-4">Ability Manager</h2>

                <FormGroup>
                    <Label for="searchAbility">Search Abilities:</Label>
                    <Input
                        type="text"
                        id="searchAbility"
                        placeholder="Search abilities..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </FormGroup>

                <ListGroup>
                    {abilities
                        .filter(ability => ability.abilityName.includes(searchTerm))
                        .map(ability => (
                            <ListGroupItem key={ability.abilityName}>
                                <Link to={`/ability-edit/${ability.abilityName}`}>{ability.abilityName}</Link>
                            </ListGroupItem>
                        ))}
                </ListGroup>

                <Link to="/ability-manager/create">
                    <Button color="primary" className="mt-4">Create New Ability</Button>
                </Link>
            </Container>
        </div>
    );
};

export default AbilityManager;
