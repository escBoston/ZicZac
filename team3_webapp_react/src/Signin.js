import {login, useAuth, logout} from "./auth"
import Header from './components/Header';
import Footer from './components/Footer';

import React, { useEffect, useState } from "react";
import {
  Link,
  useHistory
} from "react-router-dom";

function Signin(props) {
  let history = useHistory();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [count, setCount] = useState(0);
  const [failmsg, setFailMsg] = useState('')

  const [logged] = useAuth();

  const onSubmitClick = (e)=>{
    e.preventDefault()
    let opts = {
      'username': username,
      'password': password
    }

    fetch('http://localhost:5000/api/login', {
      method: 'post',
      body: JSON.stringify(opts)
    }).then(r => r.json())
      .then(token => {
        if (token.message === 'Login accepted.'){
          localStorage.setItem('user', username)
          login(token)
          history.push("/")
        }
        else if (token.message == 'Invalid username.'){
          setFailMsg("Invalid username.")
          setCount(1);
        }
        else if (token.message == 'Incorrect password'){
          setFailMsg("Incorrect password")
          setCount(1);
        }
      })
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div className="App">
    <Header />
    <div className="container p-3 my-3 border">
        <h3>Sign In</h3>

        {!logged? <div>
        <div className="form-group">
            <label>Username</label>
            <input type="username" className="form-control"
                   placeholder="Username"
                   onChange={handleUsernameChange}
                   value={username}/>
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control"
                  placeholder="Enter password"
                  onChange={handlePasswordChange}
                  value={password}/>
        </div>
        {/*TODO: implement function for this */}
        <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
        </div>

        <button onClick={onSubmitClick} type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        {failmsg}

      {/*TODO: implement function for this */}
        <p className="forgot-password text-center">
            Forgot <a href="#">password?</a>
        </p>
        <p className="text-right">
            Don't have an account? <a href="./Signup">sign up</a>
        </p>
        </div>
        : <button onClick={() => logout()}  type="submit" className="btn btn-primary btn-block">Logout</button>}
    </div>
    <Footer />
    </div>
  )
}

export default Signin;
