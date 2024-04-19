"use client"

import React, { useState } from 'react';
import style from './page.module.css';
import { useRouter } from 'next/navigation';


function LoginPage() {

  const router = useRouter()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/user/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      const responseData = await response.json();
      console.log('Response from server:', responseData);
      localStorage.setItem('accessToken', responseData.response.accessToken);

      // Redirect to dashboard
      router.push('/dashboard/user');

    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  return (
    <div className={style.loginPage}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <div className={style.buttonContainer}>
          <label>Forgot password?</label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
