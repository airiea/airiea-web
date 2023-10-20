import {Table} from "reactstrap";
import {Link} from "react-router-dom";
import React, {useState} from "react";

const AbilityTableView = ({ abilities }) => {
    const [sortField, setSortField] = useState('ability_name');  // default sort by ability_name
    const [sortDirection, setSortDirection] = useState('asc'); // 'asc' for ascending, 'desc' for descending

    if (!abilities || abilities.length === 0) return null;

    const handleSort = (field) => {
        if (sortField === field) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
    };

    const sortedAbilities = [...abilities].sort((a, b) => {
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
                    onClick={() => handleSort('ability_name')}
                    style={{ padding: '15px 10px', textAlign: 'center', cursor: 'pointer' }}
                >
                    Ability Name
                </th>
                <th
                    onClick={() => handleSort('model_object')}
                    style={{ padding: '15px 10px', textAlign: 'center', cursor: 'pointer' }}
                >
                    Model Object
                </th>
            </tr>
            </thead>
            <tbody>
            {sortedAbilities.map(ability => (
                <tr key={ability.ability_name}>
                    <td style={{ padding: '12px 10px', textAlign: 'center' }}>
                        <Link to={`/ability/${ability.ability_name}`} style={{ color: '#007bff', textDecoration: 'none' }}>
                            {ability.ability_name}
                        </Link>
                    </td>
                    <td style={{ padding: '12px 10px', textAlign: 'center' }}>{ability.model_object}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
};

export default AbilityTableView;