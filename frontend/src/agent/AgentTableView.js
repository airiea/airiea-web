import {Button, Table} from "reactstrap";
import {Link} from "react-router-dom";
import React from "react";
import useSortableData from "../common/UseSortableData";

const AgentTableView = ({ agents }) => {
    const { items: sortedAgents, requestSort, sortField, sortDirection } =
        useSortableData(agents, 'agent_name');

    if (!agents || agents.length === 0) return null;

    return (
        <Table striped bordered responsive>
            <thead style={{ backgroundColor: '#f5f5f5' }}>
            <tr>
                <th onClick={() => requestSort('agent_name')}>Agent Name</th>
                <th onClick={() => requestSort('agentRole')}>Agent Role</th>
            </tr>
            </thead>
            <tbody>
            {sortedAgents.map(agent => (
                <tr key={agent.agent_name}>
                    <td>
                        <Link to={`/agent/search/${agent.agent_name}`}>{agent.agent_name}</Link>
                        {' '}
                        <Link to={`/agent/edit/${agent.agent_name}`}>
                            <Button color="primary" size="sm">Edit</Button>
                        </Link>
                    </td>
                    <td>{agent.agent_role}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
};

export default AgentTableView;
