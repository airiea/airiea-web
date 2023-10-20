import {Table} from "reactstrap";
import {Link} from "react-router-dom";
import React, {useState} from "react";

const AgentTableView = ({ agents }) => {
    const [sortField, setSortField] = useState('agent_name');  // default sort by agent_name
    const [sortDirection, setSortDirection] = useState('asc'); // 'asc' for ascending, 'desc' for descending

    if (!agents || agents.length === 0) return null;

    const handleSort = (field) => {
        if (sortField === field) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
    };

    const sortedAgents = [...agents].sort((a, b) => {
        const aValue = a[sortField];
        const bValue = b[sortField];

        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
    });

    return (
        <Table striped bordered responsive style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: '#fff' }}>
            <thead style={{ backgroundColor: '#f5f5f5' }}>
            <tr>
                <th
                    onClick={() => handleSort('agent_name')}
                    style={{ padding: '15px 10px', textAlign: 'center', cursor: 'pointer' }}
                >
                    Agent Name
                </th>
                <th
                    onClick={() => handleSort('agentRole')}
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
