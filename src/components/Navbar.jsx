import React from 'react';
import { Link } from 'react-router-dom';
import './cssFolder/nav.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info"
      style={{
        borderRadius:'5px',
        
      }}>
      <div className="container">
        <Link className="navbar-brand" to="/manam"><span className='text-white'>Mana Kakulapadu <i className="bi-house-check-fill"></i></span></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" >
              <Link className="nav-link" to="/manam/admin"><i className="bi-person-check"> </i>Admin</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/manam/base"><i className="bi-journal-text"> </i> Education</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/manam/about"> <i className="bi-heart-pulse-fill"> </i> Medical</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/manam/contact"><i className="bi-water"> </i> Water</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/manam/problem"> <i className="bi-clipboard2-data"> </i>Problems</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/manam/polacy"> <i className="bi-bookmarks"> </i>Policies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/manam/seva"><i className="bi-tools"> </i>Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
