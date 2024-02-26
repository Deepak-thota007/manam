import React from 'react'
import problem from './Jsondata/Problems.json'


function Problems() {
  return (
    <div>
      <div>
        <h1 className="text-primary text-center" >Village Problems</h1>
        <div className="row">
          {problem.data.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-4 mb-3">
              <div
                className={`card bg-${item.color}`}
                style={{
                  backgroundImage: `url(${require('../images/' + item.color)})`,

                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  height: '200px',
                  borderRadius: '10px',
                  textAlign: 'center',
                  color: ''
                }}
              ><b>{item.name}</b>
                <br />
                <br />
                {/* Problem:{item.problem} */}

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Problems
