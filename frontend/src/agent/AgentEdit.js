import React, {useEffect, useState} from 'react';
import axios from 'axios';

const AgentEdit = ({ match }) => {
    const [agent, setAgent] = useState(null);
    const [updatedData, setUpdatedData] = useState({});

    useEffect(() => {
        const fetchAgent = async () => {
            try {
                const response = await axios.get(`/agent-manager/${match.params.agent_name}`); // Adjust this endpoint as per your backend
                setAgent(response.data);
            } catch (error) {
                console.error("Error fetching agent:", error);
            }
        };

        fetchAgent();
    }, [match.params.agent_name]);

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`/agent_manager/edit/${match.params.agent_name}`, updatedData);
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

