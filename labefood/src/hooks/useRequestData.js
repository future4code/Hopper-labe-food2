import { useEffect } from "react";
import { useState } from "react";
import api from "../config/api";

const useRequestedData = (endpoint, initialState) => {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [endpoint]);

  const getData = () => {
    setIsLoading(true);
    api
      .get(`${endpoint}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        alert(err.response.data.message);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
  };

  return { data, isLoading };
};

export default useRequestedData;
