import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const AppContext = createContext({});

// API configuration
// NOTE: The listed API (https://hrf-asylum-be-b.herokuapp.com/cases) is not working, so I made a mock API for now
const API_CONFIG = {
  baseURL: 'http://localhost:3001', // Change this to the real API URL when available
  endpoints: {
    fiscalSummary: '/fiscalSummary',
    citizenshipSummary: '/citizenshipSummary'
  }
};

/**
 * TODO: Ticket 2:
 * - Use axios to fetch the data
 * - Store the data
 * - Populate the graphs with the stored data
 */
const useAppContextProvider = () => {
  const [graphData, setGraphData] = useState({});
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [error, setError] = useState(null);

  // Persist data in localStorage
  useLocalStorage({ graphData, setGraphData });

  const getFiscalData = async () => {
    try {
      const response = await axios.get(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.fiscalSummary}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching fiscal data:', error);
      throw error;
    }
  };

  const getCitizenshipResults = async () => {
    try {
      const response = await axios.get(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.citizenshipSummary}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching citizenship data:', error);
      throw error; // Propagate the error instead of falling back to test data
    }
  };

  const updateQuery = async () => {
    setIsDataLoading(true);
    setError(null); // Clear any previous errors
  };

  const fetchData = async () => {
    try {
      const [fiscalData, citizenshipData] = await Promise.all([
        getFiscalData(),
        getCitizenshipResults()
      ]);

      setGraphData({
        ...fiscalData,
        citizenshipResults: citizenshipData
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message || 'Failed to fetch data');
      setGraphData({});
    } finally {
      setIsDataLoading(false);
    }
  };

  const clearQuery = () => {
    setGraphData({});
    setError(null);
  };

  const getYears = () => graphData?.yearResults?.map(({ fiscal_year }) => Number(fiscal_year)) ?? [];

  // Fetch data when loading state changes
  useEffect(() => {
    if (isDataLoading) {
      fetchData();
    }
  }, [isDataLoading]);

  return {
    graphData,
    setGraphData,
    isDataLoading,
    error,
    updateQuery,
    clearQuery,
    getYears,
  };
};

export function useAppContext() {
  return useContext(AppContext);
}

export function ProvideAppContext({ children }) {
  const contextValue = useAppContextProvider();

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
