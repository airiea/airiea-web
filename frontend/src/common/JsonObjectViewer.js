import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const JsonObjectViewer = ({ jsonObject }) => {
    if (!jsonObject || typeof jsonObject !== 'object') {
        return null;
    }

    return (
        <ListGroup>
            {Object.keys(jsonObject).map((key) => (
                <ListGroupItem key={key}>
                    <strong>{key}:</strong> {jsonObject[key]}
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};

export default JsonObjectViewer;