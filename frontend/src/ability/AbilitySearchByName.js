import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Alert, Container, Spinner} from 'reactstrap';
import {useParams} from "react-router-dom";
import NavBar from "../common/NavBar";
import AbilityView from "./AbilityView";

const AbilitySearchByName = () => {
    const { ability_name } = useParams();
    const [ability, setAbility] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAbility = async () => {
            try {
                const response = await axios.get(`/ability/search/${ability_name}`);
                setAbility(response.data);
            } catch (err) {
                setError('Error fetching the ability. Please try again.');
                console.error('Error fetching the ability:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchAbility();
    }, [ability_name]);

    return (
        <div>
            <NavBar />
            <Container className="mt-5">
                <h2 className="mb-4">Ability Details for: {ability_name}</h2>
                {loading && <div className="text-center mb-4"><Spinner color="primary" /></div>}
                {error && <Alert color="danger" className="mb-4">{error}</Alert>}
                {ability && <AbilityView ability={ability} />}
            </Container>
        </div>
    );
};

export default AbilitySearchByName;
