import {Table} from "reactstrap";
import {Link} from "react-router-dom";
import React from "react";
import useSortableData from "../common/UseSortableData";

const AgentTableView = ({ agents }) => {
    const { items: sortedAgents, requestSort, sortField, sortDirection } = useSortableData(agents, 'agent_name');

    if (!agents || agents.length === 0) return null;

    return (
        <Table striped bordered responsive style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: '#fff' }}>
            <thead style={{ backgroundColor: '#f5f5f5' }}>
            <tr>
                <th
                    onClick={() => requestSort('agent_name')}
                    style={{ padding: '15px 10px', textAlign: 'center', cursor: 'pointer' }}
                >
                    Agent Name
                </th>
                <th
                    onClick={() => requestSort('agentRole')}
                    style={{ padding: '15px 10px', textAlign: 'center', cursor: 'pointer' }}
                >
                    Agent Role
                </th>
            </tr>
            </thead>
            <tbody>
            {sortedAgents.map(agent => (
                <tr key={agent.agent_name}>
                    <td style={{ padding: '12px 10px', textAlign: 'center' }}>
                        <Link to={`/agent/search/${agent.agent_name}`} style={{ color: '#007bff', textDecoration: 'none' }}>
                            {agent.agent_name}
                        </Link>
                    </td>
                    <td style={{ padding: '12px 10px', textAlign: 'center' }}>{agent.agent_role}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
};

export default AgentTableView;
