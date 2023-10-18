import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Button, Container, FormGroup, Input, Label, ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import NavBar from "../common/NavBar";
import SortAndPaginate from "../common/SortAndPaginate";

const AbilityManager = () => {
    const [abilities, setAbilities] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchAbilities = async () => {
            try {
                const response = await axios.get('/ability-manager/list-all');
                setAbilities(response.data);
            } catch (error) {
                console.error("Error fetching abilities: ", error);
            }
        };

        fetchAbilities();
    }, []);

    const filteredAbilities = abilities.filter(ability => ability.ability_name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div>
            <NavBar />
            <Container>
                <h2 className="my-4">Ability Manager</h2>

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

                <SortAndPaginate
                    dataList={filteredAbilities}
                    pageSize={10}
                    sortFields={['ability_name']}
                    renderItem={(ability) => (
                        <ListGroupItem key={ability.ability_name}>
                            <Link to={`/ability-manager/${ability.ability_name}`}>{ability.ability_name}</Link>
                        </ListGroupItem>
                    )}
                />

                <div className="mt-4">
                    <Link to="/ability-manager/create">
                        <Button color="primary">Create New Ability</Button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default AbilityManager;
