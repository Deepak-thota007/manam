import React from 'react';


const Admin = () => {
   

    return (
        <div className=''
            style={{
                margin: 0,
                padding: 0,
                backgroundImage: `url(${require('../images/login.jpg')})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '82vh',  // Ensure the container fills the viewport height
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
               
               
            }}>
            <div 
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '40%',
                    height: '70%',
                    margin: '10%',
                    boxSizing: 'border-box',
                    overflow: 'auto',
                    borderRadius: '30px',
                    backgroundColor: 'rgba(161,159,159,0.5)',
                    backdropFilter: 'blur(8px)',
                    
                }}>

            </div>
        </div>
    );
};

export default Admin;
