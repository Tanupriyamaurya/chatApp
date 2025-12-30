import React from 'react'
import { Link } from "react-router-dom";
import {useState} from 'react'
import axios from "axios";
import {toast} from 'react-toastify'
const Login = () => {
  const[userInput,setUserInput]=useState({});
  const[loading,setLoading]=useState(false)
const handleInput=(e)=>{
setUserInput({
  ...userInput,[e.target.id]:e.target.value
})
}
console.log(userInput);



const handleSubmit=async(e)=>{
  e.preventDefault();
  setLoading(true);
try{
const login=await axios.post("http://localhost:3000/api/auth/login",userInput);
const data=login.data;
if (data.success === true) {
  setLoading(false)
  console.log(data.message);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      console.log("Saved to Local Storage ✅");
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }

    setLoading(false);
  } catch (error) {
    setLoading(false);
console.error(
  "Login error:",
  error.response?.status,
  error.response?.data || error.message
);
    toast.error("Login failed");
  };
}
  return (
    <div className="center-container">
      <div className="login-box">
        <h1 className="login-title">
          Login <span>Chatters</span>
        </h1>

        <form   onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              onChange={handleInput}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              onChange={handleInput}
              placeholder="Enter your password"
              required
            />
          </div>
          <button className="btn">Login</button>
        </form>
        <div className="register">
          <p className="para" >Don't Have an Account?<Link to={'/signup'}><span className="register-now">Register Now!</span></Link></p>
        </div>
        <div className='forgot-btn'>
          <p className='para1'>forgot Password? <Link to={'./'}><span className="click">Click Here </span></Link></p>
        </div>
      </div>
    </div>

  )
}

export default Login;
