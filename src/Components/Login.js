import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userLogged } from "../App";

const Login = () => {
  const { setUser } = useContext(userLogged);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = () => {
    setUser({ active: true });
  };
  return (
    <>
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button type="submit">{isLoading ? "Logging in..." : "Login"}</button>
        </form>
        <div className="signup-link">
          <Link to="/register">Register</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
