import {Table} from "reactstrap";
import {Link} from "react-router-dom";
import React, {useState} from "react";

const TaskTableView = ({ tasks }) => {
    const [sortField, setSortField] = useState('task_id');
    const [sortDirection, setSortDirection] = useState('asc'); // 'asc' for ascending, 'desc' for descending

    if (!tasks || tasks.length === 0) return null;

    const handleSort = (field) => {
        if (sortField === field) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
    };

    const sortedTasks = [...tasks].sort((a, b) => {
        const aValue = a[sortField];
        const bValue = b[sortField];

        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
    });

    return (
        <Table striped bordered responsive style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: '#fff' }}>
            <thead style={{ backgroundColor: '#f5f5f5' }}>
            <tr>
                <th onClick={() => handleSort('task_id')} style={{ padding: '15px 10px', textAlign: 'center', cursor: 'pointer' }}>Task ID</th>
                <th onClick={() => handleSort('entity_id')} style={{ padding: '15px 10px', textAlign: 'center', cursor: 'pointer' }}>Entity ID</th>
                <th onClick={() => handleSort('updated_date')} style={{ padding: '15px 10px', textAlign: 'center', cursor: 'pointer' }}>Updated Date</th>
                <th onClick={() => handleSort('created_date')} style={{ padding: '15px 10px', textAlign: 'center', cursor: 'pointer' }}>Created Date</th>
                <th onClick={() => handleSort('status')} style={{ padding: '15px 10px', textAlign: 'center', cursor: 'pointer' }}>Status</th>
            </tr>
            </thead>
            <tbody>
            {sortedTasks.map(task => (
                <tr key={task.task_id}>
                    <td style={{ padding: '12px 10px', textAlign: 'center' }}>
                        <Link to={`/task/search/${task.task_id}`} style={{ color: '#007bff', textDecoration: 'none' }}>{task.task_id}</Link>
                    </td>
                    <td style={{ padding: '12px 10px', textAlign: 'center' }}>{task.entity_id}</td>
                    <td style={{ padding: '12px 10px', textAlign: 'center' }}>{task.updated_date}</td>
                    <td style={{ padding: '12px 10px', textAlign: 'center' }}>{task.created_date}</td>
                    <td style={{ padding: '12px 10px', textAlign: 'center' }}>{task.status}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
};

export default TaskTableView;