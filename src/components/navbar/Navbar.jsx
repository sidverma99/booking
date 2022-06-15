import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import "./navbar.css";


function Navbar() {
    const { user,dispatch } = useContext(AuthContext);
    const handleLogout=()=>{
        dispatch({type: "LOGOUT"});
    }
    return (
        <div className='navbar' >
            <div className="navContainer">
                <Link to="/" style={{color: "inherit", textDecoration: "none"}}><span className="logo"><u>Sheraton</u></span></Link>
                {user?(<div className="navItems">
                    <span className="username">{user.username}</span>
                    <Link to="/login"><button className="navButton" onClick={handleLogout}>Logout</button></Link>  
                </div>) : (<div className="navItems">
                    <Link to="/register"><button className="navButton">Register</button></Link>
                    <Link to="/login"><button className="navButton">Login</button></Link>  
                </div>)}
            </div>
        </div>
    )
}

export default Navbar