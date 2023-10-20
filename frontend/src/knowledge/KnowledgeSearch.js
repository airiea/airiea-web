import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Alert, Button, Container, Form, FormGroup, Input, Label, Table} from "reactstrap";
import axios from "axios";
import NavBar from "../common/NavBar";

const searchTypeOptions = [
    { value: "knowledge_id", label: "knowledge ID" },
    { value: "agent_name", label: "Agent Name" },
];

const KnowledgeTable = ({ knowledge }) => {
    if (!knowledge) return null;

    return (
        <Table striped bordered responsive>
            <thead>
            <tr>
                <th>Knowledge ID</th>
                <th>Agent Name</th>
                <th>Entity ID</th>
                <th>Updated Date</th>
                <th>Created Date</th>
            </tr>
            </thead>
            <tbody>
            {knowledge.map(knowledge => (
                <tr key={knowledge.knowledge_id}>
                    <td><Link to={`/knowledge/search/${knowledge.knowledge_id}`}>{knowledge.knowledge_id}</Link></td>
                    <td>{knowledge.entity_id}</td>
                    <td>{knowledge.agent_name}</td>
                    <td>{knowledge.updated_date}</td>
                    <td>{knowledge.created_date}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
};

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
                {knowledgeData ? <KnowledgeTable knowledge={knowledgeData} /> : <p>No knowledge found.</p>}
            </Container>
        </div>
    );
};

export default KnowledgeSearch;