import React, {useState} from "react";
import NavBar from "../common/NavBar";
import TaskSortAndPaginate from "./TaskSortAndPaginate";
import {Alert, Button, Container, Form, FormGroup, Input, Label} from 'reactstrap';

const TaskSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('task_id');
    const [taskList, setTaskList] = useState(null);
    const [error, setError] = useState(null);

    const searchTypeOptions = [
        { value: 'task_id', label: 'Task ID' },
        { value: 'entity_id', label: 'Entity ID' },
        { value: 'agent_name', label: 'Agent Name' },
        { value: 'status', label: 'Status' },
        // Add more search types and labels as needed
    ];

    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        setTaskList(null);
        setError(null);

        try {
            const response = await fetch(`/task-search/task_id/${searchQuery}`);
            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData);
                throw new Error(errorData);
            }

            const data = await response.json();
            setTaskList(data);
        } catch (err) {
            console.error('Error searching for tasks:', err);
        }
    };

    return (
        <div>
            <NavBar />
            <Container>
                <h3 className="my-4">Task Search</h3>

                <Form onSubmit={handleSearchSubmit} className="mb-4">
                    <FormGroup>
                        <Label for="searchType">Search by:</Label>
                        <Input
                            type="select"
                            name="searchType"
                            id="searchType"
                            value={searchType}
                            onChange={(e) => setSearchType(e.target.value)}
                        >
                            {searchTypeOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="searchQuery">Enter Details:</Label>
                        <Input
                            type="text"
                            id="searchQuery"
                            placeholder={`Enter ${searchTypeOptions.find((option) => option.value === searchType)?.label || 'Task ID'}`}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </FormGroup>
                    <Button color="primary">Search</Button>
                </Form>

                {error ? (
                    <Alert color="danger" className="mt-3">
                        An error occurred. Please check your input and try again.
                    </Alert>
                ) : null}

                {taskList ? (
                    <TaskSortAndPaginate taskList={taskList} pageSize={200} />
                ) : null}
            </Container>
        </div>
    );
};

export default TaskSearch;
