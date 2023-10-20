import {Table} from "reactstrap";
import {Link} from "react-router-dom";
import React from "react";
import useSortableData from "../common/UseSortableData";

const KnowledgeTableView = ({ knowledge }) => {
    const { items: sortedKnowledge, requestSort } = useSortableData(knowledge, 'knowledge_id');

    if (!knowledge || knowledge.length === 0) return null;

    return (
        <Table striped bordered responsive>
            <thead>
            <tr>
                <th onClick={() => requestSort('knowledge_id')}>Knowledge ID</th>
                <th onClick={() => requestSort('agent_name')}>Agent Name</th>
                <th onClick={() => requestSort('entity_id')}>Entity ID</th>
                <th onClick={() => requestSort('updated_date')}>Updated Date</th>
                <th onClick={() => requestSort('created_date')}>Created Date</th>
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