import React from 'react';
import homeImage from '../images/home.jpg';
import './cssFolder/home.css'
function Home() {
  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-md-12 p-0">
          <div 
            className="home-image"
            style={{
              backgroundImage: `url(${homeImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '80vh',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
