import React from 'react';
import {Container, Spinner} from 'reactstrap';
import NavBar from "../../common/NavBar";
import AgentView from "./AgentView";
import {useSearchData} from "../../common/UseSearchData";
import ErrorAlert from "../../common/ErrorAlert";
import {useParams} from "react-router-dom";

const AgentSearchByName = () => {
    const { agent_name } = useParams();
    const { data: agent, loading, error } = useSearchData(`/agent/search`, agent_name);

    return (
        <div>
            <NavBar />
            <Container className="mt-5">
                <h2 className="mb-4">Agent Details for: {agent_name}</h2>
                {loading && <div className="text-center mb-4"><Spinner color="primary" /></div>}
                <ErrorAlert message={error} />
                {agent && <AgentView agent={agent} />}
            </Container>
        </div>
    );
};

export default AgentSearchByName;