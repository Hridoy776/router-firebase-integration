import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';



const auth = getAuth(app)

const Home = () => {
    const [user]=useAuthState(auth)
    return (
        <div>
            <p>this is home</p>
            <p>{user?.displayName}</p>
        </div>
    );
};

export default Home;