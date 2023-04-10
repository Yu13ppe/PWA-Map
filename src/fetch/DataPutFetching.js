import { useState, useEffect } from 'react';
import axios from 'axios';

function DataPutFetching(endpoint, putData) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.put(`https://infotpm-backend-production.up.railway.app/${endpoint}`, putData)
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [endpoint, putData]);

  return data;
}

export default DataPutFetching;
