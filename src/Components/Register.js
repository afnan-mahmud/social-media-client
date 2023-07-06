import React from "react";

const Register = () => {
  return (
    <>
      <div className="form-container">
        <h2>Register</h2>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            //   value={formData.name}
            //   onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            //   value={formData.email}
            //   onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            //   value={formData.password}
            //   onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            //   value={formData.confirmPassword}
            //   onChange={handleChange}
            required
          />
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
