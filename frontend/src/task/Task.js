import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Alert, Card, CardBody, CardTitle, Col, Container, Row, Spinner} from 'reactstrap';
import axios from 'axios';
import NavBar from "../common/NavBar";

const TaskDetail = ({ task }) => (
    <Card>
        <CardBody>
            <CardTitle tag="h5">Task Details</CardTitle>
            <Row>
                <Col md={6}><strong>Task ID:</strong> {task.task_id}</Col>
                <Col md={6}><strong>Entity ID:</strong> {task.entity_id}</Col>
            </Row>
            <Row>
                <Col md={6}><strong>Agent Name:</strong> {task.agent_name}</Col>
                <Col md={6}><strong>Task Count:</strong> {task.task_count}</Col>
            </Row>
            <Row>
                <Col md={12}><strong>Text Input:</strong> {task.text_input}</Col>
            </Row>
            <Row>
                <Col md={12}><strong>Text Output:</strong> {task.text_output}</Col>
            </Row>
            <Row>
                <Col md={6}><strong>Status:</strong> {task.status}</Col>
                <Col md={6}><strong>Error Code:</strong> {task.error_code}</Col>
            </Row>
            <Row>
                <Col md={12}><strong>Error Message:</strong> {task.error_message}</Col>
            </Row>
            <Row>
                <Col md={6}><strong>Created Date:</strong> {task.created_date}</Col>
                <Col md={6}><strong>Updated Date:</strong> {task.updated_date}</Col>
            </Row>
        </CardBody>
    </Card>
);

const Task = () => {
    const { task_id } = useParams();
    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await axios.get(`/task-manager/${task_id}`);
                setTask(response.data);
            } catch (error) {
                setError('Error fetching the task details. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchTask();
    }, [task_id]);

    return (
        <div>
            <NavBar />
            <Container className="mt-4">
                <h2 className="mb-4">Task Details</h2>
                {loading && <div className="text-center"><Spinner color="primary" /></div>}
                {error && <Alert color="danger">{error}</Alert>}
                {task && <TaskDetail task={task} />}
            </Container>
        </div>
    );
};

export default Task;
