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
                height: '100vh',  // Ensure the container fills the viewport height
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <div 
                style={{
                    width: '80%', // Adjust the width to 80% of the parent container
                    maxWidth: '600px', // Set maximum width for larger screens
                    height: '70%', // Set height to 70% of the parent container
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
