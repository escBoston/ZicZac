import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Redirect, BrowserRouter, Switch, Route , HashRouter} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import React, { Component } from "react";
import axios from "axios"


export default class ContactUs extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        email: '',
        message: ''
      }
  }

  handleSubmit(e) {
      e.preventDefault();
        axios({
          method: "POST",
          url:"http://localhost:5000/contact",
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success'){
              alert("Message Sent.");
              this.resetForm()
          }else if(response.data.status === 'fail'){
              alert("Message failed to send.")
          }
        })
  }


  resetForm(){
    this.setState({email: '', message: ''})
  }

  render(){
     return(
      <div className="ContactUs">
        <Header />
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <br /> <br /> <br />
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email Address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
           </div>

          <div className="form-group">
            <label htmlFor="message">Leave Your Message Below</label>
            <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)}/>

          </div>
          <br /> <br /> <br />
          <button type="submit" className="btn btn-primary btn-block">Submit</button>
          <br /> <br /> <br />
        </form>
        <Footer />
      </div>
    );
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }



}








