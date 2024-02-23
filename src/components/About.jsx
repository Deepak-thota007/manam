import React from 'react';
import HospitalData from './Jsondata/Hospital.json';


const About = () => {
  return (
    <div className="container">
      <h1 className="text-primary text-center">Hospitals</h1>

      <div className="row">
        {HospitalData.data.map((item) => (
          <div
            key={item.id}
            className="col-12 col-md-6 col-lg-4 mb-3"
          >
            <div
              className={`card bg-${item.color}`}
              style={{
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '200px',
                borderRadius: '10px',
                textAlign:'center',
                color:''
              }}
            ><b>{item.name}</b>
            <br/>
            <br/>
            Doctor:{item.doctor}
            <br/>
            Address:{item.address}
            <br/>
            phno: {item.phno}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About