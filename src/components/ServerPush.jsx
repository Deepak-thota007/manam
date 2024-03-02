import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServerPush = () => {
  const [data, setData] = useState();
  const [userData, setUserData] = useState({ name: '', designation: '', phno: '', timings: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleAddData = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    await axios.post('https://server-cnbb.onrender.com/sample', userData)
      .then((response) => {
        console.log('Data added successfully:', response.data);
        setData(response.data);
        setUserData({ name: '', designation: '', phno: '', timings: '' }); // Reset all fields
      })
      .catch((error) => {
        console.error('Error adding data:', error);
        // You may want to show an error message to the user here
      });
  };

  return (
    <div>
      <h1>Fill the input boxes</h1>
      <form onSubmit={handleAddData}>
        <input type='text' name='name' placeholder='Name...' value={userData.name} onChange={handleInputChange} /><br/>
        <input type='text' name='designation' placeholder='Officer...' value={userData.designation} onChange={handleInputChange} /><br/>
        <input type='text' name='phno' placeholder='9160XXXXXX' value={userData.phno} onChange={handleInputChange} /><br/>
        <input type='text' name='timings' placeholder='24/7...' value={userData.timings} onChange={handleInputChange} /><br/>
        <button type='submit'>ADD</button>
      </form>
    </div>
  );
};

export default ServerPush;
