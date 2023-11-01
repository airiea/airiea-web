import React from 'react';
import {useParams} from 'react-router-dom';
import {Container, Spinner} from 'reactstrap';
import NavBar from "../../common/NavBar";
import KnowledgeView from "./KnowledgeView";
import {useSearchData} from '../../common/UseSearchData';
import ErrorAlert from "../../common/ErrorAlert";

const KnowledgeSearchById = () => {
    const { knowledge_id } = useParams();

    // Utilizing the custom hook to fetch knowledge data
    const { data: knowledge, loading, error } = useSearchData(`/knowledge/search`, knowledge_id);

    return (
        <div>
            <NavBar />
            <Container className="mt-4">
                <h2 className="mb-4">Knowledge Details</h2>

                <ErrorAlert message={error} />

                {loading && <div className="text-center"><Spinner color="primary" /></div>}
                {knowledge && <KnowledgeView knowledge={knowledge} />}
            </Container>
        </div>
    );
};

export default KnowledgeSearchById;
