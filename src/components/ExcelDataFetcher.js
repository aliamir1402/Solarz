// App.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ExcelDataFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div>
      <h1>Data from MongoDB in React</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
          // Add more fields as needed
        ))}
      </ul>
    </div>
  );
}

export default ExcelDataFetcher;
