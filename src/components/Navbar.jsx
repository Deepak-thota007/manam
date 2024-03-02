import React from 'react';
import { Link } from 'react-router-dom';
import './cssFolder/nav.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  ">
      <div className="container">
        <Link className="navbar-brand" to="/"><b>Our Arts 😊</b></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav"
        style={{
          background:'white',
          width:'360px',
          justifyContent:'space-between',
          display:'flex',
          padding:'5px',
          borderRadius:'22px',
          boxShadow:'2px 2px 20px rgba(0,0,0,0.3)'
        }}
        >
          <ul className="navbar-nav ml-auto" >
            
          <li className="nav-item">
              <Link className="nav-link " to="/manam/admin">Admin</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/manam/base"> Education</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/manam/about">Medical</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/manam/contact"> Water</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/manam/problem">Problems</Link>
            </li>
            <li className="nav-item"> 
              <Link className="nav-link" to="/manam/polacy">Polacies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/manam/seva"> Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
