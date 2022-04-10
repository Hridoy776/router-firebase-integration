import { getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../firebase.init';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import './Login.css'
import { useLocation, useNavigate } from 'react-router-dom';
const auth =getAuth(app)
const Login = () => {
    const [signInWithGoogle, user]=useSignInWithGoogle(auth)
    const navigate =useNavigate()
    const location = useLocation()
    let from =location?.state?.from?.pathname || "/";
    const handleSignin =()=>{
        signInWithGoogle()
        .then(()=>{
            navigate(from,{replace:true})
        })
    }
    return (
        <div>
            <h1>this is login</h1>
            <div className='google-sign-in'>
                <button onClick={handleSignin}>google sign in</button>
            </div>

            <form className='form' action="">
                <input type="email" name="" id="1" placeholder='your email' />
                <br />
                <br />
                <input type="password" name="" id="2" placeholder='your password' />
                <br />
                <br />
                <input type="submit" value="log in" />
            </form>
        </div>
    );
};

export default Login;