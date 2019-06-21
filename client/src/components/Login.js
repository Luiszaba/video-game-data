import React from 'react'

const Login = ({handleLoginFormChange, handleLoginFormSubmit, email, password}) => {
  return(
    <div className="Login">
    <form onSubmit={handleLoginFormSubmit}>
    <input
    type="text"
    name="email"
    onChange={handleLoginFormChange}
    value={email}
    /><br />
    <input
    type="password"
    name="password"
    onChange={handleLoginFormChange}
    value={password}

    /><br />
    <input
    type="submit"
    value="Login"
    />
    </form>
    </div>
  )
}

export default Login
