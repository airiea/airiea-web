import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Alert, Container, Spinner} from 'reactstrap';
import axios from 'axios';
import NavBar from "../common/NavBar";
import KnowledgeView from "./KnowledgeView";

const KnowledgeSearchById = () => {
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
                {knowledge && <KnowledgeView knowledge={knowledge} />}
            </Container>
        </div>
    );
};

export default KnowledgeSearchById;
