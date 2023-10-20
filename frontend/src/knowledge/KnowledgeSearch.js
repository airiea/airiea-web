import React, {useState} from "react";
import {Alert, Button, Container, Form, FormGroup, Input, Label} from "reactstrap";
import axios from "axios";
import NavBar from "../common/NavBar";
import KnowledgeTableView from "./KnowledgeTableView";

const searchTypeOptions = [
    { value: "knowledge_id", label: "Knowledge ID" },
    { value: "agent_name", label: "Agent Name" },
];

const KnowledgeSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('knowledge_id');
    const [knowledgeData, setKnowledgeData] = useState(null);
    const [error, setError] = useState(null);

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        setKnowledgeData(null);
        setError(null);

        const endpoints = {
            knowledge_id: `/knowledge/search/${searchQuery}`,
            agent_name: `/knowledge/search/agent_name/${searchQuery}`
        };

        try {
            const response = await axios.get(endpoints[searchType]);
            if (response.status !== 200 || !response.data) {
                setError('Failed to retrieve knowledge. Please try again later.');
                return;
            }
            setKnowledgeData(Array.isArray(response.data) ? response.data : [response.data]);
        } catch (err) {
            setError(`Error searching for knowledge: ${err.message}`);
        }
    };

    return (
        <div>
            <NavBar />
            <Container>
                <h2 className="my-4">Knowledge Search</h2>

                <Form onSubmit={handleSearchSubmit} className="mb-4">
                    <FormGroup>
                        <Label for="searchType">Search by:</Label>
                        <Input type="select" name="searchType" value={searchType} onChange={e => setSearchType(e.target.value)}>
                            {searchTypeOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="searchQuery">Search Value:</Label>
                        <Input type="text" name="searchQuery" placeholder={`Enter ${searchType.replace("_", " ")}`} value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                    </FormGroup>
                    <Button type="submit">Search</Button>
                </Form>

                {error && <Alert color="danger" className="mt-3">{error}</Alert>}
                {knowledgeData ? <KnowledgeTableView knowledge={knowledgeData} /> : <p>No knowledge found.</p>}
            </Container>
        </div>
    );
};

export default KnowledgeSearch;