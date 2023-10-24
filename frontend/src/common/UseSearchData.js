import {useEffect, useState} from "react";
import axios from 'axios';

export const useSearchData = (endpoint, paramName) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = paramName ? `${endpoint}/${paramName}` : endpoint; // Conditionally append paramName
                const response = await axios.get(url);
                if (response.status === 200) {
                    setData(response.data);
                } else {
                    setError('Error fetching data. Please try again.');
                }
            } catch (err) {
                setError('Error fetching data. Please try again.');
                console.error('Error:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [endpoint, paramName]);

    return { data, loading, error };
};