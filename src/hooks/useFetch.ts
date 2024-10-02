import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useFetch = (url:string) => {
  const [data, setData] = useState(null);  // State for fetched data
  const [loading, setLoading] = useState(true);  // State for loading status
  const [error, setError] = useState(null);  // State for error handling

  // Fetch function
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null); // Reset error state before fetching

    try {
      const response = await axios.get(url);
      setData(response.data); // Update the data state with the response
    } catch (err:any) {
      setError(err.message); // Update the error state
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  }, [url]);

  useEffect(() => {
    fetchData(); // Fetch data on mount
  }, [fetchData]);

  return { data, loading, error, refresh: fetchData }; // Return refresh function
};

export default useFetch;