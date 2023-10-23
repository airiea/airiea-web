import React from 'react';
import {useParams} from 'react-router-dom';
import {Container, Spinner} from 'reactstrap';
import NavBar from "../common/NavBar";
import TaskView from "./TaskView";
import {useSearchData} from '../api/UseSearchData'; // Make sure this path is correct.
import ErrorAlert from "../common/ErrorAlert"; // Make sure this path is correct.

const TaskSearchById = () => {
    const { task_id } = useParams();

    // Using our custom hook to fetch task data.
    const { data: task, loading, error } = useSearchData(`/task/search`, task_id);

    return (
        <div>
            <NavBar />
            <Container className="mt-4">
                <h2 className="mb-4">Task Details</h2>
                {loading && <div className="text-center"><Spinner color="primary" /></div>}
                <ErrorAlert message={error} />
                {task && <TaskView task={task} />}
            </Container>
        </div>
    );
};

export default TaskSearchById;
