import React, { useState,useEffect } from 'react';
// import { Redirect } from 'react-router-dom';
import loginData from './Jsondata/Login.json';
import {useNavigate} from 'react-router-dom'

const Admin = () => {
    const [passwordtype, setPasswordType] = useState('password');
    const [icon, setIcon] = useState('eye-slash');
    const [uname, setUname] = useState('');
    const [avatar, setAvatar] = useState('User');
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [redirectTo, setRedirectTo] = useState('');
    const navigate = useNavigate();
    const [upassword,setUpassword] = useState('')
    const [password,setPassword] = useState('')

    const usernames = loginData.data.map(item => item.uname.toLowerCase());

    const handleLogin = (e) => {
        e.preventDefault()
        const foundUser = uname.toLowerCase() && usernames.includes(uname.toLowerCase());
        if (foundUser) {
            // setIsLoggedIn(true);
            setRedirectTo('/manam/Operations'); // Redirect to the dashboard after successful login
        } else {
            console.log('User not found');
        }
        if(foundUser){
            const index = loginData.data.findIndex(item => item.uname.toLowerCase() === uname.toLowerCase());
           setPassword(loginData.data[index]['password'])
          
        }
        
    };
    useEffect(() => {
        if (redirectTo && upassword === password) {
            navigate(redirectTo);
        }
    }, [redirectTo, upassword, password, navigate]);

   
    return (
        <div className='' style={{
            margin: 0,
            padding: 0,
            backgroundImage: `url(${require('../images/login.jpg')})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{
                width: '80%',
                maxWidth: '600px',
                height: '70%',
                boxSizing: 'border-box',
                overflow: 'auto',
                borderRadius: '30px',
                backgroundColor: 'rgba(161,159,159,0.5)',
                backdropFilter: 'blur(8px)',
                textAlign: 'center',
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }} >
                    <div
                        style={{
                            backgroundImage: `url(${require('../images/' + avatar + '.jpg')})`,
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
                    <form onSubmit={(e) => { e.preventDefault(); handleLogin(e); }}>
                        <div className="form-group mx-5 my-5">
                            <input
                                type="text"
                                className="form-control"
                                style={{ borderRadius: '20px' }}
                                placeholder="Enter email"
                                onChange={(e) => { setUname(e.target.value); }}
                            />
                        </div>
                        <div className="form-group mx-5 my-5" style={{ position: 'relative' }}>
                            <input
                                type={passwordtype}
                                className="form-control"
                                style={{ borderRadius: '20px' }}
                                id="exampleInputPassword1"
                                placeholder="Password"
                                onMouseOver={() => {
                                    const foundUser = uname && usernames.find(item => item.toLowerCase() === uname.toLowerCase());
                                    if (foundUser) {
                                        setAvatar(foundUser.toLowerCase());
                                        console.log(avatar);
                                    } else {
                                        console.log('User not found');
                                    }
                                }}
                                onChange = {(e)=>setUpassword(e.target.value)}
                                required
                            />
                            <i style={{
                                position: 'absolute',
                                right: '10px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer'
                            }} className={`bi bi-${icon}`} onClick={() => {
                                if (passwordtype !== 'password') {
                                    setPasswordType('password')
                                }
                                else {
                                    setPasswordType('text')
                                };
                                if (icon !== 'eye') {
                                    setIcon('eye')
                                }
                                else { setIcon('eye-slash') }
                            }}
                            required></i>
                        </div>

                        <button type="submit" className="btn btn-primary my-1 px-5 btn-lg" style={{ borderRadius: '20px' }} 
                        >Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;
