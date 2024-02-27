
import React, { useState } from 'react';
import problem from './Jsondata/Problems.json';
import PieChart1 from './PieChart1'


function Problems() {
  const [flag, setFlag] = useState(false);
  const [data, setData] = useState({});

  return (
    <div>
      <h1 className="text-primary text-center">Village Problems</h1>
      {!flag ? (
  <div className="row">
    {problem.data.map((item) => (
      <div
        key={item.id}
        className="col-12 col-md-6 col-lg-4 mb-3"
        onClick={() => { setFlag(true); }}
      >
        <div
          className={`card container`}
          style={{
            backgroundImage: `url(${require('../images/' + item.color)})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '250px',
            borderRadius: '10px',
            textAlign: 'center',
          }}
        >
          <b>{item.name}</b>
        </div>
      </div>
    ))}
  </div>
) : (
  <div style={{
    display:'flex',
    justifyContent:'center'
  }}>
    <div>
    <PieChart1/>
    </div>
    <div>
    <button className='btn btn-primary' onClick={()=>{setFlag(false)}}>Back to Prblems Menu</button>
    </div>
  </div>
)}

    </div>
  );
}

export default Problems;
