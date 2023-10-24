import React, {useState} from 'react';
import {Container, FormGroup, Input, Label} from 'reactstrap';
import NavBar from "../common/NavBar";
import AbilityTableView from "./hook/AbilityTableView";
import {useSearchData} from '../common/UseSearchData';
import ErrorAlert from "../common/ErrorAlert";

function AbilitySearchComponent() {
    const [searchTerm, setSearchTerm] = useState('');
    const { data: abilities, loading, error } = useSearchData('/ability/search/list-all', '');

    const filteredAbilities = abilities ? abilities.filter(ability => ability.ability_name.toLowerCase().includes(searchTerm.toLowerCase())) : [];

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

                <ErrorAlert message={error} />

                {loading ? <p>Loading abilities...</p> : (filteredAbilities.length > 0 ? <AbilityTableView abilities={filteredAbilities} /> : <p>No abilities found.</p>)}
            </Container>
        </div>
    );
};

export default AbilitySearchComponent;
