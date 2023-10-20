import {Card, CardBody, CardTitle, Col, Row} from "reactstrap";
import {FaCommentDots, FaFileAlt, FaPencilAlt, FaRegStar, FaTemperatureLow} from "react-icons/fa";

const AbilityView = ({ ability }) => (
    <Card style={{ padding: '20px', backgroundColor: '#f9f9f9', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <CardBody>
            <CardTitle style={{ fontSize: '1.5em', marginBottom: '20px' }} tag="h4" className="border-bottom pb-2 mb-4">Ability Details</CardTitle>

            <Row className="mb-4">
                <Col md={12} style={{ marginBottom: '15px' }}>
                    {ability.ability_name && (
                        <>
                            <FaRegStar style={{ fontSize: '1.2em' }} className="text-primary mr-2" />
                            <strong style={{ fontSize: '1.1em' }}>Ability Name:</strong>
                            <p style={{ marginLeft: '25px' }} className="text-muted">{ability.ability_name}</p>
                        </>
                    )}
                </Col>
            </Row>

            <Row className="mb-4">
                <Col md={6} style={{ marginBottom: '15px' }}>
                    {ability.model_object && (
                        <>
                            <FaCommentDots style={{ fontSize: '1.2em' }} className="text-warning mr-2" />
                            <strong style={{ fontSize: '1.1em' }}>Model Object:</strong>
                            <p style={{ marginLeft: '25px' }} className="text-muted">{ability.model_object}</p>
                        </>
                    )}
                </Col>
                <Col md={6} style={{ marginBottom: '15px' }}>
                    {ability.model && (
                        <>
                            <FaCommentDots style={{ fontSize: '1.2em' }} className="text-warning mr-2" />
                            <strong style={{ fontSize: '1.1em' }}>Model:</strong>
                            <p style={{ marginLeft: '25px' }} className="text-muted">{ability.model}</p>
                        </>
                    )}
                </Col>
            </Row>

            <Row className="mb-4">
                <Col md={6} style={{ marginBottom: '15px' }}>
                    {ability.max_tokens && (
                        <>
                            <FaPencilAlt style={{ fontSize: '1.2em' }} className="text-info mr-2" />
                            <strong style={{ fontSize: '1.1em' }}>Max Tokens:</strong>
                            <p style={{ marginLeft: '25px' }} className="text-muted">{ability.max_tokens}</p>
                        </>
                    )}
                </Col>
                <Col md={6} style={{ marginBottom: '15px' }}>
                    {ability.temperature && (
                        <>
                            <FaTemperatureLow style={{ fontSize: '1.2em' }} className="text-success mr-2" />
                            <strong style={{ fontSize: '1.1em' }}>Temperature:</strong>
                            <p style={{ marginLeft: '25px' }} className="text-muted">{ability.temperature}</p>
                        </>
                    )}
                </Col>
            </Row>

            <Row className="mb-4">
                <Col md={6} style={{ marginBottom: '15px' }}>
                    {ability.description && (
                        <>
                            <FaFileAlt style={{ fontSize: '1.2em' }} className="text-secondary mr-2" />
                            <strong style={{ fontSize: '1.1em' }}>Description:</strong>
                            <p style={{ marginLeft: '25px' }} className="text-muted">{ability.description}</p>
                        </>
                    )}
                </Col>
                <Col md={6} style={{ marginBottom: '15px' }}>
                    {ability.response_requirement && (
                        <>
                            <strong style={{ fontSize: '1.1em' }}>Response Requirement:</strong>
                            <p style={{ marginLeft: '25px' }} className="text-muted">{ability.response_requirement}</p>
                        </>
                    )}
                </Col>
            </Row>

            <Row className="mb-4">
                <Col md={6} style={{ marginBottom: '15px' }}>
                    {ability.example_input && (
                        <>
                            <strong style={{ fontSize: '1.1em' }}>Example Input:</strong>
                            <p style={{ marginLeft: '25px' }} className="text-muted">{ability.example_input}</p>
                        </>
                    )}
                </Col>
                <Col md={6} style={{ marginBottom: '15px' }}>
                    {ability.example_output && (
                        <>
                            <strong style={{ fontSize: '1.1em' }}>Example Output:</strong>
                            <p style={{ marginLeft: '25px' }} className="text-muted">{ability.example_output}</p>
                        </>
                    )}
                </Col>
            </Row>

            <Row className="mb-4">
                <Col md={6} style={{ marginBottom: '15px' }}>
                    {ability.prompt_format && (
                        <>
                            <strong style={{ fontSize: '1.1em' }}>Prompt Format:</strong>
                            <p style={{ marginLeft: '25px' }} className="text-muted">{ability.prompt_format}</p>
                        </>
                    )}
                </Col>
                <Col md={6} style={{ marginBottom: '15px' }}>
                    {ability.response_delimiter && (
                        <>
                            <strong style={{ fontSize: '1.1em' }}>Response Delimiter:</strong>
                            <p style={{ marginLeft: '25px' }} className="text-muted">{ability.response_delimiter}</p>
                        </>
                    )}
                </Col>
            </Row>

            <Row className="mb-4">
                <Col md={6} style={{ marginBottom: '15px' }}>
                    {ability.update_type && (
                        <>
                            <strong style={{ fontSize: '1.1em' }}>Update Type:</strong>
                            <p style={{ marginLeft: '25px' }} className="text-muted">{ability.update_type}</p>
                        </>
                    )}
                </Col>
                <Col md={6} style={{ marginBottom: '15px' }}>
                    {ability.update_delimiter && (
                        <>
                            <strong style={{ fontSize: '1.1em' }}>Update Delimiter:</strong>
                            <p style={{ marginLeft: '25px' }} className="text-muted">{ability.update_delimiter}</p>
                        </>
                    )}
                </Col>
            </Row>
        </CardBody>
    </Card>
);

export default AbilityView;

