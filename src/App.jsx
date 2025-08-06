import React, { useState } from 'react';
import './App.css';
import image from "../public/babu.jpeg"

function App() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    // You can call an API here
    console.log("Login data:", formData);
    alert("Login Successful!");
  };

  return (
    <div className="login-container">
      <div className="photo">
        <img src={image} />
      </div>
      <h2>Rohit Tharu</h2>
      <form onSubmit={handleSubmit}>
        <label>Rohit email</label><br />
        <input 
          type="email" 
          name="email" 
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email" 
        /><br />

        <label></label><br />
        <input 
          type="password" 
          name="password" 
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password" 
        /><br />

        <button type="submit">Login</button>
        <p>Forget Username/Password?</p>
      </form>
    </div>
  );
}

export default App;
