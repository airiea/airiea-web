import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Alert, Container, Spinner} from 'reactstrap';
import {useParams} from "react-router-dom";
import NavBar from "../common/NavBar";
import AgentView from "./AgentView";

const AgentSearchByName = () => {
    const { agent_name } = useParams();
    const [agent, setAgent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAgent = async () => {
            try {
                const response = await axios.get(`/agent/search/${agent_name}`);
                setAgent(response.data);
            } catch (err) {
                setError('Error fetching the agent. Please try again.');
                console.error('Error fetching the agent:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchAgent();
    }, [agent_name]);

    return (
        <div>
            <NavBar />
            <Container className="mt-5">
                <h2 className="mb-4">Agent Details for: {agent_name}</h2>
                {loading && <div className="text-center mb-4"><Spinner color="primary" /></div>}
                {error && <Alert color="danger" className="mb-4">{error}</Alert>}
                {agent && <AgentView agent={agent} />}
            </Container>
        </div>
    );
};

export default AgentSearchByName;
