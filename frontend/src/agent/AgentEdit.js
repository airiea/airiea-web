import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AgentEdit = ({ match }) => {
    const [agent, setAgent] = useState(null);
    const [updatedData, setUpdatedData] = useState({});

    useEffect(() => {
        const fetchAgent = async () => {
            try {
                const response = await axios.get(`/api/agent/${match.params.agentName}`); // Adjust this endpoint as per your backend
                setAgent(response.data);
            } catch (error) {
                console.error("Error fetching agent:", error);
            }
        };

        fetchAgent();
    }, [match.params.agentName]);

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`/api/agent/update/${match.params.agentName}`, updatedData);
            console.log("Agent updated:", response.data);
        } catch (error) {
            console.error("Error updating agent:", error);
        }
    };

    if (!agent) return <div>Loading...</div>;

    return (
        <div>
            <h2>Edit Agent: {agent.agent_name}</h2>

            <div>
                <label>Agent Role:</label>
                <input
                    type="text"
                    defaultValue={agent.agent_role}
                    onChange={(e) => setUpdatedData({ ...updatedData, agent_role: e.target.value })}
                />
            </div>
            {/* Add other fields similarly */}
            <button onClick={handleUpdate}>Update Agent</button>
        </div>
    );
};

export default AgentEdit;

