import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className='text-primary text-center'>Tap water timings</h1>
      <div className="row justify-content-center">
    <div className="col-12 col-md-1 col-lg-6 mb-3 text-center">
    <div className="card text-center">
  <div className="card-header">
    <b>Ambedhkar Center</b>
  </div>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  <div className="card-footer text-body-secondary">
    2 days ago
  </div>
</div>
    </div>
    <div className="col-12 col-md-1 col-lg-6 mb-3 text-center">
    <div className="card text-center">
  <div className="card-header">
   <b> High School Centre</b>
  </div>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  <div className="card-footer text-body-secondary">
    2 days ago
  </div>
</div>
    </div>

      </div>
      <h1 className='text-primary text-center'>Drinking Water Timings & Details</h1>
      <p className='text-center'>Timings:- 24/7 Available</p>
      <pre className='text-center'>Details:-<br/>
        Each can:- 7 Rs (20 L)<br/>
        Monthly:- 210 Rs (30 Swipes)
      </pre>
    </div>
  )
}

export default Contact