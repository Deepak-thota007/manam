import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Our Arts 😊</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/manam/base">📚 విద్య</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/manam/about">🏢 వైద్యం</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/manam/contact">💦 నీరు</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/manam/problem">🤦‍♂️ సమస్యలు</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/manam/polacy">📝 పఢకాలు</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/manam/seva">📜 సేవ</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
