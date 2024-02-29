import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServerPush = () => {
  const [data, setData] = useState();
  const [uname, setUname] = useState('');
  const [surName, setSurName] = useState('');
  const [finalData, setFinalData] = useState({ uname: '', surName: '' });

  useEffect(() => {
    axios.get('http://localhost:2000/sample')
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleAddData = async () => {
    await axios.post('http://localhost:2000/sample', { uname, surName })
      .then((response) => {
        console.log('Data added successfully:', response.data);
        setData(response.data);
        setUname('');
        setSurName('');
      })
      .catch((error) => {
        console.error('Error adding data:', error);
        // You may want to show an error message to the user here
      });
  };
  

  return (
    <div>
      <h1>Fill the input boxes</h1>
      <input type='text' placeholder='Username...' value={uname} onChange={(e) => setUname(e.target.value)} />
      <input type='text' placeholder='Surname' value={surName} onChange={(e) => setSurName(e.target.value)} />
      <button onClick={handleAddData}>ADD</button>
      <div>
        <h2>Data from server:</h2>
        <pre>{JSON.stringify(data)}</pre>
        <h2>Final data:</h2>
        <pre>{JSON.stringify(finalData)}</pre>
      </div>
    </div>
  );
};

export default ServerPush;
