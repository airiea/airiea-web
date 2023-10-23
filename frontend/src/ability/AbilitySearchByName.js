import React from 'react';
import {Container} from 'reactstrap';
import {useParams} from "react-router-dom";
import NavBar from "../common/NavBar";
import AbilityView from "./AbilityView";
import {useSearchData} from "../api/UseSearchData";
import ErrorAlert from "../common/ErrorAlert";

const AbilitySearchByName = () => {
    const { ability_name } = useParams();
    const { data: searchedAbility, loading, error: searchError } = useSearchData(`/ability/search`, ability_name);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <NavBar />
            <Container className="mt-5">
                <h2 className="mb-4">Ability Details for: {ability_name}</h2>
                <ErrorAlert message={searchError} />
                {searchedAbility && <AbilityView ability={searchedAbility} />}
            </Container>
        </div>
    );
};

export default AbilitySearchByName;
