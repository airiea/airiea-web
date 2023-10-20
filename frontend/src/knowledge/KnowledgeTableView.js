import {Table} from "reactstrap";
import {Link} from "react-router-dom";
import React, {useState} from "react";

const KnowledgeTableView = ({ knowledge }) => {
    const [sortField, setSortField] = useState('knowledge_id');
    const [sortDirection, setSortDirection] = useState('asc'); // 'asc' for ascending, 'desc' for descending

    if (!knowledge || knowledge.length === 0) return null;

    const handleSort = (field) => {
        if (sortField === field) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
    };

    const sortedKnowledge = [...knowledge].sort((a, b) => {
        const aValue = a[sortField];
        const bValue = b[sortField];

        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
    });

    return (
        <Table striped bordered responsive>
            <thead>
            <tr>
                <th onClick={() => handleSort('knowledge_id')} style={{ cursor: 'pointer' }}>Knowledge ID</th>
                <th onClick={() => handleSort('agent_name')} style={{ cursor: 'pointer' }}>Agent Name</th>
                <th onClick={() => handleSort('entity_id')} style={{ cursor: 'pointer' }}>Entity ID</th>
                <th onClick={() => handleSort('updated_date')} style={{ cursor: 'pointer' }}>Updated Date</th>
                <th onClick={() => handleSort('created_date')} style={{ cursor: 'pointer' }}>Created Date</th>
            </tr>
            </thead>
            <tbody>
            {sortedKnowledge.map(k => (
                <tr key={k.knowledge_id}>
                    <td><Link to={`/knowledge/search/${k.knowledge_id}`}>{k.knowledge_id}</Link></td>
                    <td>{k.agent_name}</td>
                    <td>{k.entity_id}</td>
                    <td>{k.updated_date}</td>
                    <td>{k.created_date}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
};

export default KnowledgeTableView;
