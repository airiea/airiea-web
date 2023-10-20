import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Alert, Container, FormGroup, Input, Label} from 'reactstrap';
import NavBar from "../common/NavBar";
import AbilityTableView from "./AbilityTableView";

const AbilitySearch = () => {
    const [abilities, setAbilities] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAbilities = async () => {
            try {
                const response = await axios.get('/ability/search/list-all');
                if (response.status !== 200 || !response.data) {
                    setError('Failed to retrieve abilities. Please try again later.');
                    return;
                }
                setAbilities(response.data);
            } catch (error) {
                setError(`Error listing for abilities: ${error.message}`);
            }
        };

        fetchAbilities();
    }, []);

    const filteredAbilities = abilities.filter(ability => ability.ability_name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div>
            <NavBar />
            <Container>
                <h2 className="my-4">Search Abilities</h2>

                <FormGroup className="mb-4">
                    <Label for="searchAbility">Search Abilities:</Label>
                    <Input
                        type="text"
                        id="searchAbility"
                        placeholder="Search abilities..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </FormGroup>

                {error && <Alert color="danger" className="mt-3">{error}</Alert>}
                {filteredAbilities.length > 0 ? <AbilityTableView abilities={filteredAbilities} /> : <p>No abilities found.</p>}

            </Container>
        </div>
    );
};

export default AbilitySearch;

