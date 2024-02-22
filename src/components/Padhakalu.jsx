import React from 'react'
import jsonData from './Jsondata/Polocies.json'
function Padhakalu() {
  return (
    <div>
      <h1 className='text-primary'>POLACIES</h1>
      
   
      <div className='row row-2'>
      {jsonData.data.map((item) => <div key = {item.id} className={`col bg ${item.color} gap p-2 m-2`}> <h2>{item.name}</h2>
      {item.details.Name}
        <p>Hello ......</p>
      </div>)}
      
    </div>
    </div>
  )
}

export default Padhakalu
