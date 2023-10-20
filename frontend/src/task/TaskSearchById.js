import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Alert, Container, Spinner} from 'reactstrap';
import axios from 'axios';
import NavBar from "../common/NavBar";
import TaskView from "./TaskView";

const TaskSearchById = () => {
    const { task_id } = useParams();
    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await axios.get(`/task/search/${task_id}`);
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
                {task && <TaskView task={task} />}
            </Container>
        </div>
    );
};

export default TaskSearchById;
