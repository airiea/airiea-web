import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Alert, Card, CardBody, CardTitle, Col, Container, Row, Spinner} from 'reactstrap';
import axios from 'axios';
import NavBar from "../common/NavBar";

const KnowledgeDetails = ({ knowledge }) => (
    <Card>
        <CardBody>
            <CardTitle tag="h5">Knowledge Details</CardTitle>
            <Row>
                <Col md={6}><strong>Knowledge ID:</strong> {knowledge.knowledge_id}</Col>
                <Col md={6}><strong>Entity ID:</strong> {knowledge.entity_id}</Col>
            </Row>
            <Row>
                <Col md={6}><strong>Agent Name:</strong> {knowledge.agent_name}</Col>
            </Row>
            <Row>
                <Col md={12}><strong>Content:</strong> {knowledge.content}</Col>
            </Row>
            <Row>
                <Col md={6}><strong>Created Date:</strong> {knowledge.created_date}</Col>
                <Col md={6}><strong>Updated Date:</strong> {knowledge.updated_date}</Col>
            </Row>
        </CardBody>
    </Card>
);

const Knowledge = () => {
    const { knowledge_id } = useParams();
    const [knowledge, setKnowledge] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchKnowledge = async () => {
            try {
                const response = await axios.get(`/knowledge/search/${knowledge_id}`);
                setKnowledge(response.data);
            } catch (error) {
                setError('Error fetching the knowledge details. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchKnowledge();
    }, [knowledge_id]);

    return (
        <div>
            <NavBar />
            <Container className="mt-4">
                <h2 className="mb-4">Knowledge Details</h2>
                {loading && <div className="text-center"><Spinner color="primary" /></div>}
                {error && <Alert color="danger">{error}</Alert>}
                {knowledge && <KnowledgeDetails knowledge={knowledge} />}
            </Container>
        </div>
    );
};

export default Knowledge;
