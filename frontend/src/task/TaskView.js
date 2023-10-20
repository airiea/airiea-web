import {Card, CardBody, CardTitle, Col, Row} from "reactstrap";

const TaskView = ({ task }) => (
    <Card style={{ padding: '20px', backgroundColor: '#f9f9f9', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <CardBody>
            <CardTitle style={{ fontSize: '1.5em', marginBottom: '20px' }} tag="h5" className="border-bottom pb-2 mb-4">Task Details</CardTitle>

            {task.task_id && (
                <Row className="mb-4">
                    <Col md={6} style={{ marginBottom: '15px' }}>
                        <strong style={{ fontSize: '1.1em' }}>Task ID:</strong>
                        <p style={{ marginLeft: '25px' }} className="text-muted">{task.task_id}</p>
                    </Col>
                </Row>
            )}

            {task.entity_id && (
                <Row className="mb-4">
                    <Col md={6} style={{ marginBottom: '15px' }}>
                        <strong style={{ fontSize: '1.1em' }}>Entity ID:</strong>
                        <p style={{ marginLeft: '25px' }} className="text-muted">{task.entity_id}</p>
                    </Col>
                </Row>
            )}

            {task.agent_name && (
                <Row className="mb-4">
                    <Col md={6} style={{ marginBottom: '15px' }}>
                        <strong style={{ fontSize: '1.1em' }}>Agent Name:</strong>
                        <p style={{ marginLeft: '25px' }} className="text-muted">{task.agent_name}</p>
                    </Col>
                </Row>
            )}

            {task.task_count && (
                <Row className="mb-4">
                    <Col md={6} style={{ marginBottom: '15px' }}>
                        <strong style={{ fontSize: '1.1em' }}>Task Count:</strong>
                        <p style={{ marginLeft: '25px' }} className="text-muted">{task.task_count}</p>
                    </Col>
                </Row>
            )}

            {task.text_input && (
                <Row className="mb-4">
                    <Col md={12} style={{ marginBottom: '15px' }}>
                        <strong style={{ fontSize: '1.1em' }}>Text Input:</strong>
                        <p style={{ marginLeft: '25px' }} className="text-muted">{task.text_input}</p>
                    </Col>
                </Row>
            )}

            {task.text_output && (
                <Row className="mb-4">
                    <Col md={12} style={{ marginBottom: '15px' }}>
                        <strong style={{ fontSize: '1.1em' }}>Text Output:</strong>
                        <p style={{ marginLeft: '25px' }} className="text-muted">{task.text_output}</p>
                    </Col>
                </Row>
            )}

            {task.status && (
                <Row className="mb-4">
                    <Col md={6} style={{ marginBottom: '15px' }}>
                        <strong style={{ fontSize: '1.1em' }}>Status:</strong>
                        <p style={{ marginLeft: '25px' }} className="text-muted">{task.status}</p>
                    </Col>
                </Row>
            )}

            {task.error_code && (
                <Row className="mb-4">
                    <Col md={6} style={{ marginBottom: '15px' }}>
                        <strong style={{ fontSize: '1.1em' }}>Error Code:</strong>
                        <p style={{ marginLeft: '25px' }} className="text-muted">{task.error_code}</p>
                    </Col>
                </Row>
            )}

            {task.error_message && (
                <Row className="mb-4">
                    <Col md={12} style={{ marginBottom: '15px' }}>
                        <strong style={{ fontSize: '1.1em' }}>Error Message:</strong>
                        <p style={{ marginLeft: '25px' }} className="text-muted">{task.error_message}</p>
                    </Col>
                </Row>
            )}

            {task.created_date && (
                <Row className="mb-4">
                    <Col md={6} style={{ marginBottom: '15px' }}>
                        <strong style={{ fontSize: '1.1em' }}>Created Date:</strong>
                        <p style={{ marginLeft: '25px' }} className="text-muted">{task.created_date}</p>
                    </Col>
                </Row>
            )}

            {task.updated_date && (
                <Row className="mb-4">
                    <Col md={6} style={{ marginBottom: '15px' }}>
                        <strong style={{ fontSize: '1.1em' }}>Updated Date:</strong>
                        <p style={{ marginLeft: '25px' }} className="text-muted">{task.updated_date}</p>
                    </Col>
                </Row>
            )}

        </CardBody>
    </Card>
);

export default TaskView;

