import React from 'react';
import { Table } from 'reactstrap';

function TaskList({ taskList }) {
    if (!taskList || taskList.length === 0) {
        return <p>No tasks found.</p>;
    }

    return (
        <div className="task-list mt-4">
            <Table striped bordered responsive>
                <caption>List of Tasks</caption>
                <thead>
                <tr>
                    <th>Task ID</th>
                    <th>Entity ID</th>
                    <th>Agent Name</th>
                    <th>Task Count</th>
                    <th>Task Input</th>
                    <th>Task Output</th>
                    <th>Status</th>
                    <th>Error Code</th>
                    <th>Error Message</th>
                    <th>Created Date</th>
                    <th>Updated Date</th>
                </tr>
                </thead>
                <tbody>
                {taskList.map((task) => (
                    <tr key={task.task_id}>
                        <td>{task.task_id}</td>
                        <td>{task.entity_id}</td>
                        <td>{task.agent_name}</td>
                        <td>{task.task_count}</td>
                        <td>{task.task_input}</td>
                        <td>{task.task_output}</td>
                        <td>{task.status}</td>
                        <td>{task.error_code}</td>
                        <td>{task.error_message}</td>
                        <td>{task.created_date}</td>
                        <td>{task.updated_date}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
}

export default TaskList;
