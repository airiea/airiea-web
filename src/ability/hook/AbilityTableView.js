import {Button, Table} from "reactstrap";
import {Link} from "react-router-dom";
import React from "react";
import useSortableData from "../../common/UseSortableData";

const AbilityTableView = ({ abilities }) => {
    const { items: sortedAbilities, requestSort, sortField, sortDirection } =
        useSortableData(abilities, 'ability_name');

    if (!abilities || abilities.length === 0) return null;

    return (
        <Table striped bordered responsive>
            <thead>
            <tr>
                <th onClick={() => requestSort('ability_name')}>Ability Name</th>
                <th onClick={() => requestSort('model_object')}>Model Object</th>
            </tr>
            </thead>
            <tbody>
            {sortedAbilities.map(ability => (
                <tr key={ability.ability_name}>
                    <td>
                        <Link to={`/ability/search/${ability.ability_name}`}>{ability.ability_name}</Link>
                        {' '}
                        <Link to={`/ability/edit/${ability.ability_name}`}>
                            <Button color="primary" size="sm">Edit</Button>
                        </Link>
                    </td>
                    <td>{ability.model_object}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
};

export default AbilityTableView;