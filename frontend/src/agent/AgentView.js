import {Card, CardBody, CardTitle, Col, Row} from "reactstrap";
import {FaCalendarAlt, FaCommentDots, FaPencilAlt, FaRegStar} from "react-icons/fa";

const AgentView = ({ agent }) => (
    <Card style={{ padding: '20px', backgroundColor: '#f9f9f9', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <CardBody>
            <CardTitle style={{ fontSize: '1.5em', marginBottom: '20px' }} tag="h4" className="border-bottom pb-2 mb-4">Agent Details</CardTitle>

            <Row className="mb-4">
                <Col md={6} style={{ marginBottom: '15px' }}>
                    {agent.agent_name && (
                        <>
                            <FaRegStar style={{ fontSize: '1.2em' }} className="text-primary mr-2" />
                            <strong style={{ fontSize: '1.1em' }}>Agent Name:</strong>
                            <p style={{ marginLeft: '25px' }} className="text-muted">{agent.agent_name}</p>
                        </>
                    )}
                </Col>
                <Col md={6} style={{ marginBottom: '15px' }}>
                    {agent.ability_name && (
                        <>
                            <FaRegStar style={{ fontSize: '1.2em' }} className="text-primary mr-2" />
                            <strong style={{ fontSize: '1.1em' }}>Ability Name:</strong>
                            <p style={{ marginLeft: '25px' }} className="text-muted">{agent.ability_name}</p>
                        </>
                    )}
                </Col>
            </Row>

            <Row className="mb-4">
                <Col md={6} style={{ marginBottom: '15px' }}>
                    {agent.agent_goal && (
                        <>
                            <FaCommentDots style={{ fontSize: '1.2em' }} className="text-warning mr-2" />
                            <strong style={{ fontSize: '1.1em' }}>Agent Goal:</strong>
                            <p style={{ marginLeft: '25px' }} className="text-muted">{agent.agent_goal}</p>
                        </>
                    )}
                </Col>
                <Col md={6} style={{ marginBottom: '15px' }}>
                    {agent.agent_role && (
                        <>
                            <FaPencilAlt style={{ fontSize: '1.2em' }} className="text-info mr-2" />
                            <strong style={{ fontSize: '1.1em' }}>Agent Role:</strong>
                            <p style={{ marginLeft: '25px' }} className="text-muted">{agent.agent_role}</p>
                        </>
                    )}
                </Col>
            </Row>

            <Row className="mb-4">
                <Col md={6} style={{ marginBottom: '15px' }}>
                    {agent.created_date && (
                        <>
                            <FaCalendarAlt style={{ fontSize: '1.2em' }} className="text-success mr-2" />
                            <strong style={{ fontSize: '1.1em' }}>Created Date:</strong>
                            <p style={{ marginLeft: '25px' }} className="text-muted">{agent.created_date}</p>
                        </>
                    )}
                </Col>
                <Col md={6} style={{ marginBottom: '15px' }}>
                    {agent.updated_date && (
                        <>
                            <FaCalendarAlt style={{ fontSize: '1.2em' }} className="text-success mr-2" />
                            <strong style={{ fontSize: '1.1em' }}>Updated Date:</strong>
                            <p style={{ marginLeft: '25px' }} className="text-muted">{agent.updated_date}</p>
                        </>
                    )}
                </Col>
            </Row>
        </CardBody>
    </Card>
);

export default AgentView;
