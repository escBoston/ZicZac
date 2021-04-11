import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Redirect, BrowserRouter, Switch, Route , HashRouter} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import React, { Component } from "react";


export default class ContactUs extends React.Component{



  render(){
     return(
      <div className="ContactUs">
        <Header />
        <form>
          <br /> <br /> <br />
          <div className="form-group">
            <label htmlFor="message">Leave Your Message Below</label>
            <textarea className="form-control" rows="5" />

          </div>
          <br /> <br /> <br />
          <button type="submit" className="btn btn-primary btn-block">Submit</button>
          <br /> <br /> <br />
        </form>
        <Footer />
      </div>
    );
  }

}








