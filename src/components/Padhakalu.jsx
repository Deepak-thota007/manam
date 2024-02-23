import React, { useState } from 'react';
import jsonData from './Jsondata/Polocies.json';

function Padhakalu() {
  const [flag, setFlag] = useState(false);
  const [data, setData] = useState({});

  return (
    <div className="container">
      <h1 className="text-primary text-center">POLACIES</h1>

      <div className="row">
        {jsonData.data.map((item) => (
          <div
            key={item.id}
            className="col-12 col-md-6 col-lg-4 mb-3"
            onClick={() => {
              setFlag(true);
              setData(item);
            }}
          >
            <div
              className="card"
              style={{
                backgroundImage: `url(${require('../images/' + item.color)})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '200px',
                borderRadius: '10px',
              }}
            ></div>
          </div>
        ))}
      </div>

      {flag && (
        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content bg-dark text-white">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">{data.name}</h5>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={() => {
                    setFlag(false);
                    setData({});
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Hello {data.details.Name}</p>
                <p>{data.details.Education}</p>
              </div>
              <div className="modal-footer justify-content-center">
                <button type="button" className="btn btn-danger" onClick={() => setFlag(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Padhakalu;
