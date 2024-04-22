"use client"

import React, { useState } from 'react';
import style from './page.module.css';
import { useRouter } from 'next/navigation';
// import { loginImage } from '../assets/images/login.jpg'
// import Image from 'next/image';

function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [adminError, setAdminError] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false)
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if username or password is empty
    if (!username || !password) {
      setLoginError(true);
      return;
    }

    try {
      const response = await fetch('http://anirudhmk123.pythonanywhere.com/api/v1/user/login/', {
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
        setPasswordError(true)
        throw new Error('Failed to login');
      }

      const responseData = await response.json();

      if (!responseData.response[1].is_admin) {
        localStorage.setItem('accessToken', responseData.response[0].accessToken);
        router.push('/dashboard/user');
      } else {
        setAdminError(true);
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  return (
    <div className={style.mainPage}>
      <div className={style.loginPage}>
        <img src="/login.jpg" alt="" />
        <div>
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
            {loginError && <p className='error'>Enter username and password</p>}
            {passwordError && <p className='error'>Invalid username or password</p>}
            {adminError && <p className='error'>Admin privilege denied</p>}
            <div className={style.buttonContainer}>
              <label>Forgot password?</label>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
