import React, { useState } from 'react';
import {
    Button,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Pagination,
    PaginationItem,
    PaginationLink,
    ButtonGroup
} from 'reactstrap';
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

    const total_pages = Math.ceil(sortedTaskList.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const taskListOnPage = sortedTaskList.slice(startIndex, endIndex);

    return (
        <div className="sort-and-paginate mt-4">
            <div className="mb-3 d-flex align-items-center justify-content-between">
                <ButtonGroup>
                    <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)}>
                        <DropdownToggle caret>
                            Sort By: {sortKey || "Choose..."}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => setSortKey('entity_id')}>Entity ID</DropdownItem>
                            <DropdownItem onClick={() => setSortKey('agent_name')}>Agent Name</DropdownItem>
                            <DropdownItem onClick={() => setSortKey('task_count')}>Task Count</DropdownItem>
                            <DropdownItem onClick={() => setSortKey('created_date')}>Created Date</DropdownItem>
                            <DropdownItem onClick={() => setSortKey('updated_date')}>Updated Date</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Button onClick={toggleSortOrder}>
                        Sort: {sortOrder === 'asc' ? "Ascending" : "Descending"}
                    </Button>
                </ButtonGroup>
            </div>

            <TaskList taskList={taskListOnPage} />

            <div className="mt-4 d-flex justify-content-center">
                <Pagination>
                    <PaginationItem disabled={currentPage === 1}>
                        <PaginationLink previous onClick={() => setCurrentPage(currentPage - 1)} />
                    </PaginationItem>
                    {[...Array(total_pages)].map((_, i) => (
                        <PaginationItem active={i + 1 === currentPage} key={i}>
                            <PaginationLink onClick={() => setCurrentPage(i + 1)}>
                                {i + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem disabled={endIndex >= sortedTaskList.length}>
                        <PaginationLink next onClick={() => setCurrentPage(currentPage + 1)} />
                    </PaginationItem>
                </Pagination>
            </div>
        </div>
    );
}

export default TaskSortAndPaginate;

