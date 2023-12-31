import axios from "axios";
import { useState, useEffect } from "react";

const FetchData = (query, endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //const options = {
  //  method: "GET",
  //  url: "https://mobile-phones1.p.rapidapi.com/v1/api/search-device",
  //  params: { query: "iphone 14" },
  //  headers: {
  //    "X-RapidAPI-Key": "0c84987a30msh7c9a7a8fe6c8129p1a8237jsn44a9369933c5",
  //    "X-RapidAPI-Host": "mobile-phones1.p.rapidapi.com",
  //  },
  //};

  //const options = {
  //  method: "GET",
  //  url: "https://mobile-phones2.p.rapidapi.com/search",
  //  params: { q: "phones" },
  //  headers: {
  //    "X-RapidAPI-Key": "0c84987a30msh7c9a7a8fe6c8129p1a8237jsn44a9369933c5",
  //    "X-RapidAPI-Host": "mobile-phones2.p.rapidapi.com",
  //  },
  //};

  //const options = {
  //  method: "GET",
  //  url: "https://jsearch.p.rapidapi.com/search",
  //  params: { ...query },
  //  headers: {
  //    "X-RapidAPI-Key": "0c84987a30msh7c9a7a8fe6c8129p1a8237jsn44a9369933c5",
  //    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  //  },
  //};

  //const options = {
  //  method: "GET",
  //  url: "https://jsearch.p.rapidapi.com/search",
  //  params: { ...query },
  //  headers: {
  //    "X-RapidAPI-Key": "43bda11a03msh875edc225af5af7p1c90efjsn2d429c70453d",
  //    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  //  },
  //};
  //search"

  //\const options = {
  // method: 'GET',
  //url: 'https://jsearch.p.rapidapi.com/search',
  //params: {
  // query: 'Python developer in Texas, USA',
  //page: '1',
  // num_pages: '1'
  //},
  //headers: {
  //'X-RapidAPI-Key': 'f2ed22c331msha340fad6e2b9fb6p1ca320jsn80fbea287d81',
  //'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  // }'
  //};

  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    params: {
      ...query,
    },
    headers: {
      "X-RapidAPI-Key": "1ecc55d864msh49f7946d267e3eep134f3bjsn5d12ebb609c4",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const FetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};

export default FetchData;
