import React from 'react'
import homeImage from '../images/home.jpg'
function Home() {
  return (
    <div style={{
      backgroundImage: `url(${homeImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '80vh',
    }}>
      
    </div>
  )
}

export default Home
