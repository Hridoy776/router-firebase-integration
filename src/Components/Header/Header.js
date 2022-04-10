import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import app from "../../firebase.init";
import useFirebase from "../../Hooks/useFirebase";
import './Header.css'
const auth =getAuth(app)
const Header = () => {
  const {user, }=useFirebase()

  return (
    <div className="heading" >
      <nav className="header">
        <Link to="/home">home</Link>
        <Link to="/products">products</Link>
        <Link to="/order">order</Link>
        
        <Link to="/register">register</Link>
        <span className="name">{user?.displayName && user.displayName}</span>
        {
           user?.uid ? <button onClick={()=>signOut(auth)}>sign out</button> : 
            <Link to="/login">login</Link>
        }
      </nav>
    </div>
  );
};

export default Header;
