import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/login";
const LoginForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser(formData));
  };
  return (
    <form onSubmit={handleSubmit} className="loginFormOverlay">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        style={{ alignSelf: "center", margin: "10px", padding: "5px" }}
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
