import NavBar from "../common/NavBar";
import React, {Component} from "react";
import JsonObjectViewer from "../common/JsonObjectViewer";
import TaskSortAndPaginate from "./TaskSortAndPaginate";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';


class TaskSearch extends Component {
    state = {
        searchQuery: '', // For task details
        searchType: 'task_id', // Default search type
        taskList: null, // List of Task
        error: null,
    };

    handleSearchChange = (event, field) => {
        this.setState({ [field]: event.target.value });
    };

    handleSearchTypeChange = (event) => {
        this.setState({ searchType: event.target.value });
    };

    handleSearchSubmit = async (event, field) => {
        event.preventDefault();
        this.setState({ [field]: null, error: null });

        try {
            const response = await fetch(`/task-search/${this.state[field]}`);
            if (!response.ok) {
                const errorData = await response.json();
                this.setState({ error: errorData });
                throw new Error(errorData);
            }

            const data = await response.json();
            this.setState({ taskList: data });
        } catch (error) {
            console.error('Error searching for tasks:', error);
        }
    };

    render() {
        const { searchQuery, searchType, error, taskList } = this.state;

        const searchTypeOptions = [
            { value: 'task_id', label: 'Task ID' },
            { value: 'entity_id', label: 'Entity ID' },
            { value: 'agent_name', label: 'Agent Name' },
            { value: 'status', label: 'Status' },
            // Add more search types and labels as needed
        ];

        return (
            <Container>
                <NavBar />
                <Row>
                    <Col sm="6">
                        <Form onSubmit={(event) => this.handleSearchSubmit(event, 'searchQuery')}>
                            <FormGroup>
                                <Label for="searchQuery">Search by:</Label>
                                <Input
                                    type="select"
                                    name="searchType"
                                    id="searchType"
                                    value={searchType}
                                    onChange={this.handleSearchTypeChange}
                                >
                                    {searchTypeOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type="text"
                                    id="searchQuery"
                                    placeholder={`Enter ${searchTypeOptions.find((option) => option.value === searchType)?.label || 'Task ID'}`}
                                    value={searchQuery}
                                    onChange={(event) => this.handleSearchChange(event, 'searchQuery')}
                                />
                            </FormGroup>
                            <Button type="submit">Search</Button>
                        </Form>
                    </Col>
                </Row>
                {error ? (
                    <Row>
                        <Col>
                            <JsonObjectViewer jsonObject={error} />
                        </Col>
                    </Row>
                ) : taskList ? (
                    <Row>
                        <Col>
                            <TaskSortAndPaginate taskList={taskList} pageSize={200} />
                        </Col>
                    </Row>
                ) : null}
            </Container>
        );
    }
}
export default TaskSearch;