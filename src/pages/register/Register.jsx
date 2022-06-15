import React, { useState } from 'react'
import  axiosInstance from "../../config";
import { Link, useNavigate } from "react-router-dom";


function Register() {
    const navigate=useNavigate();
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const [error,setError]=useState(false);

    const  handleRegister=async(e)=>{
        e.preventDefault();
        setError(false);
        try{
            const res=await axiosInstance.post("/auth/register",{
                username,
                password,
                email
            });
            console.log(res.data);
            navigate("/login");
        } catch(err){

        }
    }
  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="lInput"
          onChange={e=>setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          id="email"
          className="lInput"
          onChange={e=>setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="lInput"
          onChange={e=>setPassword(e.target.value)}
        />
        <button  className="lButton" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  )
}

export default Register