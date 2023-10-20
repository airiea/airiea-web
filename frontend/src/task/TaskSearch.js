import React, {useState} from "react";
import {Alert, Button, Container, Form, FormGroup, Input, Label, Spinner} from "reactstrap";
import axios from "axios";
import NavBar from "../common/NavBar";
import TaskTableView from "./TaskTableView";

const searchTypeOptions = [
    { value: "task_id", label: "Task ID" },
    { value: "entity_id", label: "Entity ID" },
];

const TaskSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('task_id');
    const [taskData, setTaskData] = useState(null);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearchSubmit = async (e) => {
        e.preventDefault();

        setTaskData(null);
        setError(null);
        setLoading(true);

        const endpoints = {
            task_id: `/task/search/${searchQuery}`,
            entity_id: `/task/search/entity_id/${searchQuery}`
        };

        try {
            const response = await axios.get(endpoints[searchType]);
            if (response.status !== 200 || !response.data) {
                setError('Failed to retrieve tasks. Please try again later.');
                return;
            }
            setTaskData(Array.isArray(response.data) ? response.data : [response.data]);
        } catch (error) {
            setError(`Error searching for tasks: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <NavBar />
            <Container>
                {loading && <Spinner className='my-4' />}
                <h2 className="my-4">Search Task</h2>

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
                {taskData ? <TaskTableView tasks={taskData} /> : <p>No tasks found.</p>}
            </Container>
        </div>
    );
};

export default TaskSearch;

