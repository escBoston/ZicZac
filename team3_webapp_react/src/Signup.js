import React, { Component, useEffect, useState } from "react";
import {login, useAuth, logout} from "./auth"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'

function Signup() {
  let history = useHistory();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [logged] = useAuth();

  const onSubmitClick = (e) => {
    e.preventDefault()
    console.log("You pressed submit")
    let opts = {
      'email' : email,
      'username' : username,
      'password' : password
    }
    console.log(opts)
    fetch('http://localhost:5000/api/signup', {
      method: 'post',
      body: JSON.stringify(opts)
    }).then(r => r.json())
      .then(token => {
        if (token.message === 'success') {
          console.log("signup success")
          login(token)
          history.push("/")
        }
        else {
          console.log("username taken")
        }
      })
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  return (
    <div>
    <Header />
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Email" onChange={handleEmailChange} value={email} />
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input type="username" className="form-control" placeholder="Username" onChange={handleUsernameChange} value={username}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" onChange={handlePasswordChange} value={password}/>
                </div>

                <button onClick={onSubmitClick} type="submit" className="btn btn-primary btn-block">
                  Submit
                </button>
                <p className="forgot-password text-right">
                    Already registered <a href="./Signin">sign in?</a>
                </p>
            </form>
            <Footer />
            </div>


          );
        }

        export default Signup;
