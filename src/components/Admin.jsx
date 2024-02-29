import React from 'react';

const Admin = () => {

    return (
        <div
            className=''
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
            }}
        >
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
                    textAlign: 'center',
                }}
            >
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }} >
                    <div
                        style={{
                            backgroundImage: `url(${require('../images/User.jpg')})`,
                            borderRadius: '50%',
                            marginTop: '8%',
                            width: '6em',
                            height: '6em',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                    ></div>
                </div>
                <br />
                <div>
                    <form>
                        <div class="form-group mx-5 my-5">
                            <input
                                type="email"
                                class="form-control"
                                style={{ borderRadius: '20px' }}
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                            />
                        </div>
                        <div class="form-group mx-5 my-5">
                            <input
                                type="password"
                                class="form-control"
                                style={{ borderRadius: '20px' }}
                                id="exampleInputPassword1"
                                placeholder="Password"
                            />
                        </div>
                        <button type="submit" class="btn btn-primary my-4 px-5">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;
