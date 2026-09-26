import React, { useState } from "react";
import "./App.css";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    college: "",
    email: "",
    password: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Name is required";
        }
        break;

      case "username":
        if (value && /[A-Z]/.test(value)) {
          error = "Username must be lowercase only";
        }
        break;

      case "college":
        if (!value.trim()) {
          error = "College is required";
        }
        break;

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) {
          error = "Enter a valid email address";
        }
        break;

      case "password":
        if (value.length < 8) {
          error = "Password must be at least 8 characters";
        }
        break;

      case "address":
        if (!value.trim()) {
          error = "Address is required";
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const fieldError = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: fieldError,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Registration Successful!");
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h1 className="form-title">
          Student
          <br />
          Registration Form
        </h1>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Enter name"
              onChange={handleChange}
            />
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              placeholder="Enter username"
              onChange={handleChange}
            />
            {errors.username && (
              <span className="error-message">{errors.username}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="college">College</label>
            <input
              type="text"
              id="college"
              name="college"
              value={formData.college}
              placeholder="Enter college"
              onChange={handleChange}
            />
            {errors.college && (
              <span className="error-message">{errors.college}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Enter email"
              onChange={handleChange}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              placeholder="Enter password"
              onChange={handleChange}
            />
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              placeholder="Enter address"
              onChange={handleChange}
            />
            {errors.address && (
              <span className="error-message">{errors.address}</span>
            )}
          </div>

          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
