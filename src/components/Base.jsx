import React, { useState } from 'react';
import edu from './Jsondata/edu.json';

const Base = () => {
  const [query, setQuery] = useState('');
  // Function to handle input change
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  // Function to filter data based on query
  const filterData = (data) => {
    return data.filter((item) =>
      Object.values(item.details).some(value=> value.toString().toLowerCase().includes(query.toString().toLowerCase())
    )
    );
  };

  return (
    <div className="table-responsive">
      <div className='row mt-2'>
        <h2 className='col col-lg-6 col-md-6'>Educational Details</h2>
        <div className=' col col-lg-6 col-md-6  row justify-content-end'>
          <input
            type="text"
            placeholder="Search by name..."
            value={query}
            onChange={handleInputChange}
            className='col-auto' />
        </div></div>
      <br />
      <div style={{ overflow: 'scroll' }}>
        <table className='table table-striped table-hover'>
          <thead className='bg bg-dark text-white'>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Education</th>
              <th>Blood Group</th>
              <th>School/college</th>
              <th>Date Of Birth</th>
            </tr>
          </thead>
          <tbody>
            {filterData(edu.data).map((item) => (
              <tr key={item.id} className={`table table-${item.details.color}`}>
                <td>{item.id}</td>
                <td>{item.details.Name}</td>
                <td>{item.details.Education}</td>
                <td>{item.details.BG}</td>
                <td>{item.details.school}</td>
                <td>{item.details.Dob}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Base;
