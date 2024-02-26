import React, { useState } from 'react';
import HospitalData from './Jsondata/Hospital.json';
import Medical from './Jsondata/Medical.json'; 
import medicalLogo from '../images/medical.jpg';
import hospitalLogo from '../images/hospital.jpg'

const About = () => {
  const [flag, setFlag] = useState(false)
  return (
    <div className="container">
      <div className='mt-5 mb-5' style={{ display: 'flex', flexWrap: 'wrap', gap: '50px' }}>
        <div className='text-center' style={{
          backgroundImage:`url(${hospitalLogo})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '200px',
          borderRadius: '10px',
          textAlign: 'center',
          // backgroundColor: 'orange',
          flexGrow: 1
        }}
          onClick={() => {
            setFlag(true);
          }}></div>
        <div className='text-center' style={{
          backgroundImage:`url(${medicalLogo})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '200px',
          borderRadius: '10px',
          textAlign: 'center',
          // backgroundColor: 'yellow',
          flexGrow: 1
        }} onClick={() => {
          setFlag(false);
        }}></div>
      </div>
      {
        flag && flag == true ?
          <div>
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
                      textAlign: 'center',
                      color: '',
                      flexGrow:1
                    }}
                  ><b>{item.name}</b>
                    <br />
                    <br />
                    Doctor:{item.doctor}
                    <br />
                    Address:{item.address}
                    <br />
                    phno: {item.phno}
                  </div>
                </div>
              ))}
            </div>
          </div>
          :
          <div>
            <h1 className="text-primary text-center" >Medical shops</h1>
            <div className="row">
              {Medical.data.map((item) => (
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
                      textAlign: 'center',
                      color: ''
                    }}
                  ><b>{item.name}</b>
                    <br />
                    <br />
                    Doctor:{item.doctor}
                    <br />
                    Address:{item.address}
                    <br />
                    phno: {item.phno}
                  </div>
                </div>
              ))}
            </div>
          </div>
      }
    </div>
  );
}

export default About