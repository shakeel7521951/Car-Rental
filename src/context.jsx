// src/contexts/ApiContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

// Create the context
const ApiContext = createContext();

// Provider component
export const ApiProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (endpoint) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(endpoint);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Optional: Fetch some default data on mount
  useEffect(() => {
    fetchData("https://testimonialapi.vercel.app/api");
  }, []);

  return (
    <ApiContext.Provider value={{ data, loading, error, fetchData }}>
      {children}
    </ApiContext.Provider>
  );
};

// Custom hook to easily access the API context
export const useApi = () => {
  return useContext(ApiContext);
};
