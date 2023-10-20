import React, {memo} from "react";
import {Col, Row} from "reactstrap";

const LabeledInfo = ({ label, value, labelSize = 6, valueSize = 6 }) => (
    <Row className="mb-4">
        <Col md={labelSize} style={{ marginBottom: '15px' }}>
            <strong style={{ fontSize: '1.1em' }}>{label}:</strong>
        </Col>
        <Col md={valueSize} style={{ marginLeft: '25px' }}>
            <p className="text-muted">{value}</p>
        </Col>
    </Row>
);

export default memo(LabeledInfo);
