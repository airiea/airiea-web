import {Card, CardBody, CardTitle, Col, Row} from "reactstrap";

const KnowledgeView = ({ knowledge }) => (
    <Card style={{ padding: '20px', backgroundColor: '#f9f9f9', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <CardBody>
            <CardTitle style={{ fontSize: '1.5em', marginBottom: '20px' }} tag="h5" className="border-bottom pb-2 mb-4">Knowledge Details</CardTitle>

            {knowledge.knowledge_id && (
                <Row className="mb-4">
                    <Col md={12} style={{ marginBottom: '15px' }}>
                        <strong style={{ fontSize: '1.1em' }}>Knowledge ID:</strong>
                        <p style={{ marginLeft: '25px' }} className="text-muted">{knowledge.knowledge_id}</p>
                    </Col>
                </Row>
            )}

            <Row className="mb-4">
                <Col md={6} style={{ marginBottom: '15px' }}>
                    {knowledge.agent_name && (
                        <>
                            <strong style={{ fontSize: '1.1em' }}>Agent Name:</strong>
                            <p style={{ marginLeft: '25px' }} className="text-muted">{knowledge.agent_name}</p>
                        </>
                    )}
                </Col>
                <Col md={6} style={{ marginBottom: '15px' }}>
                    {knowledge.entity_id && (
                        <>
                            <strong style={{ fontSize: '1.1em' }}>Entity ID:</strong>
                            <p style={{ marginLeft: '25px' }} className="text-muted">{knowledge.entity_id}</p>
                        </>
                    )}
                </Col>
            </Row>

            {knowledge.content && (
                <Row className="mb-4">
                    <Col md={12} style={{ marginBottom: '15px' }}>
                        <strong style={{ fontSize: '1.1em' }}>Content:</strong>
                        <p style={{ marginLeft: '25px' }} className="text-muted">{knowledge.content}</p>
                    </Col>
                </Row>
            )}

            <Row className="mb-4">
                <Col md={6} style={{ marginBottom: '15px' }}>
                    {knowledge.created_date && (
                        <>
                            <strong style={{ fontSize: '1.1em' }}>Updated Date:</strong>
                            <p style={{ marginLeft: '25px' }} className="text-muted">{knowledge.created_date}</p>
                        </>
                    )}
                </Col>
                <Col md={6} style={{ marginBottom: '15px' }}>
                    {knowledge.updated_date && (
                        <>
                            <strong style={{ fontSize: '1.1em' }}>Created Date:</strong>
                            <p style={{ marginLeft: '25px' }} className="text-muted">{knowledge.updated_date}</p>
                        </>
                    )}
                </Col>
            </Row>

        </CardBody>
    </Card>
);

export default KnowledgeView;
