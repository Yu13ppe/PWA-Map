import { useState, useEffect } from 'react';
import axios from 'axios';

function DataPostFetching(endpoint, postData) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.post(`https://infotpm-backend-production.up.railway.app/${endpoint}`, postData)
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [endpoint, postData]);

  return data;
}

export {DataPostFetching};
