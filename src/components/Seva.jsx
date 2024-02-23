import React from 'react'
import sevajson from './Jsondata/seva.json'
function Seva() {
  return (
    <div>
      <h3>ప్రభుత్వ అధికారుల సమాచారం</h3>
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
          {sevajson.data.map((item) => (
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
  )
}

export default Seva
