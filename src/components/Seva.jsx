import axios from 'axios';
import React,{useEffect, useState} from 'react'
// import sevajson from './Jsondata/seva.json'

function Seva() {
  const [query, setQuery] = useState('');
  const [sevajson,setSevaJson] = useState([]);

  useEffect(() => {
    axios.get('https://server-cnbb.onrender.com/sample')
      .then((response) => setSevaJson(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [sevajson]);
  // Function to handle input change
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  // Function to filter data based on query
  const filterData = (data) => {
    return data.filter((item) =>
      Object.values(item).some(value=> value.toString().toLowerCase().includes(query.toString().toLowerCase())
    )
    );
  };
  return (
    <div >
      <div className='row mt-2'>
        <h3 className='col col-lg-6 col-md-6'>ప్రభుత్వ అధికారుల సమాచారం</h3>
        <div className=' col col-lg-6 col-md-6  row justify-content-end'>
          <input
            type='text'
            placeholder='search.....'
            className='col-auto'
            value={query}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div style={{ overflow: 'scroll' }}>
        <table className='table table-striped table-hover'>
          <thead className='bg bg-dark text-white'>
            <tr>
              <th>s.no</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Phno</th>
              <th>Timings</th>
            </tr>
          </thead>
          <tbody>
            {filterData (sevajson).map((item) => (
              <tr key={item.id} className={`table table-${item.color}`}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.designation}</td>
                <td>{item.phno}</td>
                <td>{item.timings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Seva
