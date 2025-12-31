import React, { useState } from "react";
import "./auth.css";
import { loginUser } from "../../../utils/authUtils";

import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);


  const handleLogin = (e) => {
    e.preventDefault();

    const success = loginUser(email, password);

    if (success) {
      toast.success("Login successful 🎉");
      setRedirect(true);
    } else {
      toast.error("Invalid email or password");
    }
  };
if (redirect) {
  return <Navigate to="/" replace />;
}

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
       required />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
