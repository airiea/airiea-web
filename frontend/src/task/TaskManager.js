import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Alert, Button, Container, Form, FormGroup, Input, Label, Table} from "reactstrap";
import axios from "axios";
import NavBar from "../common/NavBar";

const searchTypeOptions = [
    { value: "task_id", label: "Task ID" },
    { value: "entity_id", label: "Entity ID" },
];

const TaskTable = ({ tasks }) => {
    if (!tasks) return null;

    return (
        <Table striped bordered responsive>
            <thead>
            <tr>
                <th>Task ID</th>
                <th>Entity ID</th>
                <th>Updated Date</th>
                <th>Created Date</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            {tasks.map(task => (
                <tr key={task.task_id}>
                    <td><Link to={`/task-manager/${task.task_id}`}>{task.task_id}</Link></td>
                    <td>{task.entity_id}</td>
                    <td>{task.updated_date}</td>
                    <td>{task.created_date}</td>
                    <td>{task.status}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
};

const TaskManager = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('task_id');
    const [taskData, setTaskData] = useState(null);
    const [error, setError] = useState(null);

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        setTaskData(null);
        setError(null);

        const endpoints = {
            task_id: `/task-manager/${searchQuery}`,
            entity_id: `/task-manager/entity_id/${searchQuery}`
        };

        try {
            const response = await axios.get(endpoints[searchType]);
            if (response.status !== 200 || !response.data) {
                setError('Failed to retrieve tasks. Please try again later.');
                return;
            }
            setTaskData(Array.isArray(response.data) ? response.data : [response.data]);
        } catch (err) {
            setError(`Error searching for tasks: ${err.message}`);
        }
    };

    return (
        <div>
            <NavBar />
            <Container>
                <h2 className="my-4">Task Manager</h2>

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
                {taskData ? <TaskTable tasks={taskData} /> : <p>No tasks found.</p>}

                <Link to="/task-manager/plan/create">
                    <Button color="primary" className="mt-4">Create New Task Plan</Button>
                </Link>

                <Link to="/task-manager/input">
                    <Button color="primary" className="mt-4">Input New Task</Button>
                </Link>
            </Container>
        </div>
    );
};

export default TaskManager;

