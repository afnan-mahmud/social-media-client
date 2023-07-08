import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userLogged } from "../App";

const Login = () => {
  // variables
  const { setUser } = useContext(userLogged);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");

  // Form data changing functions
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit button functions
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          setError(data.errors);
        } else if (data.data) {
          const userData = data.data.info;
          setUser({
            active: true,
            name: userData.name,
            email: userData.email,
          });
        }
      });
  };
  return (
    <>
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onBlur={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onBlur={handleChange}
            required
          />
          {error ? <p style={{ color: "red" }}>{error}</p> : ""}
          <button type="submit">Login</button>
        </form>
        <div className="signup-link">
          <Link to="/register">Register</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
