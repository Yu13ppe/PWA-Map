import { useState, useEffect } from 'react';
import axios from 'axios';

function DataGetFetching(endpoint) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`https://infotpm-backend-production.up.railway.app/${endpoint}`)
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [endpoint]);

  return data;
}

export {DataGetFetching};
