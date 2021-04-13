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
  const [failmsg, setFailMsg] = useState('')

  const [logged] = useAuth();

  const onSubmitClick = (e) => {
    e.preventDefault()

    if (!username || !password || !email) {
        return alert('fill all the fields first!')
    }

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
        else if (token.message == 'username taken') {
          setFailMsg("username taken")
        }
        else if (token.message == 'password requirements not met') {
          setFailMsg("password requirements not met!")
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
        <div className="container p-3 my-3 border" style={{width: '400px', height: "400px"}}>
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
                <p>length should be 8 to 21, with upper and lower alphabet, numeral, and special symbol including "*", "&", "$", "#", "!", and "@".</p>
                {failmsg}
                <button onClick={onSubmitClick} type="submit" className="btn btn-primary btn-block">
                  Submit
                </button>
                <p className="forgot-password text-right">
                    Already registered <a href="./Signin">sign in?</a>
                </p>
            </form>
            </div>
            <Footer />
            </div>


          );
        }

        export default Signup;
