import {useState} from "react";

const useSortableData = (items, defaultSortField = "") => {
    const [sortField, setSortField] = useState(defaultSortField);
    const [sortDirection, setSortDirection] = useState('asc'); // 'asc' for ascending, 'desc' for descending

    const sortedItems = [...items].sort((a, b) => {
        const aValue = a[sortField];
        const bValue = b[sortField];

        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
    });

    const requestSort = (field) => {
        if (sortField === field) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
    };

    return { items: sortedItems, requestSort, sortField, sortDirection };
};

export default useSortableData;