import { useState, useEffect } from "react";

const Fetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const FetchData = async () => {};

  useEffect(() => {
    FetchData();
  }, []);

  return { data, isLoading, error };
};

export default Fetch;
