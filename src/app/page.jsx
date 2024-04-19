import React from 'react'
import style from './page.module.css'
function LoginPage() {
  return (
    <div className={style.loginPage}>
      <h1>Login</h1>
      <form action="">
        <label htmlFor="">Username</label>
        <br />
        <input type="text" />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input type="password" />
        <br />
        <div className={style.buttonContainer}>
          <label>Forgot password?</label>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage