// TaskSortAndPaginate.js

import React, { useState } from 'react';
import { Button, ButtonGroup, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import TaskList from "./TaskList";

function TaskSortAndPaginate({ taskList, pageSize }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleSortOrder = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    const sortedTaskList = taskList.slice().sort((a, b) => {
        if (!sortKey) return 0;

        const comparison = a[sortKey].localeCompare(b[sortKey]);
        return sortOrder === 'asc' ? comparison : -comparison;
    });

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const taskListOnPage = sortedTaskList.slice(startIndex, endIndex);

    return (
        <div className="sort-and-paginate">
            <div className="sorting-controls">
                <ButtonGroup>
                    <Button onClick={toggleSortOrder}>Toggle Sort Order ({sortOrder})</Button>
                    <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)}>
                        <DropdownToggle caret>
                            Sort By
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => setSortKey('entity_id')}>Entity ID</DropdownItem>
                            <DropdownItem onClick={() => setSortKey('agent_name')}>Agent Name</DropdownItem>
                            <DropdownItem onClick={() => setSortKey('task_count')}>Task Count</DropdownItem>
                            <DropdownItem onClick={() => setSortKey('created_date')}>Created Date</DropdownItem>
                            <DropdownItem onClick={() => setSortKey('updated_date')}>Updated Date</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </ButtonGroup>
            </div>
            <TaskList taskList={taskListOnPage} />
            <div className="pagination-controls">
                <Button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous Page
                </Button>
                <span>Page {currentPage}</span>
                <Button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={endIndex >= sortedTaskList.length}
                >
                    Next Page
                </Button>
            </div>
        </div>
    );
}

export default TaskSortAndPaginate;
