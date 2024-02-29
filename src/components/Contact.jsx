import React from 'react'
import './cssFolder/contact.css'
import PieChart from './PieChart1'

const Contact = () => {
  return (
    <div>
     <div className='contact'> <h1 className=' text-center '>Tap water timings</h1></div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-1 col-lg-6 mb-3 text-center">
          <div className="card text-center">
            <div className="card-header">
              <b>Ambedhkar Center</b>
            </div>
            <div className="card-body">
              <p className="card-text">
                Morning Timings :- 7am To 8:30am <br />
                Evening Timings :- 5pm To 6:30pm
              </p>

            </div>
          </div>
        </div>
        <div className="col-12 col-md-1 col-lg-6 mb-3 text-center">
          <div className="card text-center">
            <div className="card-header">
              <b> High School Centre</b>
            </div>
            <div className="card-body">

              <p className="card-text">
                Morning Timings :- 8:30am To 10am <br />
                Evening Timings :- 3pm To 4:30pm
              </p>

            </div>
          </div>
        </div>

      </div>
     <div className='contact2'> <h1 className='text-center'>Drinking Water Timings & Details</h1></div>
      <p className='text-center'>Timings:- 24/7 Available</p>
      <pre className='text-center'>Details:-<br />
        Each can:- 7 Rs (20 L)<br />
        Monthly:- 210 Rs (30 Swipes)
      </pre>
    </div>
  )
}

export default Contact