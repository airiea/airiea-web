import React, {useState} from 'react';
import {
    Button,
    ButtonGroup,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap';

function SortAndPaginate({ dataList, pageSize, sortFields, renderItem }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleSortOrder = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    const sortedDataList = dataList.slice().sort((a, b) => {
        if (!sortKey) return 0;

        const comparison = a[sortKey].localeCompare(b[sortKey]);
        return sortOrder === 'asc' ? comparison : -comparison;
    });

    const total_pages = Math.ceil(sortedDataList.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const dataListOnPage = sortedDataList.slice(startIndex, endIndex);

    return (
        <div className="sort-and-paginate mt-4">
            <div className="mb-4 d-flex align-items-center justify-content-start">
                <ButtonGroup>
                    <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)}>
                        <DropdownToggle caret className="mr-2">
                            Sort By: {sortKey || "Choose..."}
                        </DropdownToggle>
                        <DropdownMenu>
                            {sortFields.map(field => (
                                <DropdownItem key={field} onClick={() => setSortKey(field)}>
                                    {field.replace(/_/g, ' ').charAt(0).toUpperCase() + field.slice(1)}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                    <Button color={sortOrder === 'asc' ? 'success' : 'info'} onClick={toggleSortOrder}>
                        {sortOrder === 'asc' ? "Ascending" : "Descending"}
                    </Button>
                </ButtonGroup>
            </div>

            <div className="mb-4">
                {dataListOnPage.map(item => renderItem(item))}
            </div>

            <div className="d-flex justify-content-center">
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
                    <PaginationItem disabled={endIndex >= sortedDataList.length}>
                        <PaginationLink next onClick={() => setCurrentPage(currentPage + 1)} />
                    </PaginationItem>
                </Pagination>
            </div>
        </div>
    );
}

export default SortAndPaginate;


