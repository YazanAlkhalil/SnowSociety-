import React, { useState } from 'react';

const RegistrationForm = () => {
  const [firstName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to the server
    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName,lastName, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the response from the server
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="firstName"
        value={firstName}
        onChange={(e) => setUsername(e.target.value)}
      />
        <input
        type="text"
        placeholder="lastName"
        value={lastName}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
            <input
        type="text"
        placeholder="lastName"
        value={lastName}
        onChange={(e) => setUsername(e.target.value)}
      />      <input
        type="text"
        placeholder="lastName"
        value={lastName}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;