import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogged } from "../App";

const Register = () => {
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(userLogged);
  const navigate = useNavigate();
  const handlePassword = (e) => {
    if (password === e.target.value) {
      setError("");
      handleChange(e);
    } else {
      setError("Password didn't match, please try again.");
    }
  };
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setUser({
            name: formData.name,
            email: formData.email,
            active: true,
          });
          navigate("/");
        } else {
          setError(data.errors);
        }
      });
  };
  return (
    <>
      <div className="form-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onBlur={handleChange}
            required
          />
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
            onBlur={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
            onChange={handlePassword}
            required
          />
          {error ? (
            <p style={{ color: "red", alignItems: "center" }}>{error}</p>
          ) : (
            ""
          )}
          <button type="submit">Register</button>
        </form>
        <br />
        <p className="login-text">
          If already have an account, <a href="/">login here</a>.
        </p>
      </div>
    </>
  );
};

export default Register;
