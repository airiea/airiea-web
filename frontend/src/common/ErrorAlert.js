import React from 'react';
import {Alert} from 'reactstrap';

const ErrorAlert = ({ message }) => {
    if (!message) return null;  // If there's no error message, don't render the Alert

    return (
        <Alert color="danger">
            {message}
        </Alert>
    );
}

export default ErrorAlert;