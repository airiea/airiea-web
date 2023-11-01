import {Table} from "reactstrap";
import {Link} from "react-router-dom";
import React from "react";
import useSortableData from "../../common/UseSortableData";

const TaskTableView = ({ tasks }) => {
    const { items: sortedTasks, requestSort, sortField, sortDirection } = useSortableData(tasks, 'task_id');

    if (!tasks || tasks.length === 0) return null;

    return (
        <Table striped bordered responsive>
            <thead>
            <tr>
                <th onClick={() => requestSort('task_id')}>Task ID</th>
                <th onClick={() => requestSort('entity_id')}>Entity ID</th>
                <th onClick={() => requestSort('updated_date')}>Updated Date</th>
                <th onClick={() => requestSort('created_date')}>Created Date</th>
                <th onClick={() => requestSort('status')}>Status</th>
            </tr>
            </thead>
            <tbody>
            {sortedTasks.map(task => (
                <tr key={task.task_id}>
                    <td>
                        <Link to={`/task/search/${task.task_id}`}>{task.task_id}</Link>
                    </td>
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

export default TaskTableView;