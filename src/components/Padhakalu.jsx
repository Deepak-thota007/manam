import React, { useState } from 'react'
import jsonData from './Jsondata/Polocies.json'
function Padhakalu() {
  const [flag, setFlag] = useState(false);
  const [data, setData] = useState({})
  return (
    <div>
      <h1 className='text-primary'>POLACIES</h1>


      <div className='row row-2'>
        {jsonData.data.map((item) => <div onClick={() => { setFlag(true); setData(item) }} key={item.id} className={`col  gap p-2 m-2`} style={{
          backgroundImage: `url(${require('../images/' + item.color)})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '100%',
          height: '200px',
        }}>

        </div>)}
      </div>
      {flag && flag === true ?
        <div class="row justify-content-center">
          <div className='Modal bg-dark text-white col-4 ' style={{ borderRadius: '10%' }}>
            <div className='modal-header bg bg-primary text-white justify-content-center ' style={{ borderRadius: '15%' }}> {data.name} </div>
            <div className="modal-body">
              Hello {data.details.Name}
            </div>
            <div className="modal-body2">{data.details.Education}</div>
            <div className='modal-footer justify-content-center'> <button onClick={() => { setFlag(false); setData({}) }} className='btn btn-lg btn-danger'>close</button></div>
          </div></div>

        : ""}
    </div>
  )
}

export default Padhakalu