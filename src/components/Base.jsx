import React from 'react'
import edu from './Jsondata/edu.json'
const Base = () => {
  return (
    <div>
      <h2>Educational Details </h2>
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
        {edu.data.map((item) => (
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
  )
}

export default Base