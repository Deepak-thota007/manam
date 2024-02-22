import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

  return (
    <div className='container text-center'>
      <div className='row row-3'>
        {/* <div className='col'><Link to="/home">HomePage</Link></div> */}
        <div className='col '><Link to="/base" className='text-white'>📚విద్య</Link></div>
        <div className='col'><Link to="/about" className='text-white'>🏢వైద్యం</Link></div>
        <div className='col'><Link to="/contact" className='text-white'>💦నీరు</Link></div>
        <div className='col'><Link to="/problem" className='text-white'>🤦‍♂️సమస్యలు</Link></div>
        <div className='col'><Link to="/polacy" className='text-white'>📝పఢకాలు</Link></div>
        </div>
        </div>
  )
}

export default Navbar